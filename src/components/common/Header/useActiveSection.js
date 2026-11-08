// src/components/common/Header/useActiveSection.js
import { useSyncExternalStore } from 'react';
import { useLocation } from 'react-router-dom';
import { activeSectionIndex } from './navSections';

/** How far below the bar, in px, a section counts as the current one. */
const LINE_OFFSET = 60;

function subscribe(onChange) {
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange);
  return () => {
    window.removeEventListener('scroll', onChange);
    window.removeEventListener('resize', onChange);
  };
}

function readActiveSection(sectionIds) {
  const sections = sectionIds.map((id) => document.getElementById(id));
  if (sections.some((section) => !section)) return -1;
  const line = document.getElementById('site-nav').getBoundingClientRect().bottom + LINE_OFFSET;
  const atBottom =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  return activeSectionIndex(
    sections.map((section) => section.getBoundingClientRect().top),
    line,
    atBottom,
  );
}

export function useActiveSection(sectionIds) {
  // Re-renders on a route change, when the sections appear or go away.
  useLocation();
  return useSyncExternalStore(subscribe, () => readActiveSection(sectionIds));
}
