import * as THREE from 'three';
import { FULLSCREEN_VERT, CAMERA_RAY, KEY_LIGHT, TUB_SHAPE, IGN } from './glsl.js';
import { KEY, TUBE, DRIPS, DRIP_GRAVITY, DRIP_HEIGHT } from './config.js';

const hash1 = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

// =====================================================================
// The broken strip light: how bright it is, and where it has swung to
// =====================================================================

// Brightness over time, 0..1.35. It runs in cycles of about seven seconds:
// mostly on, with a faint shimmer and the odd dropout; then a spell of failing
// to strike, sometimes going dark for a moment before it catches again.
export function flicker(t, calm = false) {
  if (calm) return 0.86 + 0.08 * Math.sin(t * 1.3) * Math.sin(t * 0.47);
  const cycle = 7.3;
  const n = Math.floor(t / cycle), u = t - n * cycle;
  const r1 = hash1(n * 3.1 + 1), r2 = hash1(n * 5.7 + 2), r3 = hash1(n * 9.3 + 3);
  const start = 2.4 + r1 * 2.4, stutter = 0.45 + r2 * 0.75;
  const dark = r3 < 0.6 ? 0.3 + r3 : 0;
  if (u > start && u < start + stutter) {
    const k = Math.floor((u - start) / 0.085);
    const h = hash1(n * 17.0 + k * 1.37);
    return h < 0.42 ? 0.04 + 0.12 * h : (h < 0.62 ? 0.4 : 1.0);
  }
  if (u >= start + stutter && u < start + stutter + dark) {
    const k = Math.floor((u - start - stutter) / 0.09);
    return hash1(n * 29.0 + k * 3.3) > 0.88 ? 0.45 : 0.015; // a failed strike now and then
  }
  let v = 1.0;
  const since = u - (start + stutter + dark);
  if (since >= 0 && since < 0.14) v = 1.35 - since * 2.5;  // it catches with a flash
  v *= 0.95 + 0.05 * Math.sin(t * 61.0) * Math.sin(t * 7.3);
  const h = hash1(Math.floor(t / 0.07) * 0.731);
  if (h > 0.975) v *= 0.3;
  else if (h > 0.955) v *= 0.72;
  return v;
}

// Pendulum angles in radians: side to side, towards and away, and the batten
// rocking on its one remaining hook.
export function sway(t, calm = false) {
  const k = calm ? 0.35 : 1;
  const gust = 0.72 + 0.28 * Math.sin(t * 0.21 + 0.6);
  return {
    side: k * TUBE.swing * gust * (0.74 * Math.sin(t * 1.9) + 0.26 * Math.sin(t * 2.63 + 1.1)),
    depth: k * TUBE.swing * 0.4 * Math.sin(t * 1.7 + 2.0),
    rock: k * (0.04 * Math.sin(t * 3.1 + 0.5) + 0.022 * Math.sin(t * 4.7)),
  };
}

// The strip light is drawn twice: into its own layer, where alpha means coverage,
// and into the floor's mirror image, where alpha 1 is reserved for the tub.
const coverage = { value: 1 };
const flat = (color) => new THREE.ShaderMaterial({
  uniforms: { color: { value: new THREE.Color(color) }, coverage },
  vertexShader: 'void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: 'uniform vec3 color; uniform float coverage; void main() { gl_FragColor = vec4(color, coverage); }',
});

export function makeFixture() {
  const scene = new THREE.Scene();
  const pivot = new THREE.Group();
  pivot.position.copy(TUBE.anchor);
  scene.add(pivot);
  const L = TUBE.length;

  const dark = flat(0x000000);
  const body = flat(0x000000);
  const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, TUBE.cable, 6), dark);
  cable.position.y = -TUBE.cable / 2;
  pivot.add(cable);

  const batten = new THREE.Group();
  batten.position.y = -TUBE.cable;
  pivot.add(batten);
  const add = (geo, mat, x, y, z, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.z = rz;
    batten.add(m);
    return m;
  };
  const x0 = -0.8; // the hook sits a little in from the high end
  add(new THREE.BoxGeometry(L, 0.5, 1.25), body, x0 + L / 2, 0.1, 0);
  add(new THREE.BoxGeometry(0.35, 0.75, 1.35), body, x0 + 0.17, -0.2, 0);
  add(new THREE.BoxGeometry(0.35, 0.75, 1.35), body, x0 + L - 0.17, -0.2, 0);
  // the broken chain still hanging from the far end
  const stub = add(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 6), dark, x0 + L - 1.2, -1.2, 0, 0);
  // two tubes: one dead, one alive
  const tubeLen = L - 0.9;
  add(new THREE.CylinderGeometry(0.19, 0.19, tubeLen, 16), flat(0x040505), x0 + L / 2, -0.32, -0.3, Math.PI / 2);
  const lit = new THREE.ShaderMaterial({
    uniforms: {
      glow: { value: new THREE.Color() },   // the whole tube
      ends: { value: new THREE.Color() },   // the electrodes, which glow orange while it fails to strike
      coverage,
    },
    vertexShader: 'varying float vAlong; void main() { vAlong = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`
      uniform vec3 glow;
      uniform vec3 ends;
      uniform float coverage;
      varying float vAlong;
      void main() {
        float e = smoothstep(0.1, 0.0, min(vAlong, 1.0 - vAlong));
        float worn = 1.0 - 0.55 * smoothstep(0.16, 0.0, min(vAlong, 1.0 - vAlong)); // blackened ends
        gl_FragColor = vec4(glow * worn + ends * e + vec3(0.004), coverage);
      }`,
  });
  add(new THREE.CylinderGeometry(0.19, 0.19, tubeLen, 16), lit, x0 + L / 2, -0.32, 0.3, Math.PI / 2);

  const tubeA = new THREE.Vector3(x0 + 0.45, -0.32, 0.3), tubeB = new THREE.Vector3(x0 + L - 0.45, -0.32, 0.3);
  const pink = new THREE.Color(1.0, 0.72, 0.7);
  const api = {
    scene,
    coverage,
    setPose(side, depth = 0, rock = 0) {
      pivot.rotation.set(depth, 0, side);
      batten.rotation.z = -TUBE.tilt - rock - side * 0.35;
      stub.rotation.z = TUBE.tilt + rock + side * 0.35 - side; // hangs straight down whatever the batten does
      scene.updateMatrixWorld(true);
    },
    // a point along the lit tube, 0..1, in world space
    point(u, target = new THREE.Vector3()) {
      return target.copy(tubeA).lerp(tubeB, u).applyMatrix4(batten.matrixWorld);
    },
    setBrightness(v) {
      // a failing tube goes pinker and its electrodes show
      const warm = 1 - THREE.MathUtils.smoothstep(v, 0.0, 0.5);
      // (dimmer than in proportion while it fails, so a tube that lights nothing does not look lit)
      lit.uniforms.glow.value.copy(TUBE.color).lerp(pink, warm * 0.6).multiplyScalar(9 * Math.pow(v, 1.6));
      lit.uniforms.ends.value.setRGB(1.0, 0.3, 0.1).multiplyScalar(2.2 * warm);
      body.uniforms.color.value.copy(TUBE.color).multiplyScalar(0.006 + 0.07 * v);
    },
  };
  api.setPose(0);
  api.setBrightness(1);
  return api;
}

// =====================================================================
// Water dripping from the roof
// =====================================================================
const FALL_TIME = Math.sqrt(2 * DRIP_HEIGHT / DRIP_GRAVITY);
const SPLASH = 7;        // droplets thrown up by each impact
const SPLASH_TIME = 0.2; // seconds they stay in the air: they rise about a centimetre
const MAX_QUADS = DRIPS.length * (1 + SPLASH);

// Where every drop is at time t. `age` is the time since this site's last impact.
export function dripState(t) {
  return DRIPS.map((d, i) => {
    const tt = t + d.phase + 100 * d.period;
    const n = Math.floor(tt / d.period), u = tt - n * d.period;
    const falling = u < FALL_TIME;
    return {
      site: d, index: i, cycle: n, falling,
      y: falling ? DRIP_HEIGHT - 0.5 * DRIP_GRAVITY * u * u : 0,
      speed: DRIP_GRAVITY * u,
      age: falling ? u + d.period - FALL_TIME : u - FALL_TIME,
    };
  });
}

// Drops and splashes are short streaks of light: quads rebuilt on the CPU each frame.
export function makeDrips(camera, focus) {
  const pos = new Float32Array(MAX_QUADS * 4 * 3);
  const uv = new Float32Array(MAX_QUADS * 4 * 2);
  const col = new Float32Array(MAX_QUADS * 4 * 3);
  const idx = new Uint16Array(MAX_QUADS * 6);
  for (let q = 0; q < MAX_QUADS; q++) {
    idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4, q * 4 + 2, q * 4 + 3], q * 6);
    uv.set([-1, -1, 1, -1, 1, 1, -1, 1], q * 8);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('tint', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { tDepth: { value: null }, res: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec3 tint;
      varying vec2 vUv;
      varying vec3 vTint;
      varying float vViewZ;
      void main() {
        vUv = uv;
        vTint = tint;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D tDepth;
      uniform float res;
      varying vec2 vUv;
      varying vec3 vTint;
      varying float vViewZ;
      void main() {
        // hidden behind the equipment in the baked picture
        if (texture2D(tDepth, gl_FragCoord.xy / res).r < vViewZ - 0.4) discard;
        // a drop drawn out by its own speed: round and bright at the head, thinning to a tail
        float t = vUv.y * 0.5 + 0.5;
        float side = abs(vUv.x) / mix(0.4, 1.0, smoothstep(0.0, 0.8, t));
        float shape = smoothstep(1.0, 0.45, side) * smoothstep(0.0, 0.3, t) * smoothstep(1.0, 0.88, t);
        // water is a lens: bright along the edges, a thin bright core
        float lens = (0.35 + 0.6 * smoothstep(0.3, 0.9, side) + 0.8 * smoothstep(0.3, 0.0, side)) * mix(0.35, 1.25, t * t);
        gl_FragColor = vec4(vTint * shape * lens, 0.0);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;

  const camPos = camera.position;
  const tanHalf = Math.tan(camera.fov * Math.PI / 360);
  const fwd = new THREE.Vector3();
  camera.getWorldDirection(fwd);
  const P = new THREE.Vector3(), D = new THREE.Vector3(), S = new THREE.Vector3(), V = new THREE.Vector3();
  const toKey = new THREE.Vector3();
  // the spotlight's strength at a point (same falloff as the shaders use)
  const keyAt = (p) => {
    toKey.copy(p).sub(KEY.pos);
    const d2 = toKey.lengthSq();
    const c = toKey.dot(KEY.dir) / Math.sqrt(d2);
    const s = THREE.MathUtils.smoothstep(c, KEY.cosOuter, KEY.cosInner);
    return s * KEY.candela / d2;
  };

  let quads = 0;
  // one streak centred on P, lying along the unit vector D
  const streak = (halfLen, radius, r, g, b, cocWorld) => {
    V.copy(P).sub(camPos);
    S.crossVectors(D, V).normalize();
    // out of focus: wider, longer, and dimmer by the same factor
    const rr = Math.hypot(radius, cocWorld), ll = Math.hypot(halfLen, cocWorld);
    const dim = (radius * halfLen) / (rr * ll);
    const o = quads * 12;
    const set = (k, sx, sy) => {
      pos[o + k * 3] = P.x + S.x * rr * sx + D.x * ll * sy;
      pos[o + k * 3 + 1] = P.y + S.y * rr * sx + D.y * ll * sy;
      pos[o + k * 3 + 2] = P.z + S.z * rr * sx + D.z * ll * sy;
      col[o + k * 3] = r * dim; col[o + k * 3 + 1] = g * dim; col[o + k * 3 + 2] = b * dim;
    };
    set(0, -1, -1); set(1, 1, -1); set(2, 1, 1); set(3, -1, 1);
    quads++;
  };

  return {
    mesh,
    material: mat,
    // cocPx(viewZ) gives the blur radius in pixels; stripGlow is the strip light's colour x brightness
    update(t, res, cocPx, stripGlow) {
      quads = 0;
      const states = dripState(t);
      const light = (p, wet) => {
        const k = keyAt(p) * 0.16;
        return [
          KEY.color.r * k + stripGlow.r * 0.11 + 0.003 * wet,
          KEY.color.g * k + stripGlow.g * 0.11 + 0.005 * wet,
          KEY.color.b * k + stripGlow.b * 0.11 + 0.007 * wet,
        ];
      };
      const cocWorld = (p) => {
        const z = V.copy(p).sub(camPos).dot(fwd);
        return cocPx(z) * (2 * tanHalf * z) / res;
      };
      for (const s of states) {
        const { site } = s;
        if (s.falling) {
          P.set(site.x, s.y, site.z);
          D.set(0, -1, 0);
          const [r, g, b] = light(P, 1);
          const far = site.z < -6 ? 0.45 : 1; // distant drops are only a faint glint
          streak(Math.max(0.03, s.speed * 0.0042), 0.011, r * far, g * far, b * far, cocWorld(P));
        } else if (s.age < SPLASH_TIME && site.z > -6) {
          // the splash: a few fine droplets thrown up and out, falling back
          for (let j = 0; j < SPLASH; j++) {
            const h1 = hash1(s.cycle * 7.1 + s.index * 13.7 + j * 3.3), h2 = hash1(s.cycle * 3.7 + s.index * 5.1 + j * 9.1);
            const a = h1 * Math.PI * 2;
            const jet = j === 0; // the first one is the rebound jet, straight up out of the crater
            const out = jet ? 0.06 : (0.35 + 0.9 * h2) * (site.pool ? 1 : 0.7);
            const up = jet ? 3.4 : 1.3 + 1.9 * hash1(h1 * 91 + j);
            const vx = Math.cos(a) * out, vz = Math.sin(a) * out;
            const y = up * s.age - 0.5 * DRIP_GRAVITY * s.age * s.age;
            if (y < 0) continue;
            P.set(site.x + vx * s.age, y + 0.006, site.z + vz * s.age);
            D.set(vx, up - DRIP_GRAVITY * s.age, vz);
            const speed = D.length();
            D.divideScalar(speed || 1);
            const [r, g, b] = light(P, 0.6);
            const fade = 0.8 * (1 - s.age / SPLASH_TIME);
            const size = jet ? 0.008 : 0.004 + 0.003 * h2;
            streak(Math.max(size * 1.2, speed * 0.002), size, r * fade, g * fade, b * fade, cocWorld(P));
          }
        }
      }
      geo.setDrawRange(0, quads * 6);
      geo.attributes.position.needsUpdate = true;
      geo.attributes.tint.needsUpdate = true;
      mat.uniforms.res.value = res;
      return states;
    },
  };
}

// =====================================================================
// Dust drifting through the spotlight
// =====================================================================
export function makeMotes(count = 900) {
  const seed = new Float32Array(count * 4);
  let s = 12345;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < count * 4; i++) seed[i] = rnd();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 4));
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      res: { value: 1080 },
      focus: { value: 8.6 },
      cocScale: { value: 100 },
      keyPos: { value: KEY.pos },
      keyDir: { value: KEY.dir },
      keyCone: { value: new THREE.Vector2(KEY.cosOuter, KEY.cosInner) },
      tubShape: { value: new THREE.Vector3() },
      tint: { value: new THREE.Color() },
    },
    vertexShader: /* glsl */`
      attribute vec4 seed;
      uniform float time;
      uniform float res;
      uniform float focus;
      uniform float cocScale;
      ${KEY_LIGHT}
      ${TUB_SHAPE}
      varying float vLight;
      varying float vBokeh;
      void main() {
        vec3 lo = vec3(-2.6, 0.03, -3.2), hi = vec3(2.6, 4.4, 4.8);
        vec3 p = mix(lo, hi, seed.xyz);
        float ph = seed.w * 6.2831853;
        // slow eddies, and a slow settling towards the floor
        p.x += 0.24 * sin(time * 0.11 + ph) + 0.07 * sin(time * 0.37 + ph * 2.3);
        p.z += 0.24 * cos(time * 0.09 + ph * 1.7) + 0.06 * sin(time * 0.29 + ph * 3.1);
        float span = hi.y - lo.y;
        p.y = lo.y + mod(p.y - lo.y - time * (0.015 + 0.04 * seed.w) + 0.1 * sin(time * 0.2 + ph * 5.0), span);
        float e = keySpot(p);
        if (e > 0.0 && tubHit(p, normalize(keyPos - p)) > 0.0) e = 0.0;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float z = -mv.z;
        float coc = cocScale * abs(1.0 / focus - 1.0 / z);
        float base = (0.55 + 0.9 * seed.w * seed.w) * res / 1080.0;
        float r = sqrt(base * base + coc * coc);
        float twinkle = 0.55 + 0.45 * sin(time * (0.6 + 1.7 * seed.x) + ph * 7.0);
        vLight = e * twinkle * (base * base) / (r * r);
        vBokeh = clamp(coc / (base * 2.5), 0.0, 1.0);
        gl_PointSize = e > 0.0 ? 2.0 * r + 1.0 : 0.0;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 tint;
      varying float vLight;
      varying float vBokeh;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float disc = smoothstep(1.0, mix(0.2, 0.82, vBokeh), r);
        disc *= mix(1.0, 0.75 + 0.4 * r * r, vBokeh); // out of focus: a flat disc with a slightly brighter rim
        gl_FragColor = vec4(tint * vLight * disc, 0.0);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return points;
}

// =====================================================================
// The shaft of light: haze lit by the spot, with the tub's shadow in it
// =====================================================================
function noiseVolume(size = 32) {
  const lattice = new Float32Array(size * size * size);
  let s = 4242;
  for (let i = 0; i < lattice.length; i++) { s = (s * 16807) % 2147483647; lattice[i] = s / 2147483647; }
  const data = new Uint8Array(size * size * size);
  const at = (x, y, z) => lattice[((z + size) % size) * size * size + ((y + size) % size) * size + ((x + size) % size)];
  // soften: average each cell with its neighbours so the haze has no hard grain
  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let v = at(x, y, z) * 2;
        v += at(x + 1, y, z) + at(x - 1, y, z) + at(x, y + 1, z) + at(x, y - 1, z) + at(x, y, z + 1) + at(x, y, z - 1);
        data[z * size * size + y * size + x] = Math.round(255 * Math.min(1, Math.max(0, (v / 8 - 0.5) * 2.2 + 0.5)));
      }
    }
  }
  const tex = new THREE.Data3DTexture(data, size, size, size);
  tex.format = THREE.RedFormat;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = tex.wrapR = THREE.RepeatWrapping;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}

export function makeBeam() {
  return new THREE.ShaderMaterial({
    uniforms: {
      camPos: { value: new THREE.Vector3() }, camFwd: { value: new THREE.Vector3() },
      camRight: { value: new THREE.Vector3() }, camUp: { value: new THREE.Vector3() },
      keyPos: { value: KEY.pos }, keyDir: { value: KEY.dir },
      keyCone: { value: new THREE.Vector2(KEY.cosOuter, KEY.cosInner) },
      tubShape: { value: new THREE.Vector3() },
      tNoise: { value: noiseVolume() },
      time: { value: 0 },
      tint: { value: new THREE.Color() },
      radius: { value: KEY.outerRadius + 0.1 },
    },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: /* glsl */`
      precision highp sampler3D;
      uniform sampler3D tNoise;
      uniform float time;
      uniform vec3 tint;
      uniform float radius;
      varying vec2 vUv;
      ${CAMERA_RAY}
      ${KEY_LIGHT}
      ${TUB_SHAPE}
      ${IGN}
      const int STEPS = 22;
      void main() {
        vec3 rd = viewRay(vUv);
        // the stretch of the view ray inside a cylinder around the beam
        vec3 oc = camPos - keyPos;
        vec3 dp = rd - dot(rd, keyDir) * keyDir;
        vec3 op = oc - dot(oc, keyDir) * keyDir;
        float A = dot(dp, dp), B = dot(dp, op), C = dot(op, op) - radius * radius;
        float h = B * B - A * C;
        vec3 sum = vec3(0.0);
        if (h > 0.0) {
          h = sqrt(h);
          float t0 = max((-B - h) / A, 0.0), t1 = (-B + h) / A;
          if (rd.y < 0.0) t1 = min(t1, -camPos.y / rd.y);  // ends at the floor
          float tt = tubHit(camPos, rd);                   // or at the tub
          if (tt > 0.0) t1 = min(t1, tt);
          if (t1 > t0) {
            float dt = (t1 - t0) / float(STEPS);
            float jitter = ign(gl_FragCoord.xy + fract(time * 7.13) * 91.0);
            float acc = 0.0;
            for (int i = 0; i < STEPS; i++) {
              vec3 p = camPos + rd * (t0 + (float(i) + jitter) * dt);
              float e = keySpot(p);
              if (e <= 0.0) continue;
              if (tubHit(p, normalize(keyPos - p)) > 0.0) continue;   // in the tub's shadow
              // slow-moving haze, thicker near the floor
              float n = texture(tNoise, p * 0.11 + vec3(time * 0.009, -time * 0.014, time * 0.006)).r;
              float n2 = texture(tNoise, p * 0.31 + vec3(-time * 0.017, time * 0.005, time * 0.011)).r;
              float density = 0.62 + 0.5 * n + 0.22 * n2;
              acc += e * density;
            }
            sum = tint * acc * dt;
          }
        }
        gl_FragColor = vec4(sum, 0.0);
      }`,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  });
}
