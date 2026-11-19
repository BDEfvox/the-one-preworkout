import * as THREE from 'three';

// Scene layout. 1 unit = 10 cm. The camera sits 11 cm above the floor, level
// with the middle of the tub, which hovers over the floor at the origin. From
// there the pool of light on the floor is seen all the way round the tub.

export const CAM_POS = new THREE.Vector3(0, 1.1, 8.6);
export const CAM_TARGET = new THREE.Vector3(0, 1.02, 0);
export const FOV = 22;

// ---------- the one spotlight ----------
// A spot far overhead, coming in from the front left so that the front of the
// label is lit. Its soft-edged pool on the floor is a few tub widths across.
export const KEY = (() => {
  const target = new THREE.Vector3(0, 0.95, 0);
  const elevation = 68 * Math.PI / 180, azimuth = 30 * Math.PI / 180;
  const toLamp = new THREE.Vector3(-Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.cos(azimuth) * Math.cos(elevation));
  const distance = 40;
  const pos = target.clone().addScaledVector(toLamp, distance);
  const outerRadius = 2.7, innerRadius = 1.15; // of the beam where it reaches the tub
  const angle = Math.atan(outerRadius / distance);
  const innerAngle = Math.atan(innerRadius / distance);
  return {
    pos,
    target,
    dir: toLamp.clone().negate(),
    angle,
    penumbra: 1 - innerAngle / angle,
    cosOuter: Math.cos(angle),
    cosInner: Math.cos(innerAngle),
    outerRadius,
    color: new THREE.Color(1.0, 0.85, 0.66),
    candela: 21000,
    sourceRadius: 3.0, // size of the lamp: sets how soft the tub's shadow is
  };
})();

// ---------- the broken strip light ----------
// A fluorescent batten that has come loose at one end: it hangs from a single
// cable, tilted, and swings slowly. Sits far behind the tub, upper right.
export const TUBE = {
  anchor: new THREE.Vector3(3.4, 31, -78),  // where the cable is fixed (above the frame)
  cable: 15.2,                              // anchor to the batten's high end
  length: 12.2,                             // the batten
  tilt: 31 * Math.PI / 180,                 // how far it droops from level
  swing: 4.6 * Math.PI / 180,               // largest pendulum angle
  color: new THREE.Color(0.62, 1.0, 0.93),  // cold, slightly green fluorescent white
  candela: 900,
};

// ---------- water dripping from the roof ----------
// x, z: where it lands. period: seconds between drops. phase: offset in seconds.
// pool: 1 when it lands in standing water (rings), 0 on damp concrete.
export const DRIPS = [
  { x: 0.9, z: 0.72, period: 2.9, phase: 0.4, pool: 1 },
  { x: -1.18, z: 2.15, period: 4.3, phase: 2.2, pool: 1 },
  { x: -1.55, z: -1.7, period: 3.7, phase: 1.3, pool: 1 },
  { x: 2.3, z: -4.6, period: 2.3, phase: 0.9, pool: 1 },
  { x: -0.55, z: 4.9, period: 5.1, phase: 3.4, pool: 0 },
  { x: -3.4, z: -9.5, period: 3.1, phase: 0.1, pool: 1 },
  { x: 4.4, z: -13.0, period: 4.7, phase: 2.9, pool: 1 },
];
export const DRIP_GRAVITY = 46;  // units / s^2: about half of real gravity, a slight slow motion
export const DRIP_HEIGHT = 7.5;  // released above the top of the frame
