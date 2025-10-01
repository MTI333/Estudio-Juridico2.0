// src/components/sections/InformacionProfesional.jsx
import React from 'react';
import './ProfessionalInfo.css';

const InformacionProfesional = () => {
  const areasEspecializacion = [
    "Derecho de Familia y Sucesiones",
    "Derecho Civil y Contractual", 
    "Derecho Laboral",
    "Procesal Civil",
    "Mediación y Resolución Alternativa de Conflictos",
    "Asesoramiento Legal Integral"
  ];

  return (
    <section className="informacion-profesional" id="informacion-profesional">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Información Profesional</h2>
        </div>
        
        {/* Información Principal Compacta */}
        <div className="info-principal">
          <div className="titulo-principal">
            <h1>Sandra Marcela Policastro</h1>
            <div className="institucion">
              <h2>Procuradora-Abogada</h2>
              Facultad de Ciencias Sociales - Universidad Nacional de Córdoba
            </div>
          </div>
          
          <div className="credenciales-principales">
            <div className="credencial-item principal">
              <strong>MP:</strong> 1-30173 (Colegio de Abogados de Cba)
            </div>
            <div className="credencial-item principal">
              <strong>CSJN:</strong> Tomo 66 - Folio 634
            </div>
          </div>
        </div>

        {/* Áreas de Especialización */}
        <div className="especializacion-section">
          <h3>Áreas de Especialización</h3>
          <div className="especializacion-grid">
            {areasEspecializacion.map((area, index) => (
              <div key={index} className="especializacion-item">
                <div className="especializacion-icon">⚖️</div>
                <span className="especializacion-texto">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Compacto */}
        <div className="professional-cta compact">
          <div className="cta-content">
            <h3>¿Necesita Asesoramiento Legal Profesional?</h3>
            <p>
              Profesional matriculada en el Colegio de Abogados de Córdoba y registrada en CSJN.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Consulta Profesional
              </button>
              <button className="btn btn-secondary">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformacionProfesional;