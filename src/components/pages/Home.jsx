// src/components/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Home/Hero';
import Servicios from '../sections/Servicios/Services';
import InformacionProfesional from '../sections/InformacionProfesional/ProfessionalInfo';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section - Estructura original pero centrada */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          <div className="hero-content-centered">
            <h1 className="hero-title">
              Excelencia Legal con Compromiso y Resultados
            </h1>
            <p className="hero-subtitle">
              Más de 20 años de experiencia brindando soluciones legales integrales 
              y representación de calidad para proteger sus derechos e intereses.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-secondary">
                Conocer Nuestros Servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">
              Combinamos experiencia, dedicación y un enfoque personalizado 
              para cada caso que manejamos.
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
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Atención Personalizada</h3>
              <p className="feature-description">
                Cada cliente recibe atención individualizada y estrategias 
                legales diseñadas específicamente para su situación.
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+200</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Instalaciones */}
      <section className="instalaciones-section" id="instalaciones">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestras Instalaciones</h2>
            <p className="section-subtitle">
              Un entorno profesional y acogedor diseñado para brindarle la mejor atención legal
            </p>
          </div>
          <div className="instalaciones-content">
            <div className="instalaciones-image">
              <img  
                src="/src/assets/images/estudio-fisico-sandri.jpg" 
                alt="Instalaciones del Estudio Jurídico" 
                className="office-image"
              />
            </div>
            <div className="instalaciones-info">
              <h3>Ambiente Profesional y Confidencial</h3>
              <p>
                Nuestras instalaciones están diseñadas para ofrecer un ambiente de confianza 
                y profesionalismo, donde podrá discutir su situación legal con total privacidad 
                y comodidad.
              </p>
              <div className="instalaciones-features">
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>Total confidencialidad</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💼</span>
                  <span>Ambiente profesional</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🕒</span>
                  <span>Puntualidad en las citas</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📍</span>
                  <span>Ubicación accesible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Ubicación con Google Maps */}
      <section className="ubicacion-section" id="ubicacion">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestra Ubicación</h2>
            <p className="section-subtitle">
              Encuéntrenos fácilmente. Estamos ubicados en una ubicación céntrica y accesible
            </p>
          </div>
          <div className="ubicacion-content">
            <div className="mapa-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.518328765066!2d-65.19325928836889!3d-31.94683217391323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd52c4f67983b%3A0x17a2fe2c1ea3af0!2sESTUDIO%20JURIDICO%20POLICASTRO%20%26%20ASOC.!5e0!3m2!1ses!2sar!4v1759329503499!5m2!1ses!2sar" 
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
                    <p>Lunes a Viernes: 8:00 - 14:00 hs</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <div className="contacto-icon">📞</div>
                  <div className="contacto-details">
                    <h4>Teléfono</h4>
                    <p>+54 9 3544 43-7481</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <div className="contacto-icon">✉️</div>
                  <div className="contacto-details">
                    <h4>Email</h4>
                    <p>SandraMarcelaPolicastro@gmail.com</p>
                  
                  </div>
                </div>
              </div>
              <div className="ubicacion-actions">
                <button className="btn btn-primary">
                  WhatsApp
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Preview */}
      <section id="servicios">
        <Servicios />
      </section>

      {/* Professional Info Preview */}
      <section id="informacion-profesional">
        <InformacionProfesional />
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Home;