// src/components/glass/glassMotion.js
// Motion of the drop that glides between the bar's items: a damped spring, and
// a stretch that follows its speed.

export const FOLLOW = { stiffness: 420, damping: 30 };

/**
 * Advances a damped spring by `dt` seconds toward `goal`. Once it is within half
 * a pixel and nearly still it lands exactly on the goal and reports `settled`,
 * so the caller can stop animating.
 */
export function stepSpring(state, goal, dt, spring = FOLLOW) {
  const vel = state.vel + (spring.stiffness * (goal - state.pos) - spring.damping * state.vel) * dt;
  const pos = state.pos + vel * dt;
  if (Math.abs(goal - pos) < 0.5 && Math.abs(vel) < 2) {
    return { pos: goal, vel: 0, settled: true };
  }
  return { pos, vel, settled: false };
}

/** How much the drop stretches along its travel at `vel` px/s (0 to 0.28). */
export function stretch(vel) {
  return Math.min(0.28, Math.abs(vel) / 2200);
}

export function dropTransform(axis, pos, s) {
  const along = (1 + s).toFixed(3);
  const across = (1 - s * 0.35).toFixed(3);
  const at = pos.toFixed(2);
  return axis === 'y'
    ? `translate3d(0, ${at}px, 0) scale(${across}, ${along})`
    : `translate3d(${at}px, 0, 0) scale(${along}, ${across})`;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
