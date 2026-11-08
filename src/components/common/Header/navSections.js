// src/components/common/Header/navSections.js
export const NAV_ITEMS = [
  { label: 'Inicio', section: 'hero' },
  { label: 'Información Profesional', section: 'informacion-profesional' },
  { label: 'Servicios', section: 'servicios' },
  { label: 'Contacto', section: 'ubicacion' },
];

/**
 * The current section is the last one whose top edge passed `line`; at the end
 * of the page, the last one. -1 when the page has none of them.
 */
export function activeSectionIndex(tops, line, atBottom) {
  if (tops.length === 0) return -1;
  if (atBottom) return tops.length - 1;
  let active = 0;
  tops.forEach((top, i) => {
    if (top <= line) active = i;
  });
  return active;
}
