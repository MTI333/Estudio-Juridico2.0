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

       

        {/* CTA Compacto */}
        
      </div>
    </section>
  );
};

export default InformacionProfesional;