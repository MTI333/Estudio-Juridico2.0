// src/components/common/Header/useGlassDrop.js
import { useEffect, useLayoutEffect, useRef } from 'react';
import { dropTransform, prefersReducedMotion, stepSpring, stretch } from '../../glass/glassMotion';

const UNPLACED = { pos: Number.NaN, vel: 0 };

/**
 * Moves the drop under a track's `[data-nav-item]` buttons: to the one with the
 * mouse or the focus and, without either, to `active`. It rides a spring that
 * sleeps once it settles; under reduced motion it jumps. Returns the refs to put
 * on the track and on the drop.
 */
export function useGlassDrop({ axis, active }) {
  const track = useRef(null);
  const drop = useRef(null);
  const live = useRef(active);
  const wake = useRef(() => undefined);

  useEffect(() => {
    live.current = active;
    wake.current();
  }, [active]);

  useLayoutEffect(() => {
    const trackEl = track.current;
    const dropEl = drop.current;
    if (!trackEl || !dropEl) return undefined;

    const reduce = prefersReducedMotion();
    let hover = -1;
    let pos = UNPLACED;
    let size = UNPLACED;
    let raf = 0;
    let last = 0;

    const items = () => [...trackEl.querySelectorAll('[data-nav-item]')];

    /** Draws one frame; true while the drop is still moving. */
    const paint = (now) => {
      if (trackEl.offsetWidth === 0) return false;
      const dt = Math.min(Math.max((now - last) / 1000, 0), 0.032);
      last = now;

      const item = items()[hover >= 0 ? hover : live.current];
      if (!item) {
        dropEl.style.opacity = '0';
        pos = UNPLACED;
        size = UNPLACED;
        return false;
      }

      const goalPos = axis === 'y' ? item.offsetTop : item.offsetLeft;
      const goalSize = axis === 'y' ? item.offsetHeight : item.offsetWidth;
      let busy = false;
      if (reduce || Number.isNaN(pos.pos)) {
        pos = { pos: goalPos, vel: 0 };
        size = { pos: goalSize, vel: 0 };
      } else {
        pos = stepSpring(pos, goalPos, dt);
        size = stepSpring(size, goalSize, dt);
        busy = !pos.settled || !size.settled;
      }

      const s = reduce ? 0 : stretch(pos.vel);
      dropEl.style.setProperty(axis === 'y' ? 'height' : 'width', `${size.pos.toFixed(2)}px`);
      dropEl.style.transform = dropTransform(axis, pos.pos, s);
      dropEl.style.opacity = '1';
      return busy;
    };

    const tick = (now) => {
      raf = 0;
      if (paint(now)) raf = requestAnimationFrame(tick);
    };

    wake.current = () => {
      if (reduce) {
        paint(performance.now());
        return;
      }
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const indexOf = (target) => {
      const el = target instanceof Element ? target.closest('[data-nav-item]') : null;
      return el ? items().indexOf(el) : -1;
    };
    const onOver = (e) => {
      if (e.pointerType !== 'mouse') return;
      hover = indexOf(e.target);
      wake.current();
    };
    const onFocusIn = (e) => {
      hover = indexOf(e.target);
      wake.current();
    };
    const onLeave = () => {
      hover = -1;
      wake.current();
    };

    // Also fires when the track goes from display: none to visible.
    const observer = new ResizeObserver(() => {
      pos = UNPLACED;
      size = UNPLACED;
      wake.current();
    });
    observer.observe(trackEl);

    trackEl.addEventListener('pointerover', onOver);
    trackEl.addEventListener('pointerleave', onLeave);
    trackEl.addEventListener('focusin', onFocusIn);
    trackEl.addEventListener('focusout', onLeave);
    paint(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      wake.current = () => undefined;
      observer.disconnect();
      trackEl.removeEventListener('pointerover', onOver);
      trackEl.removeEventListener('pointerleave', onLeave);
      trackEl.removeEventListener('focusin', onFocusIn);
      trackEl.removeEventListener('focusout', onLeave);
    };
  }, [axis]);

  return { track, drop };
}
