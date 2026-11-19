import * as THREE from 'three';
import { patch, grime } from './materials.js';
import { NOISE } from './glsl.js';
import { KEY, TUBE } from './config.js';

// The abandoned warehouse gym behind the tub. Everything here is static: it is
// rendered into a few images at load and never again. 1 unit = 10 cm.

const lathe = (pts, segments = 48) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), segments);
function put(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

// ---------- materials ----------
const castIron = grime(new THREE.MeshStandardMaterial({ color: 0x0d0d0e, roughness: 0.45, metalness: 0.6 }), { amount: 0.4, rust: 0.55, dust: 0.6 });
const rubber = grime(new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.55, metalness: 0.0 }), { amount: 0.3, dust: 0.75 });
const redRubber = grime(new THREE.MeshStandardMaterial({ color: 0x4d0b0d, roughness: 0.52, metalness: 0.0 }), { amount: 0.5, dust: 0.7 });
const steel = grime(new THREE.MeshStandardMaterial({ color: 0x9a9a96, roughness: 0.34, metalness: 1.0 }), { amount: 0.5, rust: 0.45, scale: 2.5 });
const paintedSteel = grime(new THREE.MeshStandardMaterial({ color: 0x0f1011, roughness: 0.5, metalness: 0.45 }), { amount: 0.4, rust: 0.7, dust: 0.4 });
const leather = grime(new THREE.MeshStandardMaterial({ color: 0x1b100b, roughness: 0.6, metalness: 0.0 }), { amount: 0.55, dust: 0.3, scale: 1.6 });
const tape = grime(new THREE.MeshStandardMaterial({ color: 0x4a4a47, roughness: 0.45, metalness: 0.3 }), { amount: 0.4 });
const pipeMetal = grime(new THREE.MeshStandardMaterial({ color: 0x2b2d2c, roughness: 0.6, metalness: 0.5 }), { amount: 0.5, rust: 0.8, scale: 0.6 });

// ---------- equipment ----------
function plateGeometry(r, t, hub = 0.26) {
  const h = t / 2;
  return lathe([
    [hub, -h * 0.8], [r * 0.4, -h * 0.8], [r * 0.45, -h * 0.5], [r * 0.8, -h * 0.5], [r * 0.86, -h], [r - 0.05, -h], [r, -h + 0.05],
    [r, h - 0.05], [r - 0.05, h], [r * 0.86, h], [r * 0.8, h * 0.5], [r * 0.45, h * 0.5], [r * 0.4, h * 0.8], [hub, h * 0.8], [hub, -h * 0.8],
  ], 72);
}
// a plate with its axis along local x
function plate(parent, x, r, t, mat, y = 0, z = 0) {
  // rubber plates have a steel insert round the hole
  if (mat !== castIron) put(parent, new THREE.CylinderGeometry(r * 0.24, r * 0.24, t * 0.86, 32), steel, x, y, z, 0, 0, Math.PI / 2);
  return put(parent, plateGeometry(r, t), mat, x, y, z, 0, 0, Math.PI / 2);
}

function barbell(stacks) {
  const g = new THREE.Group();
  put(g, new THREE.CylinderGeometry(0.14, 0.14, 13.1, 20), steel, 0, 0, 0, 0, 0, Math.PI / 2);
  for (const s of [-1, 1]) {
    put(g, new THREE.CylinderGeometry(0.38, 0.38, 0.3, 28), steel, s * 6.7, 0, 0, 0, 0, Math.PI / 2);
    put(g, new THREE.CylinderGeometry(0.25, 0.25, 4.1, 24), steel, s * 8.9, 0, 0, 0, 0, Math.PI / 2);
    let x = 6.87;
    for (const [r, t, mat] of stacks) {
      plate(g, s * (x + t / 2), r, t, mat);
      x += t + 0.02;
    }
  }
  return g;
}

function kettlebell() {
  const g = new THREE.Group();
  put(g, lathe([[0, 0], [0.6, 0], [0.72, 0.04], [0.9, 0.3], [0.99, 0.65], [1.0, 1.0], [0.94, 1.35], [0.8, 1.65], [0.6, 1.86], [0.36, 1.97], [0, 2.0]], 56), castIron);
  put(g, new THREE.TorusGeometry(0.62, 0.17, 16, 32, Math.PI), castIron, 0, 2.12, 0);
  for (const s of [-1, 1]) put(g, new THREE.CylinderGeometry(0.17, 0.2, 0.5, 16), castIron, s * 0.62, 1.9, 0);
  return g;
}

function rack() {
  const g = new THREE.Group();
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) put(g, box(0.75, 27, 0.75), paintedSteel, sx * 6, 13.5, sz * 5.5);
    put(g, box(0.75, 0.75, 14), paintedSteel, sx * 6, 0.375, 0);     // feet
    put(g, box(0.6, 0.6, 11), paintedSteel, sx * 6, 26.4, 0);        // top rails
    put(g, new THREE.CylinderGeometry(0.16, 0.16, 11.6, 12), steel, sx * 6, 7.6, 0, Math.PI / 2); // safety pins
    // plates parked on storage horns
    put(g, new THREE.CylinderGeometry(0.22, 0.22, 2.6, 12), steel, sx * 7.6, 5.2, -5.5, 0, 0, Math.PI / 2);
    plate(g, sx * 7.2, 2.25, 0.5, rubber, 5.2, -5.5);
    plate(g, sx * 7.75, 2.25, 0.5, sx > 0 ? redRubber : rubber, 5.2, -5.5);
    put(g, new THREE.CylinderGeometry(0.22, 0.22, 2.2, 12), steel, sx * 7.4, 11.4, -5.5, 0, 0, Math.PI / 2);
    plate(g, sx * 7.15, 1.75, 0.4, castIron, 11.4, -5.5);
  }
  put(g, box(12, 0.75, 0.75), paintedSteel, 0, 1.6, -5.5);
  put(g, box(12, 0.6, 0.6), paintedSteel, 0, 26.4, -5.5);
  // a bar left in the hooks, one plate a side
  const bar = barbell([[2.25, 0.5, rubber]]);
  bar.position.set(0, 13.2, 6.2);
  g.add(bar);
  for (const sx of [-1, 1]) put(g, box(0.5, 1.3, 1.1), paintedSteel, sx * 6, 12.9, 6.2);
  return g;
}

function heavyBag() {
  const g = new THREE.Group();
  put(g, lathe([[0, 0], [0.8, 0.04], [1.35, 0.22], [1.66, 0.6], [1.78, 1.2], [1.8, 2.2], [1.8, 16], [1.5, 16.4]], 40), leather);
  // strips of tape holding it together
  put(g, new THREE.CylinderGeometry(1.83, 1.83, 0.9, 40, 1, true), tape, 0, 3.4, 0);
  put(g, new THREE.CylinderGeometry(1.83, 1.83, 0.55, 40, 1, true), tape, 0, 4.4, 0, 0, 0, 0.03);
  put(g, new THREE.CylinderGeometry(1.83, 1.83, 0.7, 40, 1, true), tape, 0, 8.6, 0);
  return g;
}

// A chain hanging from the roof with a lifting hook on its last link: where a
// second heavy bag used to hang. The origin is where the chain is fixed.
const LINK = 0.354; // spacing of the links
function hookChain(linkCount) {
  const g = new THREE.Group();
  const geo = new THREE.TorusGeometry(0.19, 0.055, 8, 14);
  const links = new THREE.InstancedMesh(geo, steel, linkCount);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1.45, 1);
  for (let i = 0; i < linkCount; i++) {
    q.setFromEuler(new THREE.Euler(0, i % 2 ? Math.PI / 2 : 0, 0));
    m.compose(new THREE.Vector3(0, -i * LINK, 0), q, s);
    links.setMatrixAt(i, m);
  }
  links.castShadow = true;
  g.add(links);

  // the hook: an eye through the last link, a collar, a shank, and the bend with its upturned tip
  const y0 = -(linkCount - 1) * LINK;
  const eyeY = y0 - 0.39;
  put(g, new THREE.TorusGeometry(0.18, 0.065, 10, 20), castIron, 0, eyeY, 0, 0, linkCount % 2 ? Math.PI / 2 : 0, 0);
  put(g, new THREE.CylinderGeometry(0.14, 0.16, 0.26, 16), castIron, 0, eyeY - 0.3, 0);
  const R = 0.44, bendY = eyeY - 0.95;
  const pts = [new THREE.Vector3(0, eyeY - 0.4, 0), new THREE.Vector3(0, eyeY - 0.7, 0)];
  for (let i = 0; i <= 20; i++) {
    const a = Math.PI + (i / 20) * (Math.PI + 0.95);
    const r = R * (1 + 0.1 * Math.max(0, i - 15) / 5); // the tip flares outwards a little
    pts.push(new THREE.Vector3(R + r * Math.cos(a), bendY + r * Math.sin(a), 0));
  }
  const bend = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.1, 10), castIron);
  bend.castShadow = true;
  g.add(bend);
  put(g, new THREE.SphereGeometry(0.1, 10, 8), castIron, pts[pts.length - 1].x, pts[pts.length - 1].y, 0);
  g.userData.bottom = bendY - R - 0.1;
  return g;
}

function dumbbellRack() {
  const g = new THREE.Group();
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  for (const y of [3.6, 8.0]) put(g, box(23, 0.35, 3.2), paintedSteel, 0, y, 0, 0.16);
  for (const x of [-11.2, 0, 11.2]) put(g, box(0.6, 11, 3.4), paintedSteel, x, 5.5, 0);
  const head = (r) => new THREE.CylinderGeometry(r, r, 0.95, 6);
  const handle = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 10);
  [3.6, 8.0].forEach((y, row) => {
    let x = -10.2;
    for (let i = 0; i < 9; i++) {
      const r = 0.62 + 0.065 * i + (row ? 0 : 0.12);
      if (!(row === 1 && (i === 3 || i === 6))) { // a couple are missing
        const cy = y + 0.2 + r;
        put(g, head(r), rubber, x, cy, -0.75, Math.PI / 2, 0, 0.3 * i);
        put(g, head(r), rubber, x, cy, 0.75, Math.PI / 2, 0, 0.3 * i + 0.2);
        put(g, handle, steel, x, cy, 0, Math.PI / 2);
      }
      x += r * 2 + 0.5;
    }
  });
  return g;
}

// ---------- the back wall ----------
function wallMaterial() {
  return patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0 }), {
    key: 'wall',
    decl: NOISE,
    albedo: /* glsl */`
      vec2 wp = vWPos.xy;
      vec2 q = wp / vec2(2.3, 0.78);
      float row = floor(q.y);
      q.x += 0.5 * mod(row, 2.0) + 0.11 * hash12(vec2(row, 7.0));
      vec2 id = floor(q), f = fract(q);
      vec2 m = min(f, 1.0 - f) * vec2(2.3, 0.78);
      float mortar = 1.0 - smoothstep(0.04, 0.085, min(m.x, m.y));
      float bh = hash12(id + 3.7);
      vec3 brick = mix(vec3(0.19, 0.07, 0.045), vec3(0.1, 0.055, 0.045), bh);
      brick = mix(brick, vec3(0.045, 0.04, 0.04), step(0.84, hash12(id + 9.1)));
      brick *= 0.65 + 0.7 * fbm(wp * 2.3);
      vec3 base = mix(brick, vec3(0.15, 0.14, 0.13) * (0.7 + 0.5 * vnoise(wp * 7.0)), mortar);
      // two coats of old paint, flaking off in patches: a dark dado, dirty cream above
      float flake = fbm(wp * 0.5 + 11.0) + 0.3 * fbm(wp * 3.1) - 0.08 * mortar;
      float painted = smoothstep(0.5, 0.58, flake);
      float dado = 1.0 - smoothstep(11.2, 11.5, wp.y + 0.25 * vnoise(wp * vec2(0.9, 0.0)));
      vec3 paint = mix(vec3(0.21, 0.2, 0.17), vec3(0.03, 0.055, 0.05), dado) * (0.7 + 0.55 * fbm(wp * 1.7 + 5.0));
      base = mix(base, paint, painted * 0.92);
      // rising damp near the floor, dirty streaks running down from the windows
      float damp = smoothstep(8.0, 0.0, wp.y + 4.0 * (fbm(wp * 0.3) - 0.5));
      float streak = smoothstep(0.52, 0.8, fbm(vec2(wp.x * 1.2, wp.y * 0.06) + 3.0)) * smoothstep(-5.0, 28.0, wp.y);
      base *= mix(1.0, 0.3, damp) * (1.0 - 0.65 * streak);
      diffuseColor.rgb = base;`,
    rough: 'roughnessFactor = mix(0.92, 0.5, max(damp, painted * 0.35));',
  });
}

// grimy factory windows: a grid of small panes, some broken or boarded, lit by the night outside
function windowMaterial() {
  return patch(new THREE.MeshBasicMaterial({ color: 0xffffff }), {
    key: 'window',
    decl: `${NOISE}\nvarying vec2 vPane;`,
    albedo: /* glsl */`
      vec2 g = vPane * vec2(4.0, 6.0);
      vec2 id = floor(g) + floor(vWPos.x * 0.07) * 13.0, f = fract(g);
      vec2 edge = min(f, 1.0 - f);
      float bar = smoothstep(0.035, 0.07, min(edge.x * 1.5, edge.y));
      float k = hash12(id + 2.3);
      float pane = k < 0.16 ? 0.02 : mix(0.45, 1.0, hash12(id + 8.1));  // boarded up, or dirty
      pane *= 0.55 + 0.6 * fbm(vPane * vec2(9.0, 14.0) + id);
      pane *= mix(0.35, 1.0, smoothstep(0.0, 0.5, vPane.y));          // dirt builds up at the bottom
      diffuseColor.rgb = diffuse * vec3(0.105, 0.15, 0.2) * pane * bar * 0.9;`,
  });
}

export function makeRoom() {
  const room = new THREE.Group();

  // ----- wall, pipes, windows -----
  const WALL_Z = -105;
  const wall = put(room, new THREE.PlaneGeometry(340, 80), wallMaterial(), 0, 38, WALL_Z);
  wall.castShadow = false;
  put(room, new THREE.CylinderGeometry(0.45, 0.45, 320, 14), pipeMetal, 0, 9.4, WALL_Z + 0.75, 0, 0, Math.PI / 2);
  put(room, new THREE.CylinderGeometry(0.24, 0.24, 320, 10), pipeMetal, 0, 10.6, WALL_Z + 0.5, 0, 0, Math.PI / 2);
  put(room, new THREE.CylinderGeometry(0.3, 0.3, 60, 10), pipeMetal, 13.6, 30, WALL_Z + 0.5);
  put(room, new THREE.BoxGeometry(2.6, 3.4, 1.0), paintedSteel, 13.6, 6.4, WALL_Z + 0.6);
  for (let x = -70; x <= 70; x += 17.5) put(room, new THREE.BoxGeometry(0.25, 1.9, 1.2), pipeMetal, x + 3, 9.7, WALL_Z + 0.6);

  const glass = windowMaterial();
  glass.onBeforeCompile = ((inner) => (shader) => {
    inner(shader);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vPane;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPane = uv;');
  })(glass.onBeforeCompile);
  for (let x = -68; x <= 76; x += 16) {
    const w = put(room, new THREE.PlaneGeometry(11, 17), glass, x, 22.4, WALL_Z + 0.12);
    w.castShadow = w.receiveShadow = false;
    put(room, new THREE.BoxGeometry(12.4, 0.7, 1.4), pipeMetal, x, 13.6, WALL_Z + 0.7); // sill
  }

  // ----- equipment -----
  // a loaded bar left on the floor just beyond the strip light, which lights the side we see
  const bar = barbell([[2.25, 0.62, rubber], [2.25, 0.62, redRubber], [2.25, 0.5, rubber], [1.75, 0.4, castIron]]);
  bar.position.set(3, 2.25, -90);
  bar.rotation.set(0.0, -47.5 * Math.PI / 180, 0);
  room.add(bar);

  const kb = kettlebell();
  kb.position.set(-4.7, 0, -21);
  kb.rotation.y = 0.5;
  room.add(kb);

  const r = rack();
  r.position.set(-9.5, 0, -72);
  r.rotation.y = 0.32;
  room.add(r);

  const bag = heavyBag();
  bag.position.set(-8.4, 6.6, -47);
  bag.rotation.z = 0.02;
  room.add(bag);

  const hook = hookChain(96);
  hook.position.set(-5.0, 6.0 - hook.userData.bottom, -47);
  hook.rotation.y = -0.35;
  room.add(hook);

  const dbs = dumbbellRack();
  dbs.position.set(15.5, 0, -101.6);
  room.add(dbs);

  // a couple of plates left leaning on the wall, and one flat on the floor
  put(room, plateGeometry(2.25, 0.55), rubber, -24, 2.2, -103.6, Math.PI / 2 - 0.2, 0, 0);
  put(room, plateGeometry(2.25, 0.55), redRubber, -23.2, 2.2, -102.9, Math.PI / 2 - 0.26, 0, 0);
  put(room, plateGeometry(1.75, 0.42), castIron, 7.2, 0.21, -17.5, 0, 0, 0);

  // ----- lights -----
  const key = new THREE.SpotLight(KEY.color, KEY.candela, 0, KEY.angle, KEY.penumbra, 2);
  key.position.copy(KEY.pos);
  key.target.position.copy(KEY.target);
  room.add(key, key.target);

  const hemi = new THREE.HemisphereLight(new THREE.Color(0.45, 0.6, 0.85), new THREE.Color(0.2, 0.17, 0.13), 0.035);
  room.add(hemi);
  // night coming in through the high windows: a faint cold backlight
  const moon = new THREE.DirectionalLight(new THREE.Color(0.55, 0.72, 1.0), 0.09);
  moon.position.set(-30, 55, -150);
  room.add(moon, moon.target);

  const tube = new THREE.PointLight(TUBE.color, TUBE.candela, 0, 2);
  tube.castShadow = true;
  tube.shadow.mapSize.set(1024, 1024);
  tube.shadow.camera.near = 0.5;
  tube.shadow.camera.far = 320;
  tube.shadow.bias = -0.003;
  tube.shadow.normalBias = 0.06;
  room.add(tube);

  // the strip light's own light after it has bounced around the room: a faint fill from all sides
  const fill = new THREE.HemisphereLight(TUBE.color, TUBE.color.clone().multiplyScalar(0.45), 0.1);
  room.add(fill);

  const base = { key: key.intensity, hemi: hemi.intensity, moon: moon.intensity, tube: tube.intensity, fill: fill.intensity };
  // which lamps are on: the steady ones, or only the strip light
  const setLights = (which) => {
    const steady = which === 'steady' ? 1 : 0, strip = which === 'strip' ? 1 : 0;
    key.intensity = base.key * steady;
    hemi.intensity = base.hemi * steady;
    moon.intensity = base.moon * steady;
    glass.color.setScalar(steady);
    tube.intensity = base.tube * strip;
    fill.intensity = base.fill * strip;
  };
  return { room, lights: { key, hemi, moon, tube }, setLights };
}
