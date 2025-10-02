// src/components/pages/RealizarConsulta.jsx
import React, { useState } from 'react';
import './RealizarConsulta.css';

const RealizarConsulta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    consulta: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xjvzozzz', { // Reemplaza con tu Formspree ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          consulta: formData.consulta,
          _subject: `Nueva Consulta Legal - ${formData.nombre} ${formData.apellido}`,
          _replyto: 'cliente@ejemplo.com' // Puedes agregar campo email si quieres
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', apellido: '', consulta: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="realizar-consulta-page">
      <section className="consulta-hero">
        <div className="container">
          <div className="consulta-hero-content">
            <h1>Realizar Consulta Legal</h1>
            <p>Complete el formulario y nos pondremos en contacto con usted a la brevedad</p>
          </div>
        </div>
      </section>

      <section className="formulario-consulta-section">
        <div className="container">
          <div className="formulario-container">
            <div className="formulario-info">
              <h2>Consulta Profesional</h2>
              <p>
                Su consulta será revisada personalmente por la Dra. Sandra Marcela Policastro 
                y recibirá una respuesta en el menor tiempo posible.
              </p>
              
              <div className="info-destacada">
                <h3>📞 Contacto Directo</h3>
                <p>También puede contactarnos directamente:</p>
                <ul>
                  <li><strong>WhatsApp:</strong> +54 9 3544 43-7481</li>
                  <li><strong>Email:</strong> SandraMarcelaPolicastro@gmail.com</li>
                  <li><strong>Horario:</strong> Lunes a Viernes 8:00 - 14:00 hs</li>
                </ul>
              </div>
            </div>

            <form className="formulario-consulta" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Formulario de Consulta</h3>
                <p>Todos los campos son obligatorios</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese su nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Apellido *</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese su apellido"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="consulta">Consulta Legal *</label>
                <textarea
                  id="consulta"
                  name="consulta"
                  value={formData.consulta}
                  onChange={handleChange}
                  required
                  rows="8"
                  placeholder="Describa detalladamente su situación legal o consulta..."
                ></textarea>
                <small>Sea lo más específico posible para brindarle una mejor asesoría</small>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  ✅ ¡Consulta enviada exitosamente! Nos pondremos en contacto a la brevedad.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  ❌ Error al enviar la consulta. Por favor, intente nuevamente o contáctenos directamente.
                </div>
              )}

              <button 
                type="submit" 
                className="btn-enviar-consulta"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>

              <div className="form-footer">
                <p>
                  <small>
                    Al enviar este formulario, acepta que nos contactemos con usted 
                    para brindarle asesoramiento legal.
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealizarConsulta;