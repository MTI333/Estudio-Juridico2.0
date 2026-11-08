// src/components/utils/scrollToSection.js
import { prefersReducedMotion } from '../glass/glassMotion';

/** Scrolls to a home section; from another route, goes to the home at that section. */
export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    window.location.assign(`/#${sectionId}`);
    return;
  }
  section.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
