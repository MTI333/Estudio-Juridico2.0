// src/components/sections/Servicios.jsx
import React from 'react';
import './Services.css';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Asesoramiento Legal",
      descripcion: "Orientación legal personalizada para tomar decisiones informadas y proteger tus derechos en cualquier situación jurídica.",
      icono: "⚖️",
      caracteristicas: [
        "Análisis de casos",
        "Evaluación de riesgos",
        "Estrategias legales",
        "Orientación preventiva"
      ]
    },
    {
      id: 2,
      titulo: "Representación Judicial",
      descripcion: "Defensa profesional en tribunales y representación legal integral en todos los procesos judiciales.",
      icono: "👨‍⚖️",
      caracteristicas: [
        "Presentación de demandas",
        "Audiencias y vistas",
        "Recursos judiciales",
        "Seguimiento de casos"
      ]
    },
    {
      id: 3,
      titulo: "Consultoría en Derecho Civil y Comercial",
      descripcion: "Asesoría especializada en contratos, sociedades, propiedad intelectual y transacciones comerciales.",
      icono: "📊",
      caracteristicas: [
        "Redacción de contratos",
        "Constitución de empresas",
        "Propiedad intelectual",
        "Negociaciones comerciales"
      ]
    },
    {
      id: 4,
      titulo: "Defensa en Juicios Laborales",
      descripcion: "Representación legal en conflictos laborales para empleadores y trabajadores.",
      icono: "👥",
      caracteristicas: [
        "Despidos e indemnizaciones",
        "Conflictos contractuales",
        "Acuerdos laborales",
        "Audiencias de conciliación"
      ]
    },
    {
      id: 5,
      titulo: "Trámites Notariales",
      descripcion: "Gestión integral de documentación notarial y legalización de documentos.",
      icono: "📑",
      caracteristicas: [
        "Poderes notariales",
        "Autenticaciones",
        "Escrituras públicas",
        "Legalizaciones"
      ]
    },
    {
      id: 6,
      titulo: "Mediación y Resolución de Conflictos",
      descripcion: "Soluciones alternativas de controversias mediante procesos de mediación eficientes.",
      icono: "🤝",
      caracteristicas: [
        "Mediación prejudicial",
        "Acuerdos extrajudiciales",
        "Resolución de disputas",
        "Procesos colaborativos"
      ]
    }
  ];

  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios Profesionales</h2>
          <p className="section-subtitle">
            Ofrecemos una gama completa de servicios legales con la más alta calidad profesional 
            y compromiso con nuestros clientes.
          </p>
        </div>
        
        <div className="servicios-grid">
          {servicios.map(servicio => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-header">
                <div className="servicio-icon">{servicio.icono}</div>
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
              </div>
              
              <p className="servicio-descripcion">{servicio.descripcion}</p>
              
              <ul className="servicio-caracteristicas">
                {servicio.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="caracteristica-item">
                    <span className="caracteristica-icon">✓</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
              
             
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Servicios;