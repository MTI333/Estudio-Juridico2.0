// src/components/glass/useGlassRefraction.js
import { useEffect, useId, useRef, useState } from 'react';
import { panelSlices, pillSlices, refractionEnabled } from './glassRefraction';

/**
 * Measures a glass panel and returns what its refraction filter needs; `filter`
 * and `style` stay empty where refraction is off, so the panel keeps the base glass.
 */
export function useGlassRefraction({ pill = false, radius }) {
  const panel = useRef(null);
  const [size, setSize] = useState(null);
  const id = `glass-refraction-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    const el = panel.current;
    if (!el || !refractionEnabled(pill ? 'pill' : 'panel')) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const box = entry?.borderBoxSize[0];
      const width = Math.round(box?.inlineSize ?? 0);
      const height = Math.round(box?.blockSize ?? 0);
      setSize(width > 0 && height > 0 ? { width, height } : null);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [pill]);

  const slices = !size
    ? []
    : pill
      ? pillSlices(size.width, size.height)
      : panelSlices(size.width, size.height, radius);

  if (slices.length === 0) return { panel, filter: null, style: undefined };
  return {
    panel,
    filter: { id, width: size.width, height: size.height, slices },
    style: { backdropFilter: `url(#${id})` },
  };
}
