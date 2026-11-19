import { NOISE } from './glsl.js';

// Extends one of three.js' built-in materials with a few lines of GLSL, so the
// room keeps three's lights and shadows but gets procedural surfaces.
//   decl    extra declarations (uniforms, functions)
//   albedo  runs after the base colour is known        (diffuseColor)
//   rough   runs after roughness is known              (roughnessFactor)
//   metal   runs after metalness is known              (metalnessFactor)
//   normal  runs after the shading normal is known     (normal, in view space)
//   light   runs once lighting is summed               (outgoingLight)
// Every patched material also writes its view depth to alpha: the depth of
// field passes read it from there.
let serial = 0;
export function patch(mat, o = {}) {
  const key = o.key || `patch${serial++}`;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, o.uniforms || {});
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying float vViewZ;')
      .replace('#include <project_vertex>', /* glsl */`#include <project_vertex>
        {
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          vWPos = (modelMatrix * wp).xyz;
          vViewZ = -mvPosition.z;
        }`);
    let f = shader.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vWPos;\nvarying float vViewZ;\n${o.decl || ''}`);
    const after = (chunk, code) => { if (code) f = f.replace(`#include <${chunk}>`, `#include <${chunk}>\n${code}`); };
    after('color_fragment', o.albedo);
    after('roughnessmap_fragment', o.rough);
    after('metalnessmap_fragment', o.metal);
    after('normal_fragment_maps', o.normal);
    if (o.light) f = f.replace('#include <opaque_fragment>', `${o.light}\n#include <opaque_fragment>`);
    f = f.replace('#include <dithering_fragment>', '#include <dithering_fragment>\ngl_FragColor.a = vViewZ;');
    shader.fragmentShader = f;
  };
  mat.customProgramCacheKey = () => key;
  return mat;
}

// Dirt for the gym equipment: blotchy darkening, dull and shiny patches, and
// optional rust or chalk settling on upward-facing surfaces.
export function grime(mat, { amount = 0.5, rust = 0, dust = 0, scale = 1, key } = {}) {
  return patch(mat, {
    key: key || `grime${amount}_${rust}_${dust}_${scale}`,
    decl: NOISE,
    albedo: /* glsl */`
      vec3 gq = vWPos * ${scale.toFixed(3)};
      float g1 = fbm(gq.xy * 0.7 + gq.z * 0.41 + 3.0);
      float g2 = fbm(gq.zy * 1.9 + gq.x * 0.83 + 11.0);
      diffuseColor.rgb *= 1.0 - ${amount.toFixed(3)} * smoothstep(0.3, 0.75, g1);
      float rustAmt = ${rust.toFixed(3)} * smoothstep(0.5, 0.72, g2);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.21, 0.075, 0.03) * (0.5 + g1), rustAmt);`,
    rough: /* glsl */`
      roughnessFactor = clamp(roughnessFactor + (g2 - 0.45) * 0.5 + rustAmt * 0.4, 0.08, 1.0);`,
    metal: 'metalnessFactor *= 1.0 - rustAmt;',
    normal: dust > 0 ? /* glsl */`
      {
        float up = clamp((transpose(mat3(viewMatrix)) * normal).y, 0.0, 1.0);
        float d = ${dust.toFixed(3)} * up * up * smoothstep(0.25, 0.7, g1);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.34, 0.33, 0.31), d);
        roughnessFactor = mix(roughnessFactor, 0.95, d);
      }` : '',
  });
}
