import * as THREE from 'three';
import josefinUrl from './fonts/josefin-700.woff2';
import josefinItalicUrl from './fonts/josefin-700i.woff2';
import condensedUrl from './fonts/robotocond.woff2';

// The wrap-around label of 'The One' pre-workout (cherry), drawn in code.
// Left to right on the sheet: usage panel, front panel, supplement facts.
// Two textures come out of one drawing routine: the printed colours, and a
// second sheet that says how shiny each ink is (gold foil versus matte film).

const SANS = 'TheOneSans';
const COND = 'TheOneCondensed';
const HEAVY = `"Arial Black", "Helvetica Neue", "Segoe UI", Arial, sans-serif`;
const PLAIN = `"Helvetica Neue", Helvetica, Arial, sans-serif`;

export async function loadLabelFonts() {
  const faces = [
    new FontFace(SANS, `url(${josefinUrl})`, { weight: '700', style: 'normal' }),
    new FontFace(SANS, `url(${josefinItalicUrl})`, { weight: '700', style: 'italic' }),
    new FontFace(COND, `url(${condensedUrl})`, { weight: '100 900', style: 'normal' }),
  ];
  await Promise.all(faces.map(async (f) => {
    try { await f.load(); document.fonts.add(f); } catch (e) { /* falls back to a system face */ }
  }));
}

// ---------- contour lines (the label's background pattern) ----------
const hash = (x, y) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
};
function periodicNoise(x, y, period) {
  const ix = Math.floor(x), iy = Math.floor(y);
  let fx = x - ix, fy = y - iy;
  fx = fx * fx * (3 - 2 * fx);
  fy = fy * fy * (3 - 2 * fy);
  const w = (i) => ((i % period) + period) % period;
  const a = hash(w(ix), iy), b = hash(w(ix + 1), iy), c = hash(w(ix), iy + 1), d = hash(w(ix + 1), iy + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
function drawContours(g, DW, DH) {
  const step = 9;
  const nx = Math.ceil(DW / step), ny = Math.ceil(DH / step);
  const P = 7; // noise periods around the tub
  const field = new Float32Array((nx + 1) * (ny + 1));
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const u = (i / nx) * P, v = (j * step / DW) * P * 0.62;
      field[j * (nx + 1) + i] =
        0.62 * periodicNoise(u, v, P) + 0.28 * periodicNoise(u * 2 + 3.7, v * 2 + 1.3, P * 2) + 0.1 * periodicNoise(u * 4, v * 4 + 9.1, P * 4);
    }
  }
  const at = (i, j) => field[j * (nx + 1) + i];
  g.beginPath();
  for (let level = 0.2; level < 0.84; level += 0.034) {
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), d = at(i, j + 1);
        const code = (a > level ? 1 : 0) | (b > level ? 2 : 0) | (c > level ? 4 : 0) | (d > level ? 8 : 0);
        if (code === 0 || code === 15) continue;
        const x = i * step, y = j * step;
        const t = (p, q) => (level - p) / (q - p);
        const top = [x + step * t(a, b), y], right = [x + step, y + step * t(b, c)];
        const bottom = [x + step * t(d, c), y + step], left = [x, y + step * t(a, d)];
        const seg = (p, q) => { g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); };
        switch (code) {
          case 1: case 14: seg(left, top); break;
          case 2: case 13: seg(top, right); break;
          case 3: case 12: seg(left, right); break;
          case 4: case 11: seg(right, bottom); break;
          case 6: case 9: seg(top, bottom); break;
          case 7: case 8: seg(left, bottom); break;
          case 5: seg(left, top); seg(right, bottom); break;
          case 10: seg(top, right); seg(left, bottom); break;
        }
      }
    }
  }
  g.stroke();
}

// ---------- the drawing ----------
// Everything is laid out on a sheet 1000 units tall. `mr` draws the gloss sheet
// instead of the colours: green = roughness, blue = metalness.
function paint(g, W, H, mr) {
  const S = H / 1000;
  const DW = W / S, DH = 1000;
  g.setTransform(S, 0, 0, S, 0, 0);
  g.textBaseline = 'alphabetic';
  g.lineJoin = 'round';

  const enc = (rough, metal) => `rgb(0,${Math.round(rough * 255)},${Math.round(metal * 255)})`;
  const INK = mr
    ? { bg: enc(0.42, 0), white: enc(0.5, 0), line: enc(0.48, 0), print: enc(0.44, 0), gold: enc(0.33, 0.6), grey: enc(0.4, 0.25), silver: enc(0.36, 0.3) }
    : { bg: '#060606', white: '#f4f3ee', line: 'rgba(244,243,238,0.82)', print: '#0b0a09', gold: '#e9c079', grey: '#4b4845', silver: '#e6e6e2' };
  // a gradient in the colour sheet, a flat value in the gloss sheet
  const grad = (kind, x0, y0, x1, y1, stops) => {
    if (mr) return INK[kind];
    const gr = g.createLinearGradient(x0, y0, x1, y1);
    stops.forEach(([o, c]) => gr.addColorStop(o, c));
    return gr;
  };
  const GOLD = (x0, x1) => grad('gold', x0, 0, x1, 0, [[0, '#e3b468'], [0.45, '#f4d697'], [1, '#e5ba70']]);

  const capCache = {};
  const fontStr = (family, size, weight, italic) => `${italic ? 'italic ' : ''}${weight} ${size}px ${family}`;
  const capRatio = (family, weight, italic) => {
    const key = family + weight + italic;
    if (!capCache[key]) {
      g.font = fontStr(family, 200, weight, italic);
      const m = g.measureText('H');
      capCache[key] = (m.actualBoundingBoxAscent || 150) / 200;
    }
    return capCache[key];
  };
  // Text set by cap height. `fit` stretches the letter-spacing to a width,
  // `fitX` scales the glyphs horizontally to a width, `squeeze` is a fixed horizontal scale.
  function text(str, x, y, o) {
    const { cap, family = SANS, weight = 700, italic = false, align = 'left', spacing = 0, fit = 0, fitX = 0, color = INK.white } = o;
    let squeeze = o.squeeze || 1;
    g.font = fontStr(family, cap / capRatio(family, weight, italic), weight, italic);
    g.fillStyle = color;
    g.textAlign = 'left';
    const chars = [...str];
    let sp = spacing, total;
    if (fit || spacing) {
      const widths = chars.map((ch) => g.measureText(ch).width);
      const natural = widths.reduce((a, b) => a + b, 0);
      if (fit) sp = (fit / squeeze - natural) / Math.max(1, chars.length - 1);
      total = (natural + sp * (chars.length - 1)) * squeeze;
      const x0 = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
      g.save();
      g.translate(x0, y);
      g.scale(squeeze, 1);
      let cx = 0;
      chars.forEach((ch, i) => { g.fillText(ch, cx, 0); cx += widths[i] + sp; });
      g.restore();
    } else {
      const natural = g.measureText(str).width;
      if (fitX) squeeze = fitX / natural;
      total = natural * squeeze;
      const x0 = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
      g.save();
      g.translate(x0, y);
      g.scale(squeeze, 1);
      g.fillText(str, 0, 0);
      g.restore();
    }
    return total;
  }
  const rect = (x, y, w, h, color) => { g.fillStyle = color; g.fillRect(x, y, w, h); };
  const frame = (x, y, w, h, lw, color) => { g.strokeStyle = color; g.lineWidth = lw; g.strokeRect(x, y, w, h); };

  // ----- panel positions, in degrees around the tub -----
  const deg = DW / 360;
  const cx = DW / 2;
  const FRONT = { x0: cx - 63.25 * deg, x1: cx + 63.25 * deg };
  const FACTS = { x0: cx + 69 * deg, x1: cx + 177.5 * deg };
  const SIDE = { x0: cx - 177.5 * deg, x1: cx - 69 * deg };
  const TOP = 46, BOTTOM = 925;

  // ----- background: black film with thin contour lines -----
  rect(0, 0, DW, DH, INK.bg);
  g.save();
  g.beginPath();
  g.rect(0, 0, DW, DH);
  g.rect(FRONT.x0, 0, FRONT.x1 - FRONT.x0, DH);
  g.rect(FACTS.x0, TOP, FACTS.x1 - FACTS.x0, BOTTOM - TOP);
  g.rect(SIDE.x0, TOP, SIDE.x1 - SIDE.x0, BOTTOM - TOP);
  g.clip('evenodd');
  g.strokeStyle = INK.line;
  g.lineWidth = 1.7;
  g.lineCap = 'round';
  drawContours(g, DW, DH);
  g.restore();

  // =====================================================================
  // FRONT
  // =====================================================================
  {
    const L = cx - 54.7 * deg;        // left edge of the title block
    const TW = 77.2 * deg;            // its width
    text('THE', L, 179, { cap: 75, fitX: 26.75 * deg });
    text('ONE', L - 4, 410, { cap: 201, fitX: TW + 6, color: grad('silver', 0, 209, 0, 410, [[0, '#ffffff'], [0.55, '#f1f1ee'], [1, '#d7d7d3']]) });
    rect(L, 433, TW, 11, grad('gold', L, 0, L + TW, 0, [[0, '#e6bb72'], [0.5, '#f6e3b6'], [1, '#ffffff']]));
    text('PRE-WORKOUT', L, 510, { cap: 44, fit: TW, color: GOLD(L, L + TW) });

    // flavour pill, cut at a slant on the right
    const py = 537, ph = 75, pw = 48.6 * deg;
    g.beginPath();
    g.moveTo(L + 10, py);
    g.lineTo(L + pw, py);
    g.lineTo(L + pw - 44, py + ph);
    g.lineTo(L + 10, py + ph);
    g.quadraticCurveTo(L, py + ph, L, py + ph - 10);
    g.lineTo(L, py + 10);
    g.quadraticCurveTo(L, py, L + 10, py);
    g.closePath();
    g.fillStyle = grad('gold', L, 0, L + pw, 0, [[0, '#e7bd75'], [0.6, '#f3dcab'], [1, '#fbf5e6']]);
    g.fill();
    text('CHERRY', L + 30, py + 55, { cap: 37, color: INK.print, spacing: 1.5 });

    // cherry mark
    {
      const ox = L + pw + 42, oy = py + 40;
      g.fillStyle = INK.white;
      g.strokeStyle = INK.white;
      g.lineWidth = 3.4;
      g.lineCap = 'round';
      g.beginPath(); g.arc(ox - 15, oy + 17, 15.5, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.arc(ox + 16, oy + 23, 15.5, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.moveTo(ox - 13, oy + 3); g.quadraticCurveTo(ox - 10, oy - 22, ox + 8, oy - 36); g.stroke();
      g.beginPath(); g.moveTo(ox + 15, oy + 8); g.quadraticCurveTo(ox + 15, oy - 18, ox + 8, oy - 36); g.stroke();
      g.beginPath();
      g.moveTo(ox + 8, oy - 36);
      g.quadraticCurveTo(ox + 30, oy - 50, ox + 48, oy - 32);
      g.quadraticCurveTo(ox + 28, oy - 20, ox + 8, oy - 36);
      g.fill();
      // small gaps so the two cherries read as separate
      g.strokeStyle = INK.bg;
      g.lineWidth = 3;
      g.beginPath(); g.arc(ox + 16, oy + 23, 18.5, Math.PI * 0.85, Math.PI * 1.35); g.stroke();
    }

    // gold information band
    const bx = FRONT.x0, bw = FRONT.x1 - FRONT.x0, by = 664, bh = 261;
    rect(bx, by, bw, bh, grad('gold', 0, by, 0, by + bh, [[0, '#ecc27c'], [0.4, '#f3d08f'], [1, '#e9bd76']]));
    if (!mr) {
      // a little sheen across the band
      rect(bx, by, bw, bh, grad('gold', bx, 0, bx + bw, 0, [[0, 'rgba(255,255,255,0)'], [0.42, 'rgba(255,246,220,0.22)'], [1, 'rgba(255,255,255,0)']]));
    }
    const hair = (x0, x1, y) => rect(x0, y, x1 - x0, 2.2, INK.print);
    const c1 = cx - 59.4 * deg, c2 = cx - 20.3 * deg, c3 = cx + 5 * deg, c4 = cx + 38.2 * deg, cR = cx + 60.3 * deg;
    hair(c1, c2 - 34, 688);
    hair(c2 - 6, c4 - 24, 688);
    hair(c4 + 12, cR, 688);
    ['SCIENCE-BASED', 'FORMULA FOR HIGH', 'PERFORMANCE'].forEach((s, i) => text(s, c1, 733 + i * 28.5, { cap: 17.5, color: INK.print }));
    let w = text('10+', c2, 771, { cap: 50, color: INK.print });
    text('G', c2 + w + 4, 771, { cap: 25, color: INK.print });
    text('L-CITRULLINE', c2, 800, { cap: 14.5, italic: true, color: INK.print, spacing: 0.6 });
    w = text('350', c3, 771, { cap: 50, color: INK.print });
    text('MG', c3 + w + 14, 771, { cap: 25, color: INK.print });
    text('CAFFEINE ANHYDROUS', c3, 800, { cap: 14.5, italic: true, color: INK.print, spacing: 0.6 });
    rect(c4, 702, 2.4, 100, INK.print);
    {
      // up arrow
      const ax = c4 + 26;
      g.strokeStyle = INK.print; g.fillStyle = INK.print; g.lineWidth = 3;
      g.beginPath(); g.moveTo(ax, 792); g.lineTo(ax, 722); g.stroke();
      g.beginPath(); g.moveTo(ax - 9, 730); g.lineTo(ax, 712); g.lineTo(ax + 9, 730); g.closePath(); g.fill();
    }
    ['INCREASES', 'POWER &', 'ENDURANCE'].forEach((s, i) => text(s, c4 + 46, 733 + i * 28.5, { cap: 17.5, color: INK.print }));

    // grey strip fading in from the left
    rect(bx, 812, bw, 50, grad('grey', bx, 0, bx + bw, 0, [[0, 'rgba(75,72,69,0)'], [0.16, 'rgba(75,72,69,0)'], [0.62, 'rgba(75,72,69,0.92)'], [1, 'rgba(60,58,56,1)']]));
    if (mr) rect(bx, 812, bw * 0.3, 50, INK.gold);
    text('HIGH DOSAGE FORMULA', cR, 849, { cap: 25, align: 'right', spacing: 1.2 });
    w = text('NET WT 485,5', c1, 902, { cap: 15.5, color: INK.print, spacing: 0.4 });
    g.font = `400 26px ${PLAIN}`;
    g.fillStyle = INK.print;
    g.fillText('℮', c1 + w + 9, 903);
    text('30 SERVINGS', cR, 902, { cap: 15.5, align: 'right', color: INK.print, spacing: 0.4 });
  }

  // =====================================================================
  // SUPPLEMENT FACTS (right of the front)
  // =====================================================================
  {
    const x0 = FACTS.x0, pw = FACTS.x1 - FACTS.x0, y0 = TOP, ph = BOTTOM - TOP;
    rect(x0, y0, pw, ph, INK.bg);
    frame(x0, y0, pw, ph, 4, INK.white);
    // laid out on the 1018 x 1100 artwork, then fitted to the panel
    const fx = (v) => x0 + 14 + (v / 1018) * (pw - 28);
    const fy = (v) => y0 + 6 + (v / 1100) * (ph - 14);
    const k = (ph - 14) / 1100;
    const fade = (xa, xb) => grad('gold', xa, 0, xb, 0, [[0, '#ffffff'], [0.45, '#fbd9a8'], [1, '#f39a1f']]);
    const rule = (xa, xb, y, t) => rect(fx(xa), fy(y), fx(xb) - fx(xa), t * k, fade(fx(xa), fx(xb)));
    const thin = (xa, xb, y) => rect(fx(xa), fy(y), fx(xb) - fx(xa), 2.2, INK.white);

    text('Supplement Facts', fx(24), fy(100), { cap: 60 * k, family: HEAVY, weight: 900, fitX: fx(948) - fx(24) });
    text('Serving size: 1 Scoop (Approx 16,18g)', fx(24), fy(160), { cap: 23 * k, family: PLAIN, weight: 400 });
    text('Servings per container: 30', fx(24), fy(197), { cap: 23 * k, family: PLAIN, weight: 400 });
    rule(24, 1000, 208, 12);
    text('Amount Per Serving', fx(24), fy(258), { cap: 21 * k, family: PLAIN, weight: 700, spacing: 0.8 });
    text('1 Scoop (16,18g)', fx(554), fy(258), { cap: 21 * k, family: PLAIN, weight: 700, align: 'center', spacing: 0.6 });
    text('2 Scoops (32,36g)', fx(862), fy(258), { cap: 21 * k, family: PLAIN, weight: 700, align: 'center', spacing: 0.3 });
    rule(24, 1000, 272, 5);
    rect(fx(388), fy(220), 2.6, fy(1012) - fy(220), INK.white);
    rect(fx(720), fy(220), 2.6, fy(1012) - fy(220), INK.white);

    const small = [['Calories', 0, '5g', '10g', 306, 316], ['Total Carbohydrate', 0, '<1g', '2g', 345, 352], ['Total sugars', 26, '0g', '0g', 382, 390], ['Added sugars', 44, '0g', '0g', 421, 0]];
    small.forEach(([name, indent, a, b, base, line]) => {
      text(name, fx(24 + indent), fy(base), { cap: 16 * k, family: PLAIN, weight: 400 });
      text(a, fx(554), fy(base), { cap: 16 * k, family: PLAIN, weight: 400, align: 'center' });
      text(b, fx(862), fy(base), { cap: 16 * k, family: PLAIN, weight: 400, align: 'center' });
      if (line) { thin(24, 380, line); thin(397, 712, line); thin(728, 1000, line); }
    });
    rule(24, 1000, 432, 5);
    const big = [
      [['L-Citrulline'], '5250mg', '10.500mg', 487, 510],
      [['L-Tyrosine'], '2500mg', '5000mg', 563, 583],
      [['HydroPrime® Glycerol', 'Powder (65%)'], '2000mg', '4000mg', 652, 694],
      [['Betaine Anhydrous'], '2000mg', '4000mg', 754, 788],
      [['Agmatine Sulfate'], '500mg', '1000mg', 852, 882],
      [['Caffeine Anhydrous'], '175mg', '350mg', 948, 991],
    ];
    big.forEach(([names, a, b, base, line]) => {
      if (names.length === 2) {
        text(names[0], fx(32), fy(base - 10), { cap: 22 * k, family: PLAIN, weight: 400 });
        text(names[1], fx(32), fy(base + 24), { cap: 22 * k, family: PLAIN, weight: 400 });
      } else {
        text(names[0], fx(34), fy(base), { cap: 22 * k, family: PLAIN, weight: 400 });
      }
      text(a, fx(554), fy(base), { cap: 21 * k, family: PLAIN, weight: 400, align: 'center' });
      text(b, fx(862), fy(base), { cap: 21 * k, family: PLAIN, weight: 400, align: 'center' });
      thin(24, 380, line); thin(397, 712, line); thin(728, 1000, line);
    });
    rule(30, 1004, 1025, 9);
  }

  // =====================================================================
  // USAGE PANEL (left of the front): directions | comparison
  // =====================================================================
  {
    const x0 = SIDE.x0, pw = SIDE.x1 - SIDE.x0, y0 = TOP, ph = BOTTOM - TOP;
    rect(x0, y0, pw, ph, INK.bg);
    frame(x0, y0, pw, ph, 3, INK.white);
    const mid = x0 + pw * 0.392;
    rect(mid, y0, 2.6, ph, INK.white);

    // ----- left column -----
    const lx = x0 + 22;
    let w = text('ONE', lx, 157, { cap: 45 });
    rect(lx, 163, w, 4, INK.white);
    text('SUPPLEMENTS', lx, 180, { cap: 10.5, fit: w });
    const gold = GOLD(lx, lx + 240);
    text('SUGGESTED USE:', lx, 241, { cap: 20, color: gold, spacing: 0.6 });
    const body = (lines, y, pitch, cap) => lines.forEach((s, i) => text(s, lx, y + i * pitch, { cap, family: COND, weight: 500, squeeze: 0.93 }));
    body([
      "Mix 1-2 scoops of ‘the One’",
      'pre-workout with 300- 350ml of water.',
      'Shake thoroughly, and consume 30',
      'minutes prior to training. First time',
      'users should begin use with 1/2 to 1',
      'scoop or less to evaluate tolerance.',
    ], 276, 22.6, 14.6);
    text('WARNING', lx, 430, { cap: 20, color: gold, spacing: 0.6 });
    body([
      'KEEP OUT OF REACH OF CHILDREN.',
      'This product should not be taken',
      'by individuals who are nursing,',
      'pregnant, have a medical condition',
      'or are under the age of 18. Please',
      'consult your physician before',
      'implementing any new dietary',
      'supplement.',
      'Do NOT use this product with other',
      'caffeinated products, stimulants,',
      'alcohol or other medications. Store',
      'in a cool, dry place. NEVER exceed 2',
      'scoops in any 24-hour period. Keep',
      'out of reach of children.',
    ], 456, 22.4, 14.6);
    body(['Other ingredients: Natural and', 'artificial flavour, E551, E955'], 782, 23, 14.6);
    body(['Manufactured by One Supplements', 'Voorburg, Netherlands', 'support@onesupplements.shop', 'Onesupplements.shop'], 852, 14.4, 7.6);

    // ----- right column: the formula against the maximum useful dose -----
    const rx = mid + 26, rr = x0 + pw - 16;
    const colA = rx + (rr - rx) * 0.57, colB = rr - 44;
    text('INGREDIENT', rx + 22, 141, { cap: 9.5, italic: true, spacing: 0.5 });
    text('THE ONE', colA, 128, { cap: 9.5, italic: true, align: 'center', spacing: 0.5 });
    text('PRE-WORKOUT', colA, 143, { cap: 9.5, italic: true, align: 'center', spacing: 0.5 });
    text('MAXIMUM', colB, 128, { cap: 9.5, italic: true, align: 'center', spacing: 0.5 });
    text('DOSE', colB, 143, { cap: 9.5, italic: true, align: 'center', spacing: 0.5 });
    const rows = [
      [['L-CITRULLINE'], '10,500 MG', '10,000 MG', 210],
      [['L-TYROSINE'], '5 GRAMS', '5 GRAMS', 281],
      [['BETAINE', 'ANHYDROUS'], '4 GRAMS', '4 GRAMS', 346],
      [['CAFFEINE', 'ANHYDROUS'], '350 MG', '350 MG', 427],
    ];
    rows.forEach(([names, ours, max, y]) => {
      let nameW = 0;
      names.forEach((s, i) => { nameW = Math.max(nameW, text(s, rx, y + i * 25.5, { cap: 17, italic: true, spacing: 0.8 })); });
      const ly = y - 8 + (names.length - 1) * 8;
      const xa = rx + (names.length > 1 ? Math.min(nameW, 150) : nameW) + 12, xb = colB - 46;
      rect(xa, ly, xb - xa, 2.6, GOLD(xa, xb));
      rect(xb, ly - 9, 2.4, 20, INK.white);
      text(ours, colA, ly - 9, { cap: 9, align: 'center', spacing: 0.4 });
      text(max, colB, ly + 5, { cap: 9, align: 'center', spacing: 0.4 });
    });

    // three small pictograms
    const iconY = 528;
    const ix = [rx + (rr - rx) * 0.16, rx + (rr - rx) * 0.5, rx + (rr - rx) * 0.84];
    g.strokeStyle = INK.white;
    g.fillStyle = INK.white;
    g.lineWidth = 3;
    g.lineCap = 'round';
    {
      // two scoops
      const scoop = (ox, oy) => {
        g.save();
        g.translate(ox, oy);
        g.rotate(-0.42);
        g.strokeRect(-17, -11, 30, 22);
        g.beginPath(); g.moveTo(13, -4); g.lineTo(50, -4); g.lineTo(50, 4); g.lineTo(13, 4); g.stroke();
        g.restore();
      };
      scoop(ix[0] - 22, iconY + 12);
      scoop(ix[0] - 2, iconY + 18);
    }
    {
      // shaker bottle, mid-shake
      g.save();
      g.translate(ix[1], iconY + 4);
      g.rotate(0.3);
      g.beginPath();
      g.moveTo(-13, -22); g.lineTo(13, -22); g.lineTo(16, 34); g.lineTo(-16, 34); g.closePath(); g.stroke();
      g.strokeRect(-9, -36, 18, 13);
      g.restore();
      for (const s of [-1, 1]) {
        g.beginPath();
        g.arc(ix[1], iconY + 4, 37, s > 0 ? -0.9 : Math.PI - 0.5, s > 0 ? -0.2 : Math.PI + 0.2);
        g.stroke();
      }
    }
    {
      // stopwatch
      g.beginPath(); g.arc(ix[2], iconY + 10, 27, 0, Math.PI * 2); g.stroke();
      g.strokeRect(ix[2] - 6, iconY - 28, 12, 9);
      g.beginPath(); g.moveTo(ix[2], iconY + 10); g.lineTo(ix[2], iconY - 6); g.stroke();
      g.beginPath(); g.arc(ix[2], iconY + 10, 16, Math.PI * 0.55, Math.PI * 1.9); g.stroke();
    }
    const caption = (x, a, b, c) => {
      text(a, x, 598, { cap: 14, align: 'center', spacing: 0.5 });
      let y = 598;
      if (b) { y += 19; text(b, x, y, { cap: 14, align: 'center', spacing: 0.5 }); }
      text(c, x, y + 17, { cap: 7.5, italic: true, align: 'center', spacing: 0.4 });
    };
    caption(ix[0], '32 GRAMS', '', 'PER 2 SCOOPS');
    caption(ix[1], 'MIX WITH', 'WATER', 'SHAKE WELL');
    caption(ix[2], 'TAKE 30', 'MINUTES', 'BEFORE TRAINING');

    // three slanted badges
    {
      const by = 664, bh = 46, x1 = rx + 6, x2 = rr - 4, slant = 16;
      const cuts = [x1, x1 + (x2 - x1) * 0.36, x1 + (x2 - x1) * 0.66, x2];
      const fills = [
        grad('silver', cuts[0], 0, cuts[1], 0, [[0, '#f4f4f1'], [1, '#b9b9b5']]),
        grad('silver', cuts[1], 0, cuts[2], 0, [[0, '#ffffff'], [1, '#e9e9e6']]),
        grad('silver', cuts[2], 0, cuts[3], 0, [[0, '#d8d8d4'], [1, '#f6f6f3']]),
      ];
      const words = [['ENHANCES', 'BLOODFLOW'], ['HIGH-STIM'], ['NOOTROPIC', 'INGREDIENTS']];
      for (let i = 0; i < 3; i++) {
        g.beginPath();
        g.moveTo(cuts[i] + slant, by);
        g.lineTo(cuts[i + 1] + slant - 3, by);
        g.lineTo(cuts[i + 1] - 3, by + bh);
        g.lineTo(cuts[i], by + bh);
        g.closePath();
        g.fillStyle = fills[i];
        g.fill();
        const mx = (cuts[i] + cuts[i + 1]) / 2 + slant / 2 - 1;
        if (words[i].length === 2) {
          text(words[i][0], mx, by + 20, { cap: 10.5, italic: true, align: 'center', color: INK.print });
          text(words[i][1], mx, by + 37, { cap: 10.5, italic: true, align: 'center', color: INK.print });
        } else {
          text(words[i][0], mx, by + 29, { cap: 12, italic: true, align: 'center', color: INK.print });
        }
      }
    }

    // the promise, between two corner brackets
    {
      const ax = rx + 2, bx2 = rr - 6, ay = 768, by2 = 878, arm = 62, t = 15;
      g.fillStyle = INK.grey;
      g.fillRect(ax, ay, arm, t); g.fillRect(ax, ay, t, arm * 0.75);
      g.fillRect(bx2 - arm, by2 - t, arm, t); g.fillRect(bx2 - t, by2 - arm * 0.75, t, arm * 0.75);
      const mx = (ax + bx2) / 2;
      text('OUR PROMISE', mx, 818, { cap: 20, align: 'center', spacing: 0.6 });
      text("‘The One’ is more than just a pre-workout- It’s a promise to", mx, 841, { cap: 9.2, family: PLAIN, weight: 400, italic: true, align: 'center' });
      text('only deliver excellence and real results.', mx, 859, { cap: 9.2, family: PLAIN, weight: 400, italic: true, align: 'center' });
    }
  }
  g.setTransform(1, 0, 0, 1, 0, 0);
}

// `ratio` is label width / label height (circumference / printed height).
export function makeLabelCanvases(ratio, maxWidth = 4096) {
  let H = 1280;
  let W = Math.round(H * ratio);
  if (W > maxWidth) { W = maxWidth; H = Math.round(W / ratio); }
  const colour = document.createElement('canvas');
  colour.width = W;
  colour.height = H;
  paint(colour.getContext('2d'), W, H, false);
  const gloss = document.createElement('canvas');
  gloss.width = Math.round(W / 2);
  gloss.height = Math.round(H / 2);
  paint(gloss.getContext('2d'), gloss.width, gloss.height, true);
  return { colour, gloss };
}

export function makeLabelTextures(ratio, maxWidth) {
  const { colour, gloss } = makeLabelCanvases(ratio, maxWidth);
  const map = new THREE.CanvasTexture(colour);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  const mr = new THREE.CanvasTexture(gloss);
  mr.wrapS = THREE.RepeatWrapping;
  return { map, mr };
}
