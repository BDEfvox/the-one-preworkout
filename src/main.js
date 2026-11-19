import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { CAM_POS, CAM_TARGET, FOV, KEY, TUBE, DRIPS } from './config.js';
import { loadLabelFonts } from './label.js';
import { makeTub, TUB } from './tub.js';
import { makeFloor, makeFloorData } from './floor.js';
import { makeRoom } from './room.js';
import { flicker, sway, makeFixture, makeDrips, makeMotes, makeBeam } from './fx.js';
import {
  makeAccumulate, makeDepthCopy, makePlateBlur, makeDiscBlur, makeComposite,
  makeNearBlur, makeBloomDown, makeBloomBlur, makeFinal,
} from './post.js';

// How this stays fast: the camera never moves, so the whole warehouse is
// rendered at load into a handful of images ("plates"), one per group of lamps,
// already blurred for depth of field:
//   - the room under its steady lights (the spot and the night outside)
//   - the room under the strip light alone, at three positions of its swing
// Light adds up, so each frame the room is just: steady plate + flicker x a
// blend of the three strip plates. On top of that each frame draws only what
// moves: the tub (twice, once for its reflection), the strip light itself, the
// haze in the spot's beam, dust, and the drips.
//
// The room is rendered at no more than 1440 px a side. The tub, the one thing in
// sharp focus and covered in small print, is drawn in its own layer at the
// screen's full resolution and laid over the room at the very end.

const params = new URLSearchParams(location.search);

// ---------- motion: a slow turn and bob, like a dropped item in a game ----------
const SPIN_SPEED = 0.6;   // rad / s: one turn in about ten seconds
const BOB_SPEED = 1.5;    // rad / s
const BOB_AMOUNT = 0.085; // world units, the tub is ~1.7 tall
const HOVER = 0.2;        // mean height of the tub's base above the floor

const MAX_RES = parseInt(params.get('res'), 10) || 1440; // resolution cap for the room
const MAX_OUT = parseInt(params.get('res'), 10) || 2880; // resolution cap for the canvas and the tub
const CALM = params.has('calm') || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const STEADY_SAMPLES = 48;
const STRIP_SAMPLES = 28;
// background blur radius, as a fraction of the frame (?blur=0 shows the room in focus)
const BLUR_AT_INFINITY = (params.has('blur') ? Math.max(0, parseFloat(params.get('blur')) || 0) : 8) / 1080;
const MIRROR_W = 1280, MIRROR_H = 1152;
// ?off=beam,dust,drips,tub,strip,steady,air,refl,bloom switches layers off, to inspect the rest
const OFF = new Set((params.get('off') || '').split(',').filter(Boolean));

const progress = document.getElementById('progress');
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

async function start() {
  await loadLabelFonts();

  // ---------- renderer ----------
  const renderer = new THREE.WebGLRenderer({
    antialias: false, alpha: false, depth: false, stencil: false,
    powerPreference: 'high-performance',
  });
  renderer.autoClear = false;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setPixelRatio(1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.autoUpdate = false;
  document.body.prepend(renderer.domElement);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  RectAreaLightUniformsLib.init();

  // ---------- cameras ----------
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.5, 600);
  camera.position.copy(CAM_POS);
  camera.lookAt(CAM_TARGET);
  camera.updateMatrixWorld();
  const tanHalf = Math.tan(FOV * Math.PI / 360);
  const camFwd = new THREE.Vector3(), camRight = new THREE.Vector3(), camUp = new THREE.Vector3();
  camera.matrixWorld.extractBasis(camRight, camUp, camFwd);
  camFwd.negate();
  camRight.multiplyScalar(tanHalf);
  camUp.multiplyScalar(tanHalf);

  // A mirror image in the flat floor is what a camera at the mirrored position
  // sees, so reflections are rendered from below the floor, looking up.
  const mirrorCam = new THREE.PerspectiveCamera(24, MIRROR_W / MIRROR_H, 0.5, 600);
  mirrorCam.position.set(CAM_POS.x, -CAM_POS.y, CAM_POS.z);
  mirrorCam.lookAt(0, -CAM_POS.y + CAM_POS.z * Math.tan(10 * Math.PI / 180), 0);
  mirrorCam.updateMatrixWorld();
  const mirrorMatrix = new THREE.Matrix4()
    .set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
    .multiply(mirrorCam.projectionMatrix)
    .multiply(mirrorCam.matrixWorldInverse);

  const focus = -new THREE.Vector3(0, 0.9, 0.45).applyMatrix4(camera.matrixWorldInverse).z;

  // ---------- the static room ----------
  const world = new THREE.Scene();
  const fogSteady = new THREE.Color(0.007, 0.011, 0.016), fogNone = new THREE.Color(0, 0, 0);
  world.fog = new THREE.FogExp2(fogSteady.clone(), 0.0036);
  const floor = makeFloor();
  const floorU = floor.userData.uniforms;
  floorU.mirrorMatrix.value.copy(mirrorMatrix);
  const { room, lights, setLights } = makeRoom();
  world.add(floor, room);
  const floorData = makeFloorData();
  floorData.uniforms.mirrorMatrix.value.copy(mirrorMatrix);
  floorData.uniforms.focus.value = focus;
  const zeroMat = new THREE.ShaderMaterial({
    vertexShader: /* glsl */`
      void main() {
        vec4 p = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
      }`,
    fragmentShader: 'void main() { gl_FragColor = vec4(0.0); }',
  });

  // soft light cards, seen only by the tub's environment map (never by the camera)
  const cards = new THREE.Group();
  {
    const card = (x, y, z, w, h, power, tint) => {
      const mat = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: { power: { value: new THREE.Color(tint).multiplyScalar(power) } },
        vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: /* glsl */`
          uniform vec3 power;
          varying vec2 vUv;
          void main() {
            vec2 q = abs(vUv - 0.5) * 2.0;
            float soft = (1.0 - smoothstep(0.5, 1.0, q.x)) * (1.0 - smoothstep(0.6, 1.0, q.y));
            gl_FragColor = vec4(power * soft, 1.0);
          }`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.position.set(x, y, z);
      m.lookAt(0, 1, 0);
      cards.add(m);
    };
    card(-7.5, 4.6, 7.5, 2.4, 10, 9.0, 0xfff0dc);   // key side: a tall warm strip, front left
    card(7.5, 2.4, 6.5, 1.3, 7, 2.2, 0xdfeaff);     // a thin cool edge, front right
    card(0.5, 9.5, 2.0, 5, 5, 1.6, 0xfff0dc);       // top
    cards.visible = false;
    world.add(cards);
  }

  // ---------- the tub ----------
  const tubScene = new THREE.Scene();
  const tub = makeTub(maxAniso, renderer.capabilities.maxTextureSize);
  tubScene.add(tub);
  const tubKey = new THREE.SpotLight(KEY.color, KEY.candela, 0, KEY.angle, KEY.penumbra, 2);
  tubKey.position.copy(KEY.pos);
  tubKey.target.position.copy(KEY.target);
  tubScene.add(tubKey, tubKey.target);
  const tubStrip = new THREE.RectAreaLight(TUBE.color, 0, TUBE.length, 1.4);
  tubScene.add(tubStrip);
  const STRIP_ON_TUB = 1700;
  const STRIP_SHIFT = new THREE.Vector3(24, -2, 20); // brightness of the strip light as the tub sees it

  // ---------- things that move ----------
  const fixture = makeFixture();
  const fxScene = new THREE.Scene();
  const motes = makeMotes(520);
  const drips = makeDrips(camera, focus);
  fxScene.add(motes, drips.mesh);
  motes.visible = !OFF.has('dust');
  drips.mesh.visible = !OFF.has('drips');
  const beam = makeBeam();

  // ---------- passes ----------
  const accumulate = makeAccumulate();
  const depthCopy = makeDepthCopy();
  const plateBlur = makePlateBlur();
  const discBlur = makeDiscBlur();
  const composite = makeComposite();
  const nearBlur = makeNearBlur();
  const final = makeFinal();
  const bloomDown = makeBloomDown();
  const bloomBlur = makeBloomBlur();
  const quad = new FullScreenQuad(composite);
  for (const m of [composite, beam]) {
    m.uniforms.camPos.value.copy(CAM_POS);
    m.uniforms.camFwd.value.copy(camFwd);
    m.uniforms.camRight.value.copy(camRight);
    m.uniforms.camUp.value.copy(camUp);
  }
  const tubShape = new THREE.Vector3(TUB.radius, HOVER, HOVER + TUB.height);
  composite.uniforms.tubShape.value = tubShape;
  beam.uniforms.tubShape.value = tubShape;
  motes.material.uniforms.tubShape.value = tubShape;
  motes.material.uniforms.focus.value = focus;

  // ---------- the tub's surroundings, for its reflections ----------
  const hdr = { type: THREE.HalfFloatType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
  const staticMirrorRT = new THREE.WebGLRenderTarget(MIRROR_W, MIRROR_H, {
    ...hdr, depthBuffer: true, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter,
  });
  const mirrorRT = new THREE.WebGLRenderTarget(MIRROR_W, MIRROR_H, {
    ...hdr, depthBuffer: true, samples: 4, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter,
  });
  floorU.mirrorMap.value = staticMirrorRT.texture;
  composite.uniforms.tMirror.value = mirrorRT.texture;
  {
    setLights('steady');
    floorU.reflOn.value = 0;
    cards.visible = true;
    renderer.shadowMap.needsUpdate = true;
    const pmrem = new THREE.PMREMGenerator(renderer);
    tubScene.environment = pmrem.fromScene(world, 0, 0.1, 600, { size: 512, position: new THREE.Vector3(0, 1.0, 0) }).texture;
    tubScene.environmentIntensity = 1.0;
    pmrem.dispose();
    cards.visible = false;
    floorU.reflOn.value = 1;
  }

  // ---------- buffers that depend on the size ----------
  let res = 0;      // the room's resolution
  let outRes = 0;   // the canvas's resolution
  let ready = false;
  let job = { cancelled: false };
  let plateBase, plateStrip = [], depthRT, data1RT, data2RT, mainRT, sceneRT, layerRT, fixRT, fixBlurRT, bloomA, bloomB, wideA, wideB;
  const layerCam = camera.clone();
  const layerOrigin = new THREE.Vector2();
  let cocMax = 12, cocScale = 100;
  const fixCam = camera.clone();
  const fixDepth = CAM_POS.z - TUBE.anchor.z;
  const halton = (i, b) => {
    let f = 1, r = 0;
    while (i > 0) { f /= b; r += f * (i % b); i = Math.floor(i / b); }
    return r;
  };
  const cocPx = (z) => Math.min(cocScale * Math.abs(1 / focus - 1 / z), cocMax * 3);

  async function bake(size, me) {
    const t0 = performance.now();
    ready = false;
    window.__ready = false;
    res = size;
    for (const rt of [plateBase, ...plateStrip, depthRT, data1RT, data2RT, mainRT, sceneRT, fixRT, fixBlurRT, bloomA, bloomB, wideA, wideB]) rt?.dispose();
    progress.style.opacity = 1;
    const total = STEADY_SAMPLES + 3 * STRIP_SAMPLES;
    let done = 0;
    const step = () => { done++; progress.firstElementChild.style.width = `${(100 * done / total).toFixed(1)}%`; };

    const sampleRT = new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: true });
    const accRT = new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: false });
    const plate = () => new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: false });
    plateBase = plate();
    plateStrip = [plate(), plate(), plate()];
    depthRT = new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: false, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    // half float: phones often cannot render to full-float textures
    const data = () => new THREE.WebGLRenderTarget(res, res, { type: THREE.HalfFloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true });
    data1RT = data();
    data2RT = data();
    mainRT = new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: false });
    sceneRT = new THREE.WebGLRenderTarget(res, res, { ...hdr, depthBuffer: false });
    const q = Math.round(res / 4);
    bloomA = new THREE.WebGLRenderTarget(q, q, { ...hdr, depthBuffer: false });
    bloomB = new THREE.WebGLRenderTarget(q, q, { ...hdr, depthBuffer: false });
    wideA = new THREE.WebGLRenderTarget(q, q, { ...hdr, depthBuffer: false });
    wideB = new THREE.WebGLRenderTarget(q, q, { ...hdr, depthBuffer: false });

    cocMax = BLUR_AT_INFINITY * res;
    cocScale = cocMax * focus;
    floorData.uniforms.cocScale.value = cocScale;
    floorData.uniforms.cocMax.value = cocMax;
    plateBlur.uniforms.texel.value.set(1 / res, 1 / res);
    plateBlur.uniforms.focus.value = focus;
    plateBlur.uniforms.cocScale.value = cocScale;
    plateBlur.uniforms.cocMax.value = cocMax;
    renderer.setClearColor(0x000000, 0);

    // Averages `count` renders of the room, each with the camera nudged by a fraction of
    // a pixel and the lamps moved a little: smooth edges and soft shadows.
    const average = async (count, perSample) => {
      renderer.setRenderTarget(accRT);
      renderer.clear(true, false, false);
      accumulate.uniforms.tSrc.value = sampleRT.texture;
      accumulate.uniforms.weight.value = 1 / count;
      for (let i = 0; i < count; i++) {
        perSample(i);
        floorU.floorSeed.value = i;
        renderer.shadowMap.needsUpdate = true;
        // the room as the floor mirrors it...
        floor.visible = false;
        renderer.setRenderTarget(staticMirrorRT);
        renderer.clear(true, true, false);
        renderer.render(world, mirrorCam);
        // ...then the room itself
        floor.visible = true;
        camera.setViewOffset(res, res, halton(i + 1, 2) - 0.5, halton(i + 1, 3) - 0.5, res, res);
        renderer.setRenderTarget(sampleRT);
        renderer.clear(true, true, false);
        renderer.render(world, camera);
        camera.clearViewOffset();
        renderer.setRenderTarget(accRT);
        quad.material = accumulate;
        quad.render(renderer);
        step();
        if (i % 3 === 2) {
          renderer.setRenderTarget(null);
          await nextFrame();
          if (me.cancelled) return false;
        }
      }
      return true;
    };
    const blurInto = (target) => {
      plateBlur.uniforms.tSrc.value = accRT.texture;
      renderer.setRenderTarget(target);
      quad.material = plateBlur;
      quad.render(renderer);
    };
    const cleanup = () => { sampleRT.dispose(); accRT.dispose(); };

    // 1. the steady lamps
    setLights('steady');
    world.fog.color.copy(fogSteady);
    let ok = await average(STEADY_SAMPLES, () => {});
    if (!ok) { cleanup(); return; }
    depthCopy.uniforms.tSrc.value = accRT.texture;
    renderer.setRenderTarget(depthRT);
    quad.material = depthCopy;
    quad.render(renderer);
    blurInto(plateBase);

    // 2. the strip light alone, at three positions of its swing
    setLights('strip');
    world.fog.color.copy(fogNone);
    for (let k = 0; k < 3; k++) {
      fixture.setPose((k - 1) * TUBE.swing);
      ok = await average(STRIP_SAMPLES, (i) => fixture.point(halton(i + 1, 5), lights.tube.position));
      if (!ok) { cleanup(); return; }
      blurInto(plateStrip[k]);
    }
    setLights('steady');
    world.fog.color.copy(fogSteady);

    // 3. what the composite needs to know about each floor pixel
    {
      const swapped = [];
      room.traverse((o) => { if (o.isMesh) { swapped.push([o, o.material]); o.material = zeroMat; } });
      const floorMat = floor.material;
      floor.material = floorData;
      for (const [mode, rt] of [[1, data1RT], [2, data2RT]]) {
        floorData.uniforms.mode.value = mode;
        renderer.setRenderTarget(rt);
        renderer.clear(true, true, false);
        renderer.render(world, camera);
      }
      floor.material = floorMat;
      for (const [o, m] of swapped) o.material = m;
    }
    cleanup();

    // 4. the strip light's own layer: a crop of the frame around everywhere it can swing to
    {
      const box = new THREE.Box2();
      const p = new THREE.Vector3();
      for (const side of [-1, 0, 1]) {
        fixture.setPose(side * TUBE.swing * 1.15, TUBE.swing * 0.4, 0.07 * side);
        for (const u of [-0.12, 1.12]) {
          fixture.point(u, p).project(camera);
          box.expandByPoint(new THREE.Vector2(p.x * 0.5 + 0.5, p.y * 0.5 + 0.5));
        }
      }
      const pad = (cocPx(fixDepth) * 2.5 + 40) / res;
      const u0 = Math.max(0, box.min.x - pad), u1 = Math.min(1, box.max.x + pad);
      const v0 = Math.max(0, box.min.y - pad), v1 = Math.min(1, box.max.y + pad);
      const x = Math.floor(u0 * res), y = Math.floor((1 - v1) * res);
      const w = Math.max(8, Math.ceil(u1 * res) - x), h = Math.max(8, Math.ceil((1 - v0) * res) - y);
      fixCam.setViewOffset(res, res, x, y, w, h);
      fixRT = new THREE.WebGLRenderTarget(w, h, { ...hdr, depthBuffer: true, samples: 4 });
      fixBlurRT = new THREE.WebGLRenderTarget(w, h, { ...hdr, depthBuffer: false });
      composite.uniforms.fixRect.value.set(x / res, 1 - (y + h) / res, w / res, h / res);
      composite.uniforms.fixDepth.value = fixDepth;
      // its reflection in a puddle is as blurred as it is: the same radius, in mirror-image pixels
      const blurPx = cocPx(fixDepth) * (MIRROR_H / mirrorCam.fov) / (res / FOV);
      composite.uniforms.fixBlur.value.set(blurPx / MIRROR_W, blurPx / MIRROR_H);
      composite.uniforms.fixLod.value = Math.max(0, Math.log2(Math.max(1, blurPx * 0.6)));
      discBlur.uniforms.texel.value.set(1 / w, 1 / h);
      discBlur.uniforms.radius.value = cocPx(fixDepth);
      discBlur.uniforms.tSrc.value = fixRT.texture;
    }

    composite.uniforms.tBase.value = plateBase.texture;
    composite.uniforms.tStrip0.value = plateStrip[0].texture;
    composite.uniforms.tStrip1.value = plateStrip[1].texture;
    composite.uniforms.tStrip2.value = plateStrip[2].texture;
    composite.uniforms.tData1.value = data1RT.texture;
    composite.uniforms.tData2.value = data2RT.texture;
    composite.uniforms.tDepth.value = depthRT.texture;
    composite.uniforms.tFix.value = fixBlurRT.texture;
    drips.material.uniforms.tDepth.value = depthRT.texture;
    bloomDown.uniforms.tSrc.value = mainRT.texture;
    bloomDown.uniforms.texel.value.set(1 / res, 1 / res);
    nearBlur.uniforms.tMain.value = mainRT.texture;
    nearBlur.uniforms.texel.value.set(1 / res, 1 / res);
    nearBlur.uniforms.cocMax.value = cocMax;
    const focalLine = new THREE.Vector3(0, 0, CAM_POS.z - focus).project(camera);
    nearBlur.uniforms.dofTop.value = 0.5 + 0.5 * focalLine.y + (cocMax + 2) / res;
    final.uniforms.tScene.value = sceneRT.texture;
    final.uniforms.tBloom.value = bloomA.texture;
    final.uniforms.tWide.value = wideA.texture;
    sizeLayer();

    renderer.setRenderTarget(null);
    window.__bakeMs = Math.round(performance.now() - t0);
    progress.style.opacity = 0;
    ready = true;
    window.__ready = true;
    draw(currentTime());
  }

  // The tub's layer: a crop of the frame around everywhere the tub can be, at the canvas's
  // resolution, which on a high-density screen is finer than the room's.
  function sizeLayer() {
    layerRT?.dispose();
    const box = new THREE.Box2();
    const p = new THREE.Vector3();
    for (const y of [HOVER - BOB_AMOUNT, HOVER + BOB_AMOUNT + TUB.height]) {
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          p.set(sx * TUB.radius, y, sz * TUB.radius).project(camera);
          box.expandByPoint(new THREE.Vector2(p.x * 0.5 + 0.5, p.y * 0.5 + 0.5));
        }
      }
    }
    const pad = 8 / outRes;
    const u0 = Math.max(0, box.min.x - pad), u1 = Math.min(1, box.max.x + pad);
    const v0 = Math.max(0, box.min.y - pad), v1 = Math.min(1, box.max.y + pad);
    const x = Math.floor(u0 * outRes), y = Math.floor((1 - v1) * outRes);
    const w = Math.max(8, Math.ceil(u1 * outRes) - x), h = Math.max(8, Math.ceil((1 - v0) * outRes) - y);
    layerCam.setViewOffset(outRes, outRes, x, y, w, h);
    layerRT = new THREE.WebGLRenderTarget(w, h, { ...hdr, depthBuffer: true, samples: 4 });
    layerOrigin.set(x, outRes - (y + h));
    for (const m of [final, bloomDown]) {
      m.uniforms.tLayer.value = layerRT.texture;
      m.uniforms.layerRect.value.set(x / outRes, 1 - (y + h) / outRes, w / outRes, h / outRes);
    }
  }

  function layout() {
    const css = Math.floor(Math.min(window.innerWidth, window.innerHeight));
    const out = Math.max(256, Math.min(Math.round(css * window.devicePixelRatio), MAX_OUT));
    const size = Math.min(out, MAX_RES);
    renderer.domElement.style.width = renderer.domElement.style.height = css + 'px';
    if (out !== outRes) {
      outRes = out;
      renderer.setSize(out, out, false);
      if (size === res && ready) { sizeLayer(); draw(currentTime()); } // a re-bake does this itself
    }
    if (size !== res) {
      job.cancelled = true;
      job = { cancelled: false };
      bake(size, job);
    }
  }

  // dust and drips are drawn twice: with the room, and again in the tub's layer
  const fxTarget = (size, scale, ox, oy) => {
    motes.material.uniforms.res.value = size;
    motes.material.uniforms.cocScale.value = cocScale * scale;
    drips.material.uniforms.res.value = size;
    drips.material.uniforms.origin.value.set(ox, oy);
  };

  // ---------- frame ----------
  const stripGlow = new THREE.Color();
  const blurStep = (src, dst, dx, dy) => {
    bloomBlur.uniforms.tSrc.value = src.texture;
    bloomBlur.uniforms.dir.value.set(dx, dy);
    renderer.setRenderTarget(dst);
    quad.render(renderer);
  };

  function draw(t) {
    // ----- where everything is at time t -----
    tub.rotation.y = t * SPIN_SPEED;
    tub.position.y = HOVER + Math.sin(t * BOB_SPEED) * BOB_AMOUNT;
    tubShape.set(TUB.radius, tub.position.y, tub.position.y + TUB.height);

    const on = OFF.has('strip') ? 0 : flicker(t, CALM);
    const sw = sway(t, CALM);
    fixture.setPose(sw.side, sw.depth, sw.rock);
    fixture.setBrightness(on);
    // blend of the three baked swing positions
    const s = THREE.MathUtils.clamp(sw.side / TUBE.swing, -1, 1);
    composite.uniforms.stripW.value.set(Math.max(0, -s), 1 - Math.abs(s), Math.max(0, s)).multiplyScalar(on);
    for (let i = 0; i < 5; i++) fixture.point((i + 0.5) / 5, composite.uniforms.airPts.value[i]);
    composite.uniforms.airColor.value.copy(TUBE.color).multiplyScalar(OFF.has('air') ? 0 : TUBE.candela * 0.000016 * on);
    composite.uniforms.baseGain.value = OFF.has('steady') ? 0 : 1;
    composite.uniforms.reflGain.value = OFF.has('refl') ? 0 : 1;
    final.uniforms.bloomGain.value = OFF.has('bloom') ? 0 : 1;
    stripGlow.copy(TUBE.color).multiplyScalar(on);

    // the strip light as a lamp on the tub: a long thin panel behind it
    // (moved round to the side so that it rakes the tub's flank: a kicker, as on a film set)
    fixture.point(0.5, tubStrip.position).add(STRIP_SHIFT);
    tubStrip.lookAt(0, 1, 0);
    tubStrip.rotateZ(-TUBE.tilt);
    tubStrip.intensity = STRIP_ON_TUB * on;

    const states = drips.update(t, res, cocPx, stripGlow);
    states.forEach((d, i) => composite.uniforms.ripples.value[i].set(d.site.x, d.site.z, d.age, OFF.has('drips') ? 0 : (d.site.pool ? 0.02 : 0.008)));

    beam.uniforms.time.value = t;
    beam.uniforms.tint.value.copy(KEY.color).multiplyScalar(KEY.candela * 0.0009);
    motes.material.uniforms.time.value = t;
    motes.material.uniforms.tint.value.copy(KEY.color).multiplyScalar(KEY.candela * 0.05);

    // ----- the moving things as the floor mirrors them -----
    renderer.setRenderTarget(mirrorRT);
    renderer.clear(true, true, false);
    if (!OFF.has('tub')) renderer.render(tubScene, mirrorCam);
    fixture.coverage.value = 0;
    renderer.render(fixture.scene, mirrorCam);
    fixture.coverage.value = 1;

    // ----- the strip light's layer, blurred as far out of focus as it is -----
    renderer.setRenderTarget(fixRT);
    renderer.clear(true, true, false);
    renderer.render(fixture.scene, fixCam);
    renderer.setRenderTarget(fixBlurRT);
    quad.material = discBlur;
    quad.render(renderer);

    // ----- room + reflections, the haze in the beam, dust and drips -----
    renderer.setRenderTarget(mainRT);
    quad.material = composite;
    quad.render(renderer);
    quad.material = beam;
    if (!OFF.has('beam')) quad.render(renderer);
    fxTarget(res, 1, 0, 0);
    renderer.render(fxScene, camera);

    // ----- the tub at full resolution, with the dust and drips that pass in front of it -----
    renderer.setRenderTarget(layerRT);
    renderer.clear(true, true, false);
    if (!OFF.has('tub')) {
      renderer.render(tubScene, layerCam);
      fxTarget(outRes, outRes / res, layerOrigin.x, layerOrigin.y);
      renderer.render(fxScene, layerCam);
    }

    // ----- the floor in front of the focal plane goes out of focus -----
    renderer.setRenderTarget(sceneRT);
    quad.material = nearBlur;
    quad.render(renderer);

    // ----- lens glow: bright areas at quarter size, blurred -----
    renderer.setRenderTarget(bloomA);
    quad.material = bloomDown;
    quad.render(renderer);
    quad.material = bloomBlur;
    const bt = 1 / bloomA.width;
    for (let i = 0; i < 2; i++) {
      const stepSize = bt * (1 + i * 1.5);
      blurStep(bloomA, bloomB, stepSize, 0);
      blurStep(bloomB, bloomA, 0, stepSize);
    }
    // a much wider glow, stretched sideways like an anamorphic lens
    blurStep(bloomA, wideB, bt * 4, 0);
    blurStep(wideB, wideA, 0, bt * 2.5);
    blurStep(wideA, wideB, bt * 10, 0);
    blurStep(wideB, wideA, bt * 22, 0);

    // ----- finish to screen -----
    renderer.setRenderTarget(null);
    final.uniforms.time.value = t;
    quad.material = final;
    quad.render(renderer);
  }

  // ---------- loop ----------
  const frozen = params.get('t'); // ?t=<seconds> shows a still
  let startTime = null;
  let pausedAt = null;
  let now = performance.now();
  const currentTime = () => {
    if (frozen !== null) return parseFloat(frozen) || 0;
    if (startTime === null) return 0;
    return ((pausedAt ?? now) - startTime) / 1000;
  };
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    e.preventDefault();
    if (pausedAt === null) pausedAt = now;
    else { startTime += now - pausedAt; pausedAt = null; }
  });
  function tick(ts) {
    now = ts;
    if (ready) {
      if (startTime === null) startTime = ts;
      draw(currentTime());
    }
    requestAnimationFrame(tick);
  }

  layout();
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 150);
  });
  requestAnimationFrame(tick);

  window.__flicker = (t) => flicker(t, CALM); // the strip light's brightness at time t, for tests

  // Measures the real cost of a frame (GPU included), independent of the display's refresh rate.
  // (Reading a pixel back forces the GPU to finish everything queued.)
  window.__bench = (frames = 200) => {
    const gl = renderer.getContext();
    const px = new Uint8Array(4);
    const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
    draw(0);
    sync();
    const t0 = performance.now();
    for (let i = 0; i < frames; i++) draw(i / 60);
    sync();
    return { msPerFrame: +((performance.now() - t0) / frames).toFixed(2), res, outRes };
  };
}

start().catch((err) => {
  console.error(err);
  progress.style.opacity = 0;
  const note = document.createElement('p');
  note.textContent = 'This needs WebGL 2. Try a current version of Chrome, Safari, Firefox or Edge.';
  note.style.cssText = 'color:#8a8a86;font:14px/1.5 system-ui,sans-serif;max-width:28em;padding:24px;text-align:center';
  document.body.append(note);
});
