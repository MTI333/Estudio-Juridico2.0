/// src/components/common/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Si la imagen está en src/assets/images/logo-sandri.jpg
import logoImage from '../../../assets/images/logo-sandri.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Debug: verificar si la imagen se carga
  useEffect(() => {
    console.log('Logo image path:', logoImage);
  }, []);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si no está en home, navegar al home primero
      window.location.href = `/#${sectionId}`;
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
    { label: 'Servicios', path: '/', section: 'servicios' },
    { label: 'Instalaciones', path: '/', section: 'instalaciones' },
    { label: 'Información Prof.', path:'/', section: 'informacion-profesional' }, // Corregido
    { label: 'Contacto', path: '/contacto' }
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
              onLoad={(e) => {
                console.log('Logo cargado exitosamente');
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
          
          <Link 
            to="/realizar-consulta" 
            className="nav-cta"
          >
            Realizar Consulta
          </Link>
        </div>

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
          <Link 
            to="/realizar-consulta" 
            className="mobile-nav-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Realizar Consulta
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;