import * as THREE from 'three';
import { makeLabelTextures } from './label.js';

// The tub: a straight-walled black jar with a wide screw lid, 1 unit = 10 cm.
export const TUB = {
  radius: 0.572,   // widest point (the lid)
  bodyRadius: 0.555,
  height: 1.66,
};
const SEGMENTS = 192;

const arc = (cx, cy, r, a0, a1, n) => {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (a0 + (a1 - a0) * (i / n)) * Math.PI / 180;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
};
const line = (a, b, n) => {
  const pts = [];
  for (let i = 1; i <= n; i++) pts.push([a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n]);
  return pts;
};
const smooth = (a, b, v) => {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// occlusion along a profile, stored in a 1 x N texture (v runs along the profile)
function stripTexture(values) {
  const data = new Uint8Array(values.length * 4);
  values.forEach((v, i) => {
    const b = Math.round(255 * Math.min(1, Math.max(0, v)));
    data[i * 4] = data[i * 4 + 1] = data[i * 4 + 2] = b;
    data[i * 4 + 3] = 255;
  });
  const tex = new THREE.DataTexture(data, 1, values.length, THREE.RGBAFormat);
  tex.magFilter = tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}
const profileAO = (pts, fn) => stripTexture(pts.map(([r, y]) => fn(r, y)));

// soft cloudy noise, used to vary roughness slightly across the plastic
function cloudTexture(size, lo, hi, streak = 1) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const mid = Math.round(255 * (lo + hi) / 2);
  g.fillStyle = `rgb(${mid},${mid},${mid})`;
  g.fillRect(0, 0, size, size);
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 900; i++) {
    const x = rnd() * size, y = rnd() * size;
    const r = (6 + rnd() * 46) * size / 512;
    const v = Math.round(255 * (lo + rnd() * (hi - lo)));
    for (const ox of [-size, 0, size]) {
      for (const oy of [-size, 0, size]) {
        const grad = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
        grad.addColorStop(0, `rgba(${v},${v},${v},0.22)`);
        grad.addColorStop(1, `rgba(${v},${v},${v},0)`);
        g.fillStyle = grad;
        g.save();
        g.translate(x + ox, y + oy);
        g.scale(streak, 1);
        g.translate(-(x + ox), -(y + oy));
        g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
        g.restore();
      }
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// The lamps here cast no shadows on the tub itself, so the places the lid shades (the
// shoulder under its lip, the underside of the base) take their darkening from the
// occlusion strip for direct light as well as ambient.
function shadeCavities(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace('#include <aomap_fragment>', /* glsl */`#include <aomap_fragment>
      reflectedLight.directDiffuse *= ambientOcclusion;
      reflectedLight.directSpecular *= ambientOcclusion;`);
  };
  mat.customProgramCacheKey = () => 'cavities';
  return mat;
}

export function makeTub(maxAnisotropy, maxTextureSize) {
  const tub = new THREE.Group();
  const lathe = (pts, mat) => {
    const geo = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(Math.max(r, 0), y)), SEGMENTS);
    const m = new THREE.Mesh(geo, mat);
    tub.add(m);
    return m;
  };
  const R = TUB.bodyRadius;

  // ----- jar: recessed base with a foot ring, rounded heel, straight wall, short shoulder -----
  const body = [
    [0, 0.036], [0.33, 0.036], [0.365, 0.03], [0.39, 0.008], [0.42, 0.0],
    ...arc(R - 0.07, 0.07, 0.07, -90, 0, 14),
    ...line([R, 0.07], [R, 1.355], 6),
    ...arc(R - 0.035, 1.355, 0.035, 0, 90, 10).slice(1),
    [0.505, 1.392], [0.5, 1.402], [0.5, 1.47],
  ];
  const cloud = cloudTexture(512, 0.8, 1.0);
  cloud.repeat.set(3, 2);
  const plastic = new THREE.MeshPhysicalMaterial({
    color: 0x060606,
    roughness: 0.46,
    roughnessMap: cloud,
    metalness: 0.0,
    specularIntensity: 0.9,
    // the lid overhangs the shoulder and shades it; the base faces the floor
    aoMap: profileAO(body, (r, y) => Math.min(1 - 0.85 * smooth(1.34, 1.41, y), 0.5 + 0.5 * smooth(0.0, 0.07, y))),
  });
  lathe(body, shadeCavities(plastic));

  // ----- lid: bottom lip, a fine parting line, rounded top edge, shallow recess on top -----
  const LR = TUB.radius;
  const lidPts = [
    [0.5, 1.418], [LR - 0.016, 1.418],
    ...arc(LR - 0.01, 1.428, 0.01, -90, 0, 6).slice(1),
    [LR, 1.46], [LR - 0.0035, 1.4645], [LR - 0.0035, 1.4705], [LR, 1.475],
    ...line([LR, 1.475], [LR, 1.626], 4),
    ...arc(LR - 0.034, 1.626, 0.034, 0, 90, 12).slice(1),
    [0.5, TUB.height], [0.49, 1.654], [0.46, 1.651], [0, 1.651],
  ];
  const lidCloud = cloudTexture(256, 0.82, 1.0, 5);
  lidCloud.repeat.set(4, 1);
  const lidPlastic = new THREE.MeshPhysicalMaterial({
    color: 0x070707,
    roughness: 0.4,
    roughnessMap: lidCloud,
    metalness: 0.0,
    specularIntensity: 0.95,
    aoMap: profileAO(lidPts, (r, y) => 0.45 + 0.55 * smooth(1.418, 1.44, y)),
  });
  lathe(lidPts, shadeCavities(lidPlastic));

  // ----- printed label wrapped around the wall -----
  const LABEL_H = 1.245;
  const r = R + 0.003;
  const { map, mr } = makeLabelTextures(2 * Math.PI * r / LABEL_H, Math.min(4096, maxTextureSize || 4096));
  map.anisotropy = maxAnisotropy;
  mr.anisotropy = Math.min(4, maxAnisotropy);
  const shade = [];
  for (let i = 0; i < 64; i++) {
    const v = i / 63; // 0 = bottom of the label
    shade.push(Math.min(1 - 0.5 * smooth(0.95, 1.0, v), 0.72 + 0.28 * smooth(0.0, 0.06, v)));
  }
  const labelMat = new THREE.MeshPhysicalMaterial({
    map,
    roughnessMap: mr,
    metalnessMap: mr,
    roughness: 1.0,
    metalness: 1.0,
    aoMap: stripTexture(shade),
  });
  const label = new THREE.Mesh(new THREE.CylinderGeometry(r, r, LABEL_H, SEGMENTS, 1, true), labelMat);
  label.position.y = 0.105 + LABEL_H / 2;
  label.rotation.y = Math.PI; // the front panel sits at u = 0.5; turn it to face +Z
  tub.add(label);

  tub.userData.materials = { plastic, lidPlastic, labelMat };
  return tub;
}
