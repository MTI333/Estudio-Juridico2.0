// src/components/common/Header/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Si la imagen está en src/assets/images/logo-sandri.jpg
import logoImage from '../../../assets/images/logo-sandri.jpg';
import GlassPanel from '../../glass/GlassPanel';
import { scrollToSection } from '../../utils/scrollToSection';
import NavTrack from './NavTrack';
import { NAV_ITEMS } from './navSections';
import { useActiveSection } from './useActiveSection';
import './Navbar.css';

const SECTION_IDS = NAV_ITEMS.map((item) => item.section);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const close = () => setIsMobileMenuOpen(false);
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      close();
      toggle.current?.focus();
    };
    const onPointerDown = (e) => {
      if (!header.current?.contains(e.target)) close();
    };
    const mobile = window.matchMedia('(max-width: 968px)');
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    mobile.addEventListener('change', close);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      mobile.removeEventListener('change', close);
    };
  }, [isMobileMenuOpen]);

  const handleSelect = (sectionId) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  // El menú va afuera de la píldora: adentro de un vidrio, otro vidrio no ve el fondo.
  return (
    <header ref={header} id="site-nav" className="site-nav">
      <GlassPanel as="nav" pill className="nav-pill">
        <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src={logoImage}
            alt="Estudio Jurídico"
            className="logo-image"
            onError={(e) => {
              console.error('Error cargando el logo:', e);
              e.target.style.display = 'none';
              // Mostrar fallback
              const fallback = document.querySelector('.logo-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          />
        </Link>

        <NavTrack axis="x" active={active} onSelect={handleSelect} />

        <button
          ref={toggle}
          type="button"
          className="nav-toggle"
          aria-label="Menú"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </GlassPanel>

      {isMobileMenuOpen && (
        <GlassPanel id="mobile-menu" className="mobile-menu">
          <NavTrack axis="y" active={active} onSelect={handleSelect} />
        </GlassPanel>
      )}
    </header>
  );
};

export default Navbar;
