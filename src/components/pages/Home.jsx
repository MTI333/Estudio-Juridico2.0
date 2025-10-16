// src/components/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Home/Hero';
import Servicios from '../sections/Servicios/Services';
import InformacionProfesional from '../sections/InformacionProfesional/ProfessionalInfo';
import './Home.css';
import { FaWhatsapp } from 'react-icons/fa';
import instalacionesImage from '../../assets/images/estudio-fisico-sandri.jpg';
import wppIco from '../../assets/images/wpp-icon.jpg';

import foto1 from '../../assets/images/Estudio-afuera1.jpg';
import foto2 from '../../assets/images/estudio-fisico-sandri.jpg';
import foto3 from '../../assets/images/Estudio-puerta.jpg';


const Home = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493544437481";
    const message = "Hola, me gustaría solicitar una consulta legal.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "SandraMarcelaPolicastro@gmail.com";
    const subject = "Consulta Legal";
    const body = "Hola, me gustaría solicitar una consulta legal.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          <div className="hero-content-centered">
            <h1 className="hero-title">
              Excelencia Legal con Compromiso y Resultados
            </h1>
            <p className="hero-subtitle">
                Ofrecemos atención personalizada en todos los procesos iniciados 
              dando respuesta a cada cliente cada vez que solicita información 
                                            sobre su trámite. 
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const serviciosSection = document.getElementById('servicios');
                  if (serviciosSection) {
                    serviciosSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Conocer Nuestros Servicios
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Informacion Profesional Section */}
      <section id="informacion-profesional"><InformacionProfesional /></section>
      
      {/* Servicios Section */}
      <section id="servicios"><Servicios /></section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">
              Combinamos experiencia, dedicación y un enfoque personalizado 
              para cada caso.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3 className="feature-title">Experiencia Comprobada</h3>
              <p className="feature-description">
                Más de 20 años de trayectoria en el ejercicio del derecho 
                con casos exitosos en diversas áreas legales.
              </p>
            </div>
        
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Resultados Efectivos</h3>
              <p className="feature-description">
                Enfoque en obtener los mejores resultados posibles mediante 
                estrategias legales innovadoras y efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instalaciones Section */}
      

      {/* ========================================================== */}
      {/* ===           SECCIÓN DE UBICACIÓN ACTUALIZADA           === */}
      {/* ========================================================== */}
      <section className="ubicacion-section" id="ubicacion">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestra Ubicación</h2>
            <p className="section-subtitle">
              Estamos ubicados en la ciudad de Villa Dolores Cordoba.
            </p>
          </div>

          {/* --- GALERÍA DE FOTOS (ENCIMA DEL MAPA) --- */}
          <div className="galeria-ubicacion">
            <img src={foto1} alt="Galería de la oficina 1" className="foto-galeria"/>
            <img src={foto2} alt="Galería de la oficina 2" className="foto-galeria"/>
            <img src={foto3} alt="Galería de la oficina 3" className="foto-galeria"/>
          </div>

          {/* --- MAPA E INFORMACIÓN (DEBAJO DE LA GALERÍA) --- */}
          <div className="ubicacion-content">
            <div className="mapa-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.823908860363!2d-65.19062862497645!3d-31.95632942442464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd81335359169%3A0x33333919e728455d!2sDr.%20Ram%C3%B3n%20J.%20C%C3%A1rcano%2055%2C%20X5870%20Villa%20Dolores%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1728978997677!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Estudio Jurídico"
                className="google-maps-iframe"
              ></iframe>
            </div>
            
            <div className="info-ubicacion">
              <h3>Información de Contacto</h3>
              <div className="contacto-info-grid">
                <div className="contacto-item">
                  <div className="contacto-icon">📍</div>
                  <div className="contacto-details">
                    <h4>Dirección</h4>
                    <p>Dr. Ramón J. Cárcano N° 55 Loc. 1, X5870 Villa Dolores, Córdoba</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <div className="contacto-icon">🕒</div>
                  <div className="contacto-details">
                    <h4>Horario de Atención</h4>
                    <p>Lunes a Viernes: (8:00 - 13:00 hs) (17:00 - 20:00 hs)</p>
                  </div>
                </div>
              </div>
              <div className="ubicacion-actions">
                <button className="btn btn-primary whatsapp-btn" onClick={handleWhatsAppClick}>
                  <span className="whatsapp-icon">💬</span>
                  WhatsApp
                </button>
                <button className="btn btn-secondary email-btn" onClick={handleEmailClick}>
                  <span className="email-icon">✉️</span>
                  Enviar Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <button className="whatsapp-flotante" onClick={handleWhatsAppClick}>
        <wppIco/>
      </button>
    </div>
  );
};

export default Home;