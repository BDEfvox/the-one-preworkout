// End-to-end check of the built page in headless Chrome (uses the Chrome installed on this
// machine). Run with `npm test` after `npm run build`. Exits with an error if a check fails.
//
//  1. Behaviour: loads at desktop, phone and reduced-motion settings without console errors
//     or warnings, survives two quick resizes, and Space really pauses.
//  2. Lighting logic: measures regions of the frame at 18 moments. What the strip light lights
//     must follow its brightness; what the spotlight lights must not; nothing may clip to white.
import { chromium } from 'playwright-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const base = pathToFileURL(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html')).href;
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const failures = [];
const check = (ok, what) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`); if (!ok) failures.push(what); };

async function open(opts, query = '') {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() !== 'log') logs.push(`[${m.type()}] ${m.text().slice(0, 200)}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.goto(base + (query ? '?' + query : ''));
  await page.waitForFunction(() => window.__ready, null, { timeout: 60000 });
  return { ctx, page, logs };
}

// ---------- 1. behaviour ----------
// wantCanvas: the canvas, and the tub, at the screen's own resolution. wantRoom: the room, capped at 1440.
for (const [name, opts, query, wantCanvas, wantRoom] of [
  ['desktop, 2x screen', { viewport: { width: 1300, height: 800 }, deviceScaleFactor: 2 }, '', 1600, 1440],
  ['phone, 3x screen', { viewport: { width: 390, height: 780 }, deviceScaleFactor: 3 }, 't=1', 1170, 1170],
  ['reduced motion', { viewport: { width: 700, height: 700 }, deviceScaleFactor: 1, reducedMotion: 'reduce' }, '', 700, 700],
  ['fixed size, ?res=1080', { viewport: { width: 1300, height: 800 }, deviceScaleFactor: 2 }, 'res=1080', 1080, 1080],
]) {
  const { ctx, page, logs } = await open(opts, query);
  const info = await page.evaluate(() => ({ canvas: document.querySelector('canvas').width, bakeMs: window.__bakeMs, bench: window.__bench(60) }));
  check(logs.length === 0, `${name}: no console errors or warnings${logs.length ? ' -> ' + logs[0] : ''}`);
  check(info.canvas === wantCanvas && info.bench.res === wantRoom, `${name}: canvas ${info.canvas} px, room ${info.bench.res} px (expected ${wantCanvas} and ${wantRoom}), baked in ${info.bakeMs} ms, ${info.bench.msPerFrame} ms per frame`);
  await ctx.close();
}
{
  // a resize that changes only the canvas (the room stays at its 1440 cap) must not re-bake
  const { ctx, page, logs } = await open({ viewport: { width: 900, height: 900 }, deviceScaleFactor: 2 });
  await page.evaluate(() => { window.__bakeMs = -1; });
  await page.setViewportSize({ width: 1000, height: 1000 });
  await page.waitForFunction(() => document.querySelector('canvas').width === 2000, null, { timeout: 5000 }).catch(() => {});
  const info = await page.evaluate(() => ({ canvas: document.querySelector('canvas').width, rebaked: window.__bakeMs !== -1, ready: window.__ready, bench: window.__bench(10) }));
  check(info.canvas === 2000 && info.bench.outRes === 2000 && !info.rebaked && info.ready, `canvas-only resize: canvas ${info.canvas} px, no re-bake`);
  check(logs.length === 0, `canvas-only resize: no console errors or warnings${logs.length ? ' -> ' + logs[0] : ''}`);
  await ctx.close();
}
{
  const { ctx, page, logs } = await open({ viewport: { width: 900, height: 900 }, deviceScaleFactor: 1 });
  // the second resize arrives while the first re-bake is still running
  await page.setViewportSize({ width: 620, height: 700 });
  await page.waitForTimeout(260);
  await page.setViewportSize({ width: 760, height: 520 });
  await page.waitForTimeout(400);
  await page.waitForFunction(() => window.__ready, null, { timeout: 60000 });
  const res = await page.evaluate(() => document.querySelector('canvas').width);
  check(res === 520, `resize twice: ends at ${res} px (expected 520)`);
  await page.waitForTimeout(400);
  const moving = !(await page.screenshot()).equals(await (async () => { await page.waitForTimeout(300); return page.screenshot(); })());
  await page.keyboard.press('Space');
  await page.waitForTimeout(200);
  const a = await page.screenshot();
  await page.waitForTimeout(500);
  const b = await page.screenshot();
  check(moving, 'animation runs before pausing');
  check(a.equals(b), 'Space pauses: two frames half a second apart are identical');
  check(logs.length === 0, `resize and pause: no console errors or warnings${logs.length ? ' -> ' + logs[0] : ''}`);
  await ctx.close();
}

// ---------- 2. lighting logic ----------
// regions as fractions of the frame: x0, y0, x1, y1
const regions = {
  wallByLamp: [0.72, 0.22, 0.95, 0.36],  // wall under the strip light
  barbell: [0.70, 0.37, 0.80, 0.47],     // the barbell just beyond it
  farFloor: [0.70, 0.52, 0.98, 0.62],    // wet floor between the lamp and the camera
  keyPool: [0.05, 0.78, 0.28, 0.83],     // floor under the spotlight, left of the tub's shadow
  windows: [0.05, 0.02, 0.20, 0.10],     // the night outside
};
const times = [0.3, 1.0, 1.9, 2.6, 2.9, 3.0, 3.2, 3.41, 3.6, 4.4, 5.6, 6.1, 8.3, 10.2, 10.4, 10.6, 12.9, 14.6];
const { ctx, page } = await open({ viewport: { width: 600, height: 600 }, deviceScaleFactor: 1 }, 't=0&off=dust,drips');
const rows = [];
for (const t of times) {
  await page.goto(`${base}?t=${t}&off=dust,drips`);
  await page.waitForFunction(() => window.__ready, null, { timeout: 30000 });
  await page.waitForTimeout(120);
  const png = (await page.screenshot()).toString('base64');
  rows.push(await page.evaluate(async ({ png, regions, t }) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + png;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(img, 0, 0);
    const out = { t, flicker: window.__flicker(t) };
    for (const [k, [x0, y0, x1, y1]] of Object.entries(regions)) {
      const d = g.getImageData(Math.round(x0 * c.width), Math.round(y0 * c.height), Math.round((x1 - x0) * c.width), Math.round((y1 - y0) * c.height)).data;
      let s = 0;
      for (let i = 0; i < d.length; i += 4) s += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      out[k] = s / (d.length / 4) / 255;
    }
    const d = g.getImageData(0, 0, c.width, c.height).data;
    let hot = 0;
    for (let i = 0; i < d.length; i += 4) if (d[i] > 250 && d[i + 1] > 250 && d[i + 2] > 250) hot++;
    out.clipped = hot / (d.length / 4);
    return out;
  }, { png, regions, t }));
}
await ctx.close();
const f = (v) => v.toFixed(3).padStart(10);
console.log('\n     t   flicker' + Object.keys(regions).map((k) => k.padStart(10)).join('') + '  white %');
for (const r of rows) console.log(String(r.t).padStart(6) + f(r.flicker) + Object.keys(regions).map((k) => f(r[k])).join('') + (100 * r.clipped).toFixed(2).padStart(9));
const corr = (a, b) => {
  const n = a.length, ma = a.reduce((x, y) => x + y) / n, mb = b.reduce((x, y) => x + y) / n;
  let sab = 0, saa = 0, sbb = 0;
  for (let i = 0; i < n; i++) { sab += (a[i] - ma) * (b[i] - mb); saa += (a[i] - ma) ** 2; sbb += (b[i] - mb) ** 2; }
  return sab / Math.sqrt(saa * sbb);
};
const fl = rows.map((r) => r.flicker);
const range = (k) => { const v = rows.map((r) => r[k]); return Math.max(...v) - Math.min(...v); };
console.log('');
for (const k of ['wallByLamp', 'barbell', 'farFloor']) {
  const c = corr(fl, rows.map((r) => r[k]));
  check(c > 0.95 && range(k) > 0.05, `${k} follows the strip light (correlation ${c.toFixed(3)}, swing ${range(k).toFixed(3)})`);
}
for (const k of ['keyPool', 'windows']) check(range(k) < 0.03, `${k} stays steady when the strip light fails (swing ${range(k).toFixed(3)})`);
const worst = Math.max(...rows.map((r) => r.clipped));
check(worst < 0.001, `no frame clips to white (worst ${(100 * worst).toFixed(2)} % of pixels)`);

await browser.close();
console.log(failures.length ? `\n${failures.length} check(s) failed` : '\nall checks passed');
process.exit(failures.length ? 1 : 0);
