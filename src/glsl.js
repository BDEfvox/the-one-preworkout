// Shared GLSL snippets.

export const NOISE = /* glsl */`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
float fbm3(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
`;

export const FULLSCREEN_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// World-space view ray of a pixel, for full-screen passes.
// camRight and camUp are scaled by tan(fov / 2).
export const CAMERA_RAY = /* glsl */`
uniform vec3 camPos;
uniform vec3 camFwd;
uniform vec3 camRight;
uniform vec3 camUp;
vec3 viewRay(vec2 uv) {
  return normalize(camFwd + (uv.x * 2.0 - 1.0) * camRight + (uv.y * 2.0 - 1.0) * camUp);
}
`;

// The key spotlight, matching three.js' own spotlight falloff so that the
// shaft of light, the pool on the floor and the light on the tub all line up.
export const KEY_LIGHT = /* glsl */`
uniform vec3 keyPos;
uniform vec3 keyDir;   // unit, from the lamp towards its target
uniform vec2 keyCone;  // cos(outer angle), cos(inner angle)
float keySpot(vec3 p) {
  vec3 v = p - keyPos;
  float d2 = dot(v, v);
  float c = dot(v, keyDir) * inversesqrt(d2);
  return smoothstep(keyCone.x, keyCone.y, c) / d2;
}
`;

// The tub as a capped upright cylinder standing on the y axis: used for its
// shadow on the floor, its shadow in the lit haze, and to end view rays on it.
export const TUB_SHAPE = /* glsl */`
uniform vec3 tubShape; // radius, base height, top height
float tubHit(vec3 ro, vec3 rd) {
  float R = tubShape.x;
  float a = dot(rd.xz, rd.xz);
  if (a > 1.0e-9) {
    float b = dot(ro.xz, rd.xz);
    float c = dot(ro.xz, ro.xz) - R * R;
    float h = b * b - a * c;
    if (h > 0.0) {
      float t0 = (-b - sqrt(h)) / a;
      float y0 = ro.y + t0 * rd.y;
      if (t0 > 0.0 && y0 > tubShape.y && y0 < tubShape.z) return t0;
    }
  }
  if (abs(rd.y) > 1.0e-6) {
    float tc = ((rd.y > 0.0 ? tubShape.y : tubShape.z) - ro.y) / rd.y;
    vec2 q = ro.xz + tc * rd.xz;
    if (tc > 0.0 && dot(q, q) < R * R) return tc;
  }
  return -1.0;
}
// How much of the light from direction L (a unit vector pointing up towards the lamp) the tub
// blocks at point p: 0 to 1, with soft edges. Used for its shadow in the haze.
float tubShade(vec3 p, vec3 L) {
  float R = tubShape.x;
  float a = dot(L.xz, L.xz);
  if (a < 1.0e-9) return 0.0;
  float b = dot(p.xz, L.xz);
  float c = dot(p.xz, p.xz) - R * R;
  float h = b * b - a * c;
  if (h <= 0.0) return 0.0;
  h = sqrt(h);
  float s1 = max((-b - h) / a, 0.0), s2 = (-b + h) / a;
  if (s2 <= 0.0) return 0.0;
  // the heights between which the ray is over the tub's footprint, against the tub's own height
  float y1 = p.y + s1 * L.y, y2 = p.y + s2 * L.y;
  return smoothstep(0.0, 0.35, min(y2, tubShape.z) - max(y1, tubShape.y));
}
`;

// interleaved gradient noise: a cheap per-pixel random value
export const IGN = /* glsl */`
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
`;
