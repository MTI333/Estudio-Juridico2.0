// src/components/common/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat';
import './Layout.css'; // Importa el CSS

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob aurora-blob--olive" />
        <span className="aurora-blob aurora-blob--gold" />
      </div>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
