// src/components/sections/InformacionProfesional.jsx
import React from 'react';
import GlassPanel from '../../glass/GlassPanel';
import './ProfessionalInfo.css';

const InformacionProfesional = () => {
  return (
    <section className="informacion-profesional" id="informacion-profesional">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Información Profesional</h2>
        </div>
        
        {/* Información Principal Compacta */}
        <GlassPanel radius={22} className="info-principal">
          <div className="titulo-principal">
            <h1>Ab. Sandra Marcela Policastro</h1>
            <div className="institucion">
              <h2>Procuradora-Abogada</h2>
              Facultad de Derecho y Ciencias Sociales - Universidad Nacional de Córdoba
            </div>
          </div>
          
          <div className="credenciales-principales">
            <div className="credencial-item principal">
              <strong>MP:</strong> 1-30173 (Colegio de Abogados de Córdoba)
            </div>
            <div className="credencial-item principal">
              <strong>CSJN:</strong> Tomo 66 - Folio 634
            </div>
          </div>
        </GlassPanel>

       

        {/* CTA Compacto */}
        
      </div>
    </section>
  );
};

export default InformacionProfesional;  