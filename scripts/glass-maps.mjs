// Writes the displacement maps the glass panels refract through (public/glass/*.png).
// They ship as same-origin files so nobody computes them per pixel on a phone.
//
// Encoding: red shifts the backdrop sideways, green up and down, 128 is still.
// Near the rim the backdrop is pulled from further inside, so what is behind the
// panel bends at its edges, like light through a lens's bezel.
//
// Regenerate after changing a radius or a bar height: node scripts/glass-maps.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';
import {
  BEZEL,
  PANEL_RADII,
  PILL_HEIGHTS,
  panelCap,
  pillCap,
} from '../src/components/glass/glassRefraction.js';

const out = join(dirname(fileURLToPath(import.meta.url)), '../public/glass');

/** Signed distance to a rounded rectangle centred on the origin (inside < 0). */
function roundedRect(px, py, halfW, halfH, r) {
  const qx = Math.abs(px) - (halfW - r);
  const qy = Math.abs(py) - (halfH - r);
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
}

/** RGB bytes of the map for a whole w×h panel. */
function displacement(w, h, radius) {
  const sdf = (x, y) => roundedRect(x - w / 2, y - h / 2, w / 2, h / 2, radius);
  const rgb = new Uint8Array(w * h * 3);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const cx = x + 0.5;
      const cy = y + 0.5;
      const inside = -sdf(cx, cy);
      let dx = 0;
      let dy = 0;
      if (inside < BEZEL && inside > -1) {
        const nx = sdf(cx + 1, cy) - sdf(cx - 1, cy);
        const ny = sdf(cx, cy + 1) - sdf(cx, cy - 1);
        const len = Math.hypot(nx, ny) || 1;
        const t = 1 - Math.max(0, inside) / BEZEL;
        const strength = t * t * (3 - 2 * t);
        dx = (-nx / len) * strength;
        dy = (-ny / len) * strength;
      }
      const i = (y * w + x) * 3;
      rgb[i] = Math.round(128 + dx * 127);
      rgb[i + 1] = Math.round(128 + dy * 127);
      rgb[i + 2] = 128;
    }
  }
  return rgb;
}

/** Copies the [x0, x0+cw) × [y0, y0+ch) window of a w-wide RGB image. */
function crop(rgb, w, x0, y0, cw, ch) {
  const piece = new Uint8Array(cw * ch * 3);
  for (let y = 0; y < ch; y++) {
    const from = ((y0 + y) * w + x0) * 3;
    piece.set(rgb.subarray(from, from + cw * 3), y * cw * 3);
  }
  return piece;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(bytes) {
  let c = 0xffffffff;
  for (const b of bytes) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, 'ascii');
  const tail = Buffer.alloc(4);
  tail.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])), 0);
  return Buffer.concat([head, data, tail]);
}
function png(rgb, w, h) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(w, 0);
  header.writeUInt32BE(h, 4);
  header.set([8, 2, 0, 0, 0], 8); // 8-bit RGB, no interlace
  const rows = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) {
    rows.set(rgb.subarray(y * w * 3, (y + 1) * w * 3), y * (w * 3 + 1) + 1);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(rows, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function write(name, map, mapW, [x0, y0, w, h]) {
  writeFileSync(join(out, `${name}.png`), png(crop(map, mapW, x0, y0, w, h), w, h));
}

mkdirSync(out, { recursive: true });

// A panel just large enough for its corners and one line of edge between them.
for (const radius of PANEL_RADII) {
  const cap = panelCap(radius);
  const size = cap * 2 + 1;
  const map = displacement(size, size, radius);
  const far = cap + 1;
  const parts = {
    tl: [0, 0, cap, cap],
    t: [cap, 0, 1, cap],
    tr: [far, 0, cap, cap],
    l: [0, cap, cap, 1],
    r: [far, cap, cap, 1],
    bl: [0, far, cap, cap],
    b: [cap, far, 1, cap],
    br: [far, far, cap, cap],
  };
  for (const [part, box] of Object.entries(parts)) {
    write(`panel-r${radius}-${part}`, map, size, box);
  }
}

// A bar of its exact height, long enough for both caps and one middle line.
for (const height of PILL_HEIGHTS) {
  const cap = pillCap(height);
  const length = cap * 2 + 1;
  const map = displacement(length, height, height / 2);
  const parts = {
    start: [0, 0, cap, height],
    mid: [cap, 0, 1, height],
    end: [cap + 1, 0, cap, height],
  };
  for (const [part, box] of Object.entries(parts)) {
    write(`pill-h${height}-${part}`, map, length, box);
  }
}
