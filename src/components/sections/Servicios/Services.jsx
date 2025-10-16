// src/components/sections/Servicios.jsx
import React from 'react';
import './Services.css';

// 1. IMPORTAMOS LAS IMÁGENES DE LOS ICONOS
// (Asegúrate de que estos nombres de archivo coincidan con los tuyos)
import iconoAsesoramiento from '../../../assets/images/iconos/balanza.png';
import iconoFamilia from '../../../assets/images/iconos/familia.png';
import iconoLaboral from '../../../assets/images/iconos/portafolio.png';
import iconoCivil from '../../../assets/images/iconos/grafico-de-barras.png';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "ASESORAMIENTO JURIDICO INTEGRAL",
      descripcion: "",
      icono: iconoAsesoramiento, // <-- 2. REEMPLAZAMOS EL EMOJI POR LA IMAGEN IMPORTADA
      caracteristicas: [
        "Análisis de casos",
        "Estrategias legales",
        "Orientación preventiva"
      ]
    },
    {
      id: 2,
      titulo: "DERECHO DE FAMILIA Y SUCESIONES",
      descripcion: "",
      icono: iconoFamilia, // <-- 2. REEMPLAZAMOS EL EMOJI
      caracteristicas: [
        "Divorcios",
        "Adopciones",
        "Sucesiones",
        "Cuota alimentaria",
      ]
    },
    {
      id: 3,
      titulo: "DERECHO LABORAL",
      descripcion: "",
      icono: iconoLaboral, // <-- 2. REEMPLAZAMOS EL EMOJI
      caracteristicas: [
        "Despidos",
        "Reclamos laborales",
        "Reclamos entre A.R.T y S.R.T",
      ]
    },
    {
      id: 4,
      titulo: "DERECHO CIVIL Y COMERCIAL",
      descripcion: "",
      icono: iconoCivil, // <-- 2. REEMPLAZAMOS EL EMOJI
      caracteristicas: [
        "Contratos",
        "Cobranzas",
        "Desalojos",
        "Sociedades",
        "Juicios de prescripcion adquisitiva (usucapiones)",
        "defensa de los derechos posesorios",
        "Juicios de reinvidicacion de inmuebles",
      ]
    },
  ];

  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-header compact">
          <h3 className="section-title"> Areas De Especializacion </h3>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios legales, tanto presencial como virtual, 
            en toda la provincia de Córdoba.
          </p>
        </div>
        
        <div className="servicios-grid">
          {servicios.map(servicio => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-header">
                <div className="servicio-icon">
                  {/* 3. CAMBIAMOS EL DIV POR UNA ETIQUETA IMG */}
                  <img src={servicio.icono} alt={`Icono de ${servicio.titulo}`} />
                </div>
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