// src/components/common/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'; // Importa el CSS

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;