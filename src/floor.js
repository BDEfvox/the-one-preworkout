import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { patch } from './materials.js';

// Old wet concrete: a slab worn down to the aggregate, cracked, with saw-cut
// joints and shallow pools in the low spots. Evaluated only while the plates
// are baked at load (the camera never moves).
const FLOOR_GLSL = /* glsl */`
// one layer of small rounded stones; height in cell units
float pebbles(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  float h = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 c = i + g;
      vec2 o = hash22(c);
      vec2 r = g + 0.5 + (o - 0.5) * 0.72 - f;
      float k = hash12(c + 17.3);
      float rad = mix(0.3, 0.6, k);
      float a = 6.2831 * hash12(c + 3.1);
      vec2 e = vec2(cos(a), sin(a));
      vec2 q = vec2(dot(r, e) * mix(0.68, 1.0, o.x), dot(r, vec2(-e.y, e.x)));
      float d = length(q) / rad;
      float cap = sqrt(max(1.0 - d * d, 0.0));
      h = max(h, cap * rad * mix(0.5, 0.9, o.y));
    }
  }
  return h;
}

// distance to the nearest cell wall of a Voronoi pattern, in cell units
float cellEdge(vec2 x) {
  vec2 n = floor(x), f = fract(x);
  vec2 mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 r = g + hash22(n + g) - f;
      float d = dot(r, r);
      if (d < md) { md = d; mr = r; mg = g; }
    }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) {
    for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j));
      vec2 r = g + hash22(n + g) - f;
      if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
  }
  return md;
}

// fine relief: exposed aggregate and sand
float grainHeight(vec2 p) {
  float h = pebbles(p * 6.0) / 6.0 * 0.3;
  h = max(h, pebbles(p * 17.0 + 7.7) / 17.0 * 0.5);
  h = max(h, pebbles(p * 41.0 + 3.3) / 41.0 * 0.6);
  h += (vnoise(p * 150.0) - 0.5) * 0.0013 + (vnoise(p * 420.0) - 0.5) * 0.0005;
  return h;
}

// 1 inside a crack or a saw-cut joint
float cracks(vec2 p) {
  vec2 w = p + 1.6 * (vec2(fbm3(p * 0.21 + 2.0), fbm3(p * 0.21 + 31.0)) - 0.5);
  float e = cellEdge(w * 0.13) / 0.13;
  float c = (1.0 - smoothstep(0.012, 0.045, e)) * smoothstep(0.42, 0.6, vnoise(p * 0.085 + 4.4));
  // one long crack wandering past the tub
  float d = abs(p.x * 0.42 + p.y * 0.91 - 1.3 + 1.5 * (fbm3(p * 0.33 + 9.0) - 0.5) + 0.12 * (vnoise(p * 2.3) - 0.5));
  c = max(c, 1.0 - smoothstep(0.014, 0.05, d));
  // hairline branches
  float e2 = cellEdge(w * 0.47 + 5.0) / 0.47;
  c = max(c, 0.6 * (1.0 - smoothstep(0.006, 0.02, e2)) * smoothstep(0.55, 0.7, vnoise(p * 0.3 + 14.0)));
  float joint = 1.0 - smoothstep(0.03, 0.06, min(abs(p.y + 7.4), abs(p.x - 6.6)));
  return max(c, joint);
}

// where water stands: 0 = none, 1 = a pool
float pools(vec2 p) {
  float m = smoothstep(0.54, 0.6, fbm(p * 0.33 + 3.1));
  // the strip between the camera and the tub stays wet concrete, so the tub's reflection streaks
  m *= smoothstep(0.75, 1.35, length((p - vec2(0.05, 1.6)) / vec2(0.85, 3.4)));
  // and the floor under the spotlight is damp, not flooded: the light needs concrete to land on
  // (open water is a mirror, and would show the dark room instead of the pool of light)
  m *= smoothstep(0.8, 1.25, length((p - vec2(0.2, -2.6)) / vec2(3.6, 4.4)));
  // pools placed where the drips land
  vec2 q = p + (vec2(vnoise(p * 1.7), vnoise(p * 1.7 + 13.0)) - 0.5) * 0.5;
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(1.12, 0.85)) / vec2(0.6, 0.8))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-1.2, 2.3)) / vec2(0.62, 1.0))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-1.65, -1.6)) / vec2(0.7, 0.75))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(2.3, -4.6)) / vec2(1.6, 1.3))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(-3.4, -9.5)) / vec2(2.2, 2.0))));
  m = max(m, 1.0 - smoothstep(0.55, 1.0, length((q - vec2(4.4, -13.0)) / vec2(2.6, 2.4))));
  return m;
}

struct Floor {
  vec3 N;         // surface normal (world)
  vec3 albedo;
  float rough;
  float stone;    // 1 = concrete above water, 0 = open water
  float spot;     // 1 on a small wet facet that mirrors like water
  float crevice;  // 0 deep between the stones, 1 on top
  float wet;      // how damp the concrete is
  float pool;
  vec2 facet;     // two random numbers per facet
};

Floor floorSurface(vec2 p, vec3 toCam) {
  Floor s;
  float e = 0.0012;
  float h = grainHeight(p);
  float hx = grainHeight(p + vec2(e, 0.0));
  float hz = grainHeight(p + vec2(0.0, e));
  vec3 Ns = normalize(vec3(h - hx, e, h - hz));

  float crack = cracks(p);
  float slab = (fbm3(p * 0.35 + 7.3) - 0.5) * 0.085;
  float height = slab + h - 0.07 * crack;
  s.pool = pools(p);
  float level = mix(-0.036, 0.062, s.pool);
  s.stone = smoothstep(-0.002, 0.004, height - level);
  s.crevice = smoothstep(0.0, 0.012, h) * (1.0 - crack);
  s.wet = max(smoothstep(0.36, 0.62, fbm(p * 0.45 + 9.0)), smoothstep(0.0, 0.3, s.pool));
  s.wet = max(s.wet, 0.42);
  vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), Ns, s.stone));

  // wet glints: small mirror-like facets, most tipped a little towards the viewer
  vec2 gp = p * 64.0;
  vec2 gc = floor(gp);
  vec2 gr = hash22(gc + 91.7);
  s.spot = step(0.8, hash12(gc + 5.3)) * smoothstep(0.42, 0.3, length(fract(gp) - 0.5 - (gr - 0.5) * 0.3)) * s.stone * s.wet;
  vec2 fwd = normalize(toCam.xz);
  vec2 side = vec2(-fwd.y, fwd.x);
  float tip = gr.x * gr.x * 0.6;
  float lean = (gr.y - 0.5) * 0.5;
  vec3 Ng = normalize(vec3(fwd.x * tip + side.x * lean, 1.0, fwd.y * tip + side.y * lean));
  s.N = normalize(mix(N, Ng, s.spot));
  s.facet = hash22(mix(floor(p * 150.0), gc, step(0.5, s.spot)) + 47.1);

  // colour: mottled grey cement, sand speckle, old oil, a dusting of lifting chalk
  vec3 c = vec3(0.06, 0.058, 0.054) * (0.3 + 0.8 * fbm(p * 1.1 + 2.0) + 0.7 * fbm(p * 4.3 + 8.0));
  c *= (0.72 + 0.56 * vnoise(p * 23.0)) * (0.8 + 0.4 * vnoise(p * 7.0 + 3.0));
  c = mix(c, vec3(0.045, 0.04, 0.036), 0.75 * smoothstep(0.58, 0.74, fbm(p * 0.27 + 40.0)));
  float chalk = smoothstep(0.46, 0.72, fbm(p * 2.1 + 17.0)) * (1.0 - smoothstep(0.5, 1.5, length(p - vec2(0.85, -0.6))));
  chalk *= (1.0 - s.pool) * s.stone;
  c = mix(c, vec3(0.3, 0.3, 0.29), 0.3 * chalk);
  c *= 1.0 - 0.8 * crack;
  float dampness = s.wet * (1.0 - 0.6 * chalk);
  vec3 wetC = c * mix(1.0, 0.3, dampness);
  s.albedo = mix(c * 0.1, wetC, s.stone);
  s.rough = mix(0.06, mix(0.92, 0.34, dampness), s.stone);
  s.rough = mix(s.rough, 0.08, s.spot);
  return s;
}
`;

// The floor as it is lit by the room's lamps, plus the mirror image of the
// room in the water. The mirror image comes from a camera below the floor.
export function makeFloor() {
  const uniforms = {
    mirrorMap: { value: null },
    mirrorMatrix: { value: new THREE.Matrix4() },
    floorSeed: { value: 0 },
    reflOn: { value: 1 },
  };
  const mat = patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0 }), {
    key: 'floor',
    uniforms,
    decl: /* glsl */`
      uniform sampler2D mirrorMap;
      uniform mat4 mirrorMatrix;
      uniform float floorSeed;
      uniform float reflOn;
      ${NOISE}
      ${FLOOR_GLSL}`,
    albedo: /* glsl */`
      Floor fs = floorSurface(vWPos.xz, cameraPosition - vWPos);
      diffuseColor.rgb = fs.albedo;`,
    rough: 'roughnessFactor = fs.rough;',
    normal: 'normal = normalize(mat3(viewMatrix) * fs.N);',
    light: /* glsl */`
      {
        vec3 V = normalize(cameraPosition - vWPos);
        // A smooth-surface highlight model can blow up when both the lamp and the eye are
        // almost level with the floor, where in reality the bumps hide each other: cap it.
        outgoingLight = totalDiffuse + min(totalSpecular, vec3(2.0)) + totalEmissiveRadiance;
        // one random tilt per bake sample: over the samples this spreads the reflection
        // the way a slightly rough wet surface does
        vec2 rnd = hash22(gl_FragCoord.xy + floorSeed * 19.19) - 0.5;
        vec3 Nj = normalize(fs.N + vec3(rnd.x, 0.0, rnd.y) * mix(0.004, 0.07, fs.stone * (1.0 - fs.spot)));
        vec3 R = reflect(-V, Nj);
        float NoV = clamp(dot(Nj, V), 0.0, 1.0);
        float F = 0.028 + 0.972 * pow(1.0 - NoV, 5.0);
        // at this grazing angle crevices hide behind their neighbours, and rays that
        // bounce low run into other stones
        float seen = mix(1.0, 0.12 + 0.88 * fs.crevice, fs.stone);
        float escape = mix(1.0, smoothstep(-0.05, 0.16, R.y), fs.stone);
        float gloss = mix(mix(1.0, mix(0.05, 0.3, fs.wet), fs.stone), 1.0, fs.spot);
        vec3 Rs = vec3(R.x, max(abs(R.y), 0.012), R.z);
        vec4 q = mirrorMatrix * vec4(vWPos + Rs * 45.0, 1.0);
        vec3 env = textureLod(mirrorMap, clamp(q.xy / q.w, 0.003, 0.997), mix(1.0, 2.6, fs.stone)).rgb;
        outgoingLight += env * (F * seen * escape * gloss * reflOn);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(520, 360), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, 0, -90);
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.userData.uniforms = uniforms;
  return mesh;
}

// What the per-frame composite needs to know about each floor pixel.
// mode 1: xy = where this pixel looks in the mirror camera's image,
//         z  = reflection weight (negative on damp concrete, positive on open water),
//         w  = near-field blur amount (0..1).
// mode 2: x  = pool (1 = open water), y, z = two random numbers per facet, w = dampness.
export function makeFloorData() {
  return new THREE.ShaderMaterial({
    uniforms: {
      mirrorMatrix: { value: new THREE.Matrix4() },
      mode: { value: 1 },
      focus: { value: 8.6 },
      cocScale: { value: 100 },
      cocMax: { value: 12 },
    },
    vertexShader: /* glsl */`
      varying vec3 vWPos;
      varying float vViewZ;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWPos = wp.xyz;
        vec4 mv = viewMatrix * wp;
        vViewZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform mat4 mirrorMatrix;
      uniform int mode;
      uniform float focus;
      uniform float cocScale;
      uniform float cocMax;
      varying vec3 vWPos;
      varying float vViewZ;
      ${NOISE}
      ${FLOOR_GLSL}
      void main() {
        vec3 toCam = cameraPosition - vWPos;
        Floor fs = floorSurface(vWPos.xz, toCam);
        if (mode == 2) {
          gl_FragColor = vec4(1.0 - fs.stone, fs.facet, fs.wet);
          return;
        }
        vec3 V = normalize(toCam);
        float F = 0.028 + 0.972 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
        float seen = mix(1.0, 0.12 + 0.88 * fs.crevice, fs.stone);
        float gloss = mix(mix(1.0, mix(0.05, 0.3, fs.wet), fs.stone), 1.0, fs.spot);
        float w = F * seen * min(1.0, gloss * 3.0);
        vec4 q = mirrorMatrix * vec4(vWPos, 1.0);
        vec2 uv = q.xy / q.w;
        float nearCoc = clamp(cocScale * (1.0 / vViewZ - 1.0 / focus) / cocMax, 0.0, 1.0);
        // a reflection in still water is as sharp as the thing it reflects
        nearCoc *= mix(0.12, 1.0, fs.stone);
        gl_FragColor = vec4(uv, max(w, 1.0e-4) * (fs.stone > 0.5 ? -1.0 : 1.0), nearCoc);
      }`,
  });
}
