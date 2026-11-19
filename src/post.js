import * as THREE from 'three';
import { FULLSCREEN_VERT, CAMERA_RAY, KEY_LIGHT, TUB_SHAPE, IGN } from './glsl.js';
import { KEY, DRIPS } from './config.js';

const pass = (fragmentShader, uniforms, extra = {}) => new THREE.ShaderMaterial({
  vertexShader: FULLSCREEN_VERT,
  fragmentShader,
  uniforms,
  depthTest: false,
  depthWrite: false,
  ...extra,
});

// Adds one jittered sample into the accumulation buffer.
export const makeAccumulate = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  uniform float weight;
  varying vec2 vUv;
  void main() { gl_FragColor = texture2D(tSrc, vUv) * weight; }`,
  { tSrc: { value: null }, weight: { value: 1 } },
  { blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor, transparent: true });

// Copies the view depth (kept in alpha) into its own texture.
export const makeDepthCopy = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  varying vec2 vUv;
  void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).a); }`,
  { tSrc: { value: null } });

// One-off, high-quality blur of everything behind the focal plane (runs at load).
// Input alpha is view depth.
export const makePlateBlur = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  uniform float focus;
  uniform float cocScale;
  uniform float cocMax;
  varying vec2 vUv;
  const int TAPS = 180;
  float cocFar(float z) { return clamp(cocScale * (1.0 / focus - 1.0 / z), 0.0, cocMax); }
  void main() {
    vec4 c = texture2D(tSrc, vUv);
    float cc = cocFar(c.a);
    if (c.a < focus) { gl_FragColor = vec4(c.rgb, 1.0); return; }
    vec3 sum = c.rgb / (cc * cc + 1.0);
    float wsum = 1.0 / (cc * cc + 1.0);
    float area = 3.14159 * cocMax * cocMax / float(TAPS);
    for (int i = 1; i < TAPS; i++) {
      float fi = float(i);
      float r = sqrt(fi / float(TAPS)) * cocMax;
      float a = fi * 2.399963;
      vec2 o = vec2(cos(a), sin(a)) * r;
      vec4 s = texture2D(tSrc, vUv + o * texel);
      float sc = cocFar(s.a);
      float w = clamp(sc - r + 1.0, 0.0, 1.0) * area / (3.14159 * sc * sc + 1.0);
      sum += s.rgb * w;
      wsum += w;
    }
    gl_FragColor = vec4(sum / wsum, 1.0);
  }`,
  { tSrc: { value: null }, texel: { value: new THREE.Vector2() }, focus: { value: 8.6 }, cocScale: { value: 100 }, cocMax: { value: 12 } });

// Out-of-focus blur for the strip light's own layer: one depth, so one radius.
export const makeDiscBlur = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  uniform float radius;
  varying vec2 vUv;
  const int TAPS = 56;
  void main() {
    vec4 sum = texture2D(tSrc, vUv);
    for (int i = 1; i < TAPS; i++) {
      float fi = float(i);
      float r = sqrt(fi / float(TAPS)) * radius;
      float a = fi * 2.399963;
      sum += texture2D(tSrc, vUv + vec2(cos(a), sin(a)) * r * texel);
    }
    gl_FragColor = sum / float(TAPS);
  }`,
  { tSrc: { value: null }, texel: { value: new THREE.Vector2() }, radius: { value: 8 } });

// Per frame: the baked room under its steady lights, plus the strip light's
// share at its current brightness and swing, the tub's shadow, the glow of the
// damp air around the strip light, rings on the water, and the reflections of
// everything that moves. Output alpha = 1 - near-field blur amount.
export const makeComposite = () => pass(/* glsl */`
  uniform sampler2D tBase;
  uniform sampler2D tStrip0;
  uniform sampler2D tStrip1;
  uniform sampler2D tStrip2;
  uniform sampler2D tData1;
  uniform sampler2D tData2;
  uniform sampler2D tDepth;
  uniform sampler2D tMirror;
  uniform sampler2D tFix;
  uniform vec3 stripW;      // brightness x weight of the three baked swing positions
  uniform vec4 fixRect;     // where the strip light's layer sits on screen
  uniform float fixDepth;
  uniform vec2 fixBlur;     // the strip light's blur radius, in the mirror image's own coordinates
  uniform float fixLod;     // and the mip level to read it at
  uniform vec4 ripples[${DRIPS.length}]; // x, z, seconds since the drop landed, strength
  uniform vec3 airPts[5];   // points along the lit tube
  uniform vec3 airColor;
  uniform float streak;     // strength of reflections on damp concrete
  uniform float keyRadius;
  uniform float baseGain;
  uniform float reflGain;
  varying vec2 vUv;
  ${CAMERA_RAY}
  ${KEY_LIGHT}
  ${TUB_SHAPE}
  ${IGN}

  // slope of the water surface from the rings spreading out of each drip
  vec2 rippleSlope(vec2 p) {
    vec2 s = vec2(0.0);
    for (int i = 0; i < ${DRIPS.length}; i++) {
      vec4 r = ripples[i];
      vec2 v = p - r.xy;
      float dist = length(v) + 1.0e-4;
      float x = dist - r.z * 2.3;   // ahead (+) or behind (-) the leading ring
      float env = smoothstep(0.1, -0.06, x) * exp(min(x, 0.0) * 1.25);
      float amp = r.w * exp(-r.z * 1.35) / (0.35 + dist);
      s += (v / dist) * (cos(x * 23.0) * env * amp);
    }
    return s;
  }

  void main() {
    vec4 d1 = texture2D(tData1, vUv);
    vec4 d2 = texture2D(tData2, vUv);
    bool isFloor = d1.z != 0.0;
    vec3 rd = viewRay(vUv);
    vec2 puv = vUv;      // where to read the baked plates
    vec2 muv = d1.xy;    // where to read the mirror image
    float shadow = 1.0;
    float behind = 0.0;  // 1 on floor that lies behind the tub, which cannot mirror it

    if (isFloor) {
      vec3 P = camPos + rd * (-camPos.y / rd.y);
      behind = smoothstep(-0.3, -0.9, P.z);
      // rings on the water. At this grazing angle a small tilt of the surface moves a
      // reflection a long way up or down, and hardly at all sideways.
      vec2 slope = rippleSlope(P.xz) * mix(0.12, 1.0, d2.x);
      puv += vec2(0.4 * slope.x, 5.2 * slope.y);
      muv += vec2(-0.6 * slope.x, -7.6 * slope.y);

      // the tub's shadow under the spot: rays to points across the lamp
      vec2 q = P.xz - vec2(0.35, -0.45);
      if (dot(q, q) < 9.0) {
        vec3 bx = normalize(cross(keyDir, vec3(0.0, 0.0, 1.0)));
        vec3 by = cross(keyDir, bx);
        float rot = ign(gl_FragCoord.xy) * 6.2831853;
        float lit = 0.0;
        vec3 from = P + vec3(0.0, 0.002, 0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i) + 0.5;
          float r = sqrt(fi / 12.0) * keyRadius;
          float a = fi * 2.399963 + rot;
          vec3 lamp = keyPos + (bx * cos(a) + by * sin(a)) * r;
          lit += tubHit(from, normalize(lamp - from)) > 0.0 ? 0.0 : 1.0;
        }
        shadow = lit / 12.0;
      }
    }

    vec3 base = texture2D(tBase, puv).rgb * baseGain;
    // open water mirrors the room, and a mirror image is not darkened by a shadow
    if (isFloor) base *= mix(1.0, 0.14 + 0.86 * shadow, 1.0 - 0.9 * d2.x);
    vec3 col = base
      + texture2D(tStrip0, puv).rgb * stripW.x
      + texture2D(tStrip1, puv).rgb * stripW.y
      + texture2D(tStrip2, puv).rgb * stripW.z;

    // damp air glowing around the strip light, up to whatever the view ray hits
    float depth = textureLod(tDepth, vUv, 2.5).r;
    float tEnd = depth / dot(rd, camFwd);
    float air = 0.0;
    for (int i = 0; i < 5; i++) {
      vec3 v = airPts[i] - camPos;
      float b = dot(v, rd);
      float h = sqrt(max(dot(v, v) - b * b, 0.0) + 1.2);
      air += (atan((tEnd - b) / h) + atan(b / h)) / h;
    }
    col += airColor * air;

    // the strip light itself, already blurred
    vec2 fuv = (vUv - fixRect.xy) / fixRect.zw;
    if (fuv.x > 0.0 && fuv.x < 1.0 && fuv.y > 0.0 && fuv.y < 1.0) {
      vec4 f = texture2D(tFix, fuv);
      float vis = smoothstep(fixDepth - 9.0, fixDepth - 3.0, depth);
      col = col * (1.0 - f.a * vis) + f.rgb * vis;
    }

    // reflections of the things that move: the tub and the strip light
    if (isFloor && reflGain > 0.0) {
      if (d1.z < 0.0) {
        // damp concrete: every wet facet tips a different amount towards the viewer, so it
        // mirrors a different height of whatever stands behind it. Together they read as a
        // sparkling streak running towards the camera.
        // (In the mirror image alpha marks the tub. Floor behind the tub sees past it.)
        vec4 b = textureLod(tMirror, muv, 1.5);
        vec2 guv = vec2(muv.x + (d2.z - 0.5) * (0.02 + 0.07 * d2.y), mix(muv.y, 0.84, pow(d2.y, 1.4)));
        vec4 glint = textureLod(tMirror, guv, 1.2);
        vec4 smear = (textureLod(tMirror, muv, 3.0)
                    + textureLod(tMirror, muv + vec2(0.0, 0.06), 3.0)
                    + textureLod(tMirror, muv + vec2(0.0, 0.14), 3.5)
                    + textureLod(tMirror, muv + vec2(0.0, 0.25), 4.0)
                    + textureLod(tMirror, muv - vec2(0.0, 0.05), 3.0)) / 5.0;
        // (the strip light's sheen on damp concrete is already in the baked plates)
        vec3 refl = min(glint.rgb * glint.a + smear.rgb * smear.a, vec3(1.3)) * (1.0 - behind);
        col = col * (1.0 - b.a * 0.8 * (1.0 - behind)) + refl * (-d1.z) * streak * (0.4 + 0.6 * d2.w);
      } else {
        // open water: a true mirror. The tub's image is sharp; the strip light's is as far
        // out of focus as the strip light itself.
        vec4 b = textureLod(tMirror, muv, 0.0);
        vec4 soft = vec4(0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i) + 0.5;
          float a = fi * 2.399963;
          soft += textureLod(tMirror, muv + vec2(cos(a), sin(a)) * sqrt(fi / 12.0) * fixBlur, fixLod);
        }
        soft /= 12.0;
        float tubHere = b.a * (1.0 - behind);
        vec3 img = mix(soft.rgb * (1.0 - soft.a) * 0.6, b.rgb, b.a);
        col = col * (1.0 - tubHere) + img * d1.z * (1.0 - behind * min(1.0, b.a * 4.0));
      }
    }
    gl_FragColor = vec4(col, 1.0 - d1.w);
  }`,
  {
    tBase: { value: null }, tStrip0: { value: null }, tStrip1: { value: null }, tStrip2: { value: null },
    tData1: { value: null }, tData2: { value: null }, tDepth: { value: null }, tMirror: { value: null }, tFix: { value: null },
    stripW: { value: new THREE.Vector3() },
    fixRect: { value: new THREE.Vector4(0, 0, 1, 1) }, fixDepth: { value: 70 }, fixLod: { value: 3 }, fixBlur: { value: new THREE.Vector2() },
    ripples: { value: DRIPS.map(() => new THREE.Vector4()) },
    airPts: { value: [0, 1, 2, 3, 4].map(() => new THREE.Vector3()) },
    airColor: { value: new THREE.Color() },
    streak: { value: 1.1 },
    keyRadius: { value: KEY.sourceRadius },
    baseGain: { value: 1 }, reflGain: { value: 1 },
    camPos: { value: new THREE.Vector3() }, camFwd: { value: new THREE.Vector3() },
    camRight: { value: new THREE.Vector3() }, camUp: { value: new THREE.Vector3() },
    keyPos: { value: KEY.pos }, keyDir: { value: KEY.dir },
    keyCone: { value: new THREE.Vector2(KEY.cosOuter, KEY.cosInner) },
    tubShape: { value: new THREE.Vector3() },
  });

