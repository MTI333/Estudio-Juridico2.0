// src/components/common/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#265015',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p>&copy; 2025 Estudio Jurídico Policastro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;