// src/components/glass/glassRefraction.js
// Pure geometry of the refraction filter; scripts/glass-maps.mjs imports it too,
// so the maps and the filter cannot disagree.

/** How far from the rim, in px, the glass bends what is behind it. */
export const BEZEL = 20;
export const PANEL_RADII = [18, 22, 26];
/** One set of maps per bar height: keep in sync with --nav-h in index.css. */
export const PILL_HEIGHTS = [91, 81, 76, 71];
/**
 * The spec's plan B: false leaves refraction only on the bar on small or touch
 * screens, if the home does not scroll smoothly there.
 */
export const REFRACT_PANELS_ON_SMALL_SCREENS = true;

export const panelCap = (radius) => Math.max(radius, BEZEL) + 4;
export const pillCap = (height) => Math.ceil(height / 2) + 6;

const toSlices = (rows, href) =>
  rows
    .map(([part, x, y, width, height]) => ({ part, href: href(part), x, y, width, height }))
    .filter((slice) => slice.width > 0 && slice.height > 0);

/**
 * Where each map slice goes on a panel: the corners keep their size and the
 * edges stretch between them. The centre has no slice: it stays neutral.
 */
export function panelSlices(width, height, radius) {
  const capX = Math.min(panelCap(radius), Math.floor(width / 2));
  const capY = Math.min(panelCap(radius), Math.floor(height / 2));
  const midX = width - 2 * capX;
  const midY = height - 2 * capY;
  const right = width - capX;
  const bottom = height - capY;
  return toSlices(
    [
      ['tl', 0, 0, capX, capY],
      ['t', capX, 0, midX, capY],
      ['tr', right, 0, capX, capY],
      ['l', 0, capY, capX, midY],
      ['r', right, capY, capX, midY],
      ['bl', 0, bottom, capX, capY],
      ['b', capX, bottom, midX, capY],
      ['br', right, bottom, capX, capY],
    ],
    (part) => `/glass/panel-r${radius}-${part}.png`,
  );
}

/** Same for the bar, which only stretches along x. No maps for a height: no slices. */
export function pillSlices(width, height) {
  if (!PILL_HEIGHTS.includes(height)) return [];
  const cap = Math.min(pillCap(height), Math.floor(width / 2));
  return toSlices(
    [
      ['start', 0, 0, cap, height],
      ['mid', cap, 0, width - 2 * cap, height],
      ['end', width - cap, 0, cap, height],
    ],
    (part) => `/glass/pill-h${height}-${part}.png`,
  );
}

/** Only Chromium renders an SVG filter inside `backdrop-filter`. */
export function rendersBackdropSvgFilters(nav = navigator) {
  const brands = nav.userAgentData?.brands;
  return Array.isArray(brands) && brands.some((b) => b.brand === 'Chromium');
}

export function refractionEnabled(kind, win = window) {
  if (
    !win.ResizeObserver ||
    !rendersBackdropSvgFilters(win.navigator) ||
    win.matchMedia('(prefers-reduced-transparency: reduce)').matches
  ) {
    return false;
  }
  if (kind === 'pill') return true;
  return (
    REFRACT_PANELS_ON_SMALL_SCREENS ||
    !win.matchMedia('(max-width: 968px), (pointer: coarse)').matches
  );
}
