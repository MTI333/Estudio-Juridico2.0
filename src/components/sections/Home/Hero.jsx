import React from 'react';
import './Home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenido a Nuestro Servicio Profesional
        </h1>
        <p className="hero-subtitle">
          Ofrecemos soluciones especializadas para tus necesidades con la más alta calidad y profesionalismo.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Conocer Más</button>
          <button className="btn btn-secondary">Contactar</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Aquí puedes agregar una imagen */}
        <div className="placeholder-image">Imagen Principal</div>
      </div>
    </section>
  );
};

export default Hero;