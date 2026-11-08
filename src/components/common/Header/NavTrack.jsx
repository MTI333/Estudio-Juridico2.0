// src/components/common/Header/NavTrack.jsx
import React from 'react';
import { NAV_ITEMS } from './navSections';
import { useGlassDrop } from './useGlassDrop';

const NavTrack = ({ axis, active, onSelect }) => {
  const { track, drop } = useGlassDrop({ axis, active });

  return (
    <div ref={track} className={`nav-track nav-track--${axis}`}>
      <span ref={drop} className="drop" aria-hidden="true" />
      {NAV_ITEMS.map((item, index) => (
        <button
          key={item.section}
          type="button"
          data-nav-item
          className="nav-link"
          aria-current={index === active ? 'true' : undefined}
          onClick={() => onSelect(item.section)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavTrack;