// The tub is drawn into its own layer at the screen's full resolution (see main.js).
// Its colour is already multiplied by coverage; dust and drips drawn into the same layer
// count only where they are over the tub, since the room's picture has them everywhere else.
const LAYER = /* glsl */`
  uniform sampler2D tLayer;
  uniform vec4 layerRect;   // where the tub's layer sits on screen
  vec3 withTub(vec3 scene, vec2 uv) {
    vec2 luv = (uv - layerRect.xy) / layerRect.zw;
    if (luv.x <= 0.0 || luv.x >= 1.0 || luv.y <= 0.0 || luv.y >= 1.0) return scene;
    vec4 l = texture2D(tLayer, luv);
    return scene * (1.0 - l.a) + l.rgb * step(1.0e-4, l.a);
  }`;
const layerUniforms = () => ({ tLayer: { value: null }, layerRect: { value: new THREE.Vector4(0, 0, 1, 1) } });

// Per frame, at quarter resolution: bright areas only, for the lens glow.
export const makeBloomDown = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  uniform vec2 texel;
  varying vec2 vUv;
  ${LAYER}
  vec3 bright(vec2 uv) {
    vec3 c = withTub(texture2D(tSrc, uv).rgb, uv);
    float l = max(c.r, max(c.g, c.b));
    // starts above the label's whites, so that lettering stays crisp: only lamps,
    // their reflections and hard highlights glow
    return c * smoothstep(1.5, 3.2, l);
  }
  void main() {
    vec3 c = bright(vUv + texel * vec2(-1.0, -1.0)) + bright(vUv + texel * vec2(1.0, -1.0))
           + bright(vUv + texel * vec2(-1.0, 1.0)) + bright(vUv + texel * vec2(1.0, 1.0));
    gl_FragColor = vec4(min(c * 0.25, vec3(60.0)), 1.0);
  }`,
  { tSrc: { value: null }, texel: { value: new THREE.Vector2() }, ...layerUniforms() });

export const makeBloomBlur = () => pass(/* glsl */`
  uniform sampler2D tSrc;
  uniform vec2 dir; // texel step along the blur axis
  varying vec2 vUv;
  void main() {
    // 9-tap gaussian folded into 5 bilinear fetches
    vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
    c += (texture2D(tSrc, vUv + dir * 1.3846153846).rgb + texture2D(tSrc, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
    c += (texture2D(tSrc, vUv + dir * 3.2307692308).rgb + texture2D(tSrc, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`,
  { tSrc: { value: null }, dir: { value: new THREE.Vector2() } });

// Per frame, at the room's resolution: blur of the floor in front of the focal plane
// (only below the focal line). Input alpha = 1 - near-field blur amount.
export const makeNearBlur = () => pass(/* glsl */`
  uniform sampler2D tMain;
  uniform vec2 texel;
  uniform float cocMax;
  uniform float dofTop;   // uv.y above which nothing is out of focus in the foreground
  varying vec2 vUv;
  const int TAPS = 64;
  ${IGN}
  void main() {
    vec4 c = texture2D(tMain, vUv);
    vec3 col = c.rgb;
    if (vUv.y < dofTop) {
      float cc = (1.0 - c.a) * cocMax;
      vec3 sum = col / (cc * cc + 1.0);
      float wsum = 1.0 / (cc * cc + 1.0);
      float area = 3.14159 * cocMax * cocMax / float(TAPS);
      float rot = ign(gl_FragCoord.xy) * 6.2831853;
      for (int i = 1; i < TAPS; i++) {
        float fi = float(i);
        float r = sqrt(fi / float(TAPS)) * cocMax;
        float a = fi * 2.399963 + rot;
        vec2 o = vec2(cos(a), sin(a)) * r;
        vec4 s = texture2D(tMain, vUv + o * texel);
        float sc = (1.0 - s.a) * cocMax;
        float w = clamp(sc - r + 1.0, 0.0, 1.0) * area / (3.14159 * sc * sc + 1.0);
        sum += s.rgb * w;
        wsum += w;
      }
      col = sum / wsum;
    }
    gl_FragColor = vec4(col, 1.0);
  }`,
  { tMain: { value: null }, texel: { value: new THREE.Vector2() }, cocMax: { value: 12 }, dofTop: { value: 0.3 } });

// Per frame, at the screen's resolution: the room with the tub's layer over it, then
// lens glow, vignette, tone curve, grade and grain.
export const makeFinal = () => pass(/* glsl */`
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform sampler2D tWide;
  uniform float time;
  uniform float exposure;
  uniform float bloomGain;
  varying vec2 vUv;
  ${LAYER}

  // ACES filmic (Stephen Hill's fit)
  vec3 rrtOdt(vec3 v) {
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
  }
  vec3 aces(vec3 c) {
    const mat3 inM = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
    const mat3 outM = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
    c *= exposure / 0.6;
    c = inM * c;
    c = rrtOdt(c);
    c = outM * c;
    return clamp(c, 0.0, 1.0);
  }

  void main() {
    vec3 col = withTub(texture2D(tScene, vUv).rgb, vUv);

    // lens: a tight glow, a wide soft one, and a faint sideways streak off the brightest lamps
    col += texture2D(tBloom, vUv).rgb * (0.05 * bloomGain);
    col += texture2D(tWide, vUv).rgb * (vec3(0.011, 0.013, 0.015) * bloomGain);
    vec2 q = vUv - 0.5;
    col *= 1.0 - 0.5 * smoothstep(0.2, 0.95, dot(q, q) * 2.0);

    col = aces(col);
    col = pow(col, vec3(1.0 / 2.2));

    // grade: cold shadows, warm highlights, a little extra contrast
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, col * vec3(0.9, 1.0, 1.1) + vec3(0.0, 0.004, 0.008), (1.0 - smoothstep(0.0, 0.42, luma)) * 0.55);
    col = mix(col, col * vec3(1.03, 1.0, 0.95), smoothstep(0.5, 1.0, luma) * 0.6);
    col = mix(col, col * col * (3.0 - 2.0 * col), 0.18);

    // film grain, stronger in the mid-tones
    float n = fract(sin(dot(gl_FragCoord.xy + fract(time) * 173.0, vec2(12.9898, 78.233))) * 43758.5453);
    col += (n - 0.5) * 0.028 * (1.0 - 0.6 * luma);

    gl_FragColor = vec4(col, 1.0);
  }`,
  { tScene: { value: null }, tBloom: { value: null }, tWide: { value: null }, time: { value: 0 }, exposure: { value: 1.0 }, bloomGain: { value: 1 }, ...layerUniforms() });
