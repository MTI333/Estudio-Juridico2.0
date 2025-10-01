import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Mensaje enviado correctamente');
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <section className="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes alguna pregunta? No dudes en contactarnos.
        </p>

        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            
            <div className="contacto-item">
              <div className="contacto-icon">📍</div>
              <div>
                <h4>Dirección</h4>
                <p>Av. Principal 123, Ciudad, País</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📞</div>
              <div>
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@misitio.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">🕒</div>
              <div>
                <h4>Horario de Atención</h4>
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;