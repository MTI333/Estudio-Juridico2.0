// src/components/sections/Servicios.jsx
import React from 'react';
import './Services.css';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "ASESORAMIENTO LEGAL",
      descripcion: "Orientación legal personalizada para tomar decisiones informadas y proteger sus derechos .",
      icono: "⚖️",
      caracteristicas: [
        "Análisis de casos",
        "Estrategias legales",
        "Orientación preventiva"
      ]
    },
    {
      id: 2,
      titulo: "DERECHO DE FAMILIA Y SUCESIONES",
      descripcion: "Asesoramiento y representación en asuntos de familia, incluyendo divorcios, adopciones y sucesiones.",
      icono: "👪",
      caracteristicas: [
        "Divorcios",
        "Adopciones",
        "Sucesiones",
        "Cuotas alimentarias",
        
      ]
    },
  
    {
      id: 3,
      titulo: "DERECHO LABORAL",
      descripcion: "Representación legal en conflictos laborales para empleadores y trabajadores.",
      icono: "👥",
      caracteristicas: [
        "Despidos",
        "Defensas laborales",
        "Reclamos entre A.R.T y S.R.T",
      ]
    },
    {
      id: 4,
      titulo: "DERECHO CIVIL Y COMERCIAL",
      descripcion: "",
      icono: "📊",
      caracteristicas: [
        "Redacción de contratos",
        "Cobranzas",
        "Desalojos",
        "Sociedades",
        "Derechos Reales(asesoramos desde la adquisicion de los derechos posesorios sobre inmuebles hasta su inscripcion en el registro de la propiedad, previo tramite de usucapion)",
        "Juicios de prescripcion adquisitiva",
        "defensa de los derechos posesorios",
        "Juicios de reinvidicacion de inmuebles",
      ]
    },
    
   
    
    
  ];

  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-header">
          
          <h3 className="section-title"> Areas De Especializacion </h3>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios legales adaptados a sus necesidades.
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