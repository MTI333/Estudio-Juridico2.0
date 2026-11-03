// src/components/common/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Si la imagen está en src/assets/images/logo-sandri.jpg
import logoImage from '../../../assets/images/logo-sandri.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para redirigir a WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493544437481";
    const message = "Hola, me gustaría solicitar una consulta legal.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si no está en home, navegar al home primero
      window.location.assign(`/#${sectionId}`);
    } else {
      // Si está en home, hacer scroll suave
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Función para manejar clics en enlaces
  const handleNavClick = (path, sectionId = null) => {
    if (path === '/' && sectionId) {
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Inicio', path: '/', section: 'hero' },
    { label: 'Información Profesional', path: '/', section: 'informacion-profesional' },
    { label: 'Servicios', path: '/', section: 'servicios' },
    { label: 'Contacto', path: '/', section: 'ubicacion' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo - Solo a la izquierda */}
        <Link to="/" className="nav-logo">
          <div className="logo-container">
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
          </div>
        </Link>

        {/* Menú Desktop */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              onClick={() => handleNavClick(item.path, item.section)}
            >
              {item.section && item.path === '/' ? (
                <span className="nav-link">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Botón WhatsApp Desktop */}
        <button 
          className="whatsapp-btn desktop-whatsapp"
          onClick={handleWhatsAppClick}
          title="Contactar por WhatsApp"
        >
          <span className="whatsapp-icon">💬</span>
          <span className="whatsapp-text">WhatsApp</span>
        </button>

        {/* Menú Mobile */}
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú Mobile Desplegable */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="mobile-nav-item"
              onClick={() => handleNavClick(item.path, item.section)}
            >
              {item.section && item.path === '/' ? (
                <span className="mobile-nav-link">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Botón WhatsApp Mobile */}
          <button 
            className="mobile-whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            <span className="whatsapp-icon">💬</span>
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;