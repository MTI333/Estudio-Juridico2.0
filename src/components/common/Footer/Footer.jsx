// src/components/common/Footer/Footer.jsx
import React from 'react';
import GlassPanel from '../../glass/GlassPanel';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <GlassPanel className="footer-panel">
          <p>&copy; 2025 Estudio Jurídico Policastro. Todos los derechos reservados.</p>
        </GlassPanel>
      </div>
    </footer>
  );
};

export default Footer;
