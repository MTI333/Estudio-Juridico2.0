import React, { useState } from 'react';
import './ConsultationForm.css';

const RealizarConsulta = () => {
  const [formData, setFormData] = useState({
    tipoConsulta: '',
    urgencia: 'media',
    presupuesto: '',
    descripcion: '',
    archivos: null
  });

  const tiposConsulta = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Consultoría Técnica',
    'Diseño UI/UX',
    'Mantenimiento',
    'Otro'
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consulta enviada:', formData);
    alert('Consulta enviada correctamente. Te contactaremos pronto.');
    // Lógica para enviar la consulta
  };

  return (
    <section className="realizar-consulta">
      <div className="container">
        <h2 className="section-title">Realizar Consulta</h2>
        <p className="section-subtitle">
          Completa el formulario para que podamos entender tus necesidades y ofrecerte la mejor solución.
        </p>

        <form className="consulta-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Información de la Consulta</h3>
            
            <div className="form-group">
              <label htmlFor="tipoConsulta">Tipo de Consulta *</label>
              <select
                id="tipoConsulta"
                name="tipoConsulta"
                value={formData.tipoConsulta}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo</option>
                {tiposConsulta.map((tipo, index) => (
                  <option key={index} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Nivel de Urgencia</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="urgencia"
                    value="baja"
                    checked={formData.urgencia === 'baja'}
                    onChange={handleChange}
                  />
                  <span>Baja</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="urgencia"
                    value="media"
                    checked={formData.urgencia === 'media'}
                    onChange={handleChange}
                  />
                  <span>Media</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="urgencia"
                    value="alta"
                    checked={formData.urgencia === 'alta'}
                    onChange={handleChange}
                  />
                  <span>Alta</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="presupuesto">Presupuesto Estimado (USD)</label>
              <input
                type="number"
                id="presupuesto"
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleChange}
                placeholder="Ej: 5000"
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Detalles de la Consulta</h3>
            
            <div className="form-group">
              <label htmlFor="descripcion">Descripción Detallada *</label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows="6"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describe tu proyecto, objetivos, requisitos técnicos, timeline esperado, etc."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="archivos">Archivos Adjuntos</label>
              <input
                type="file"
                id="archivos"
                name="archivos"
                onChange={handleChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.png,.zip"
              />
              <small>Formatos aceptados: PDF, Word, imágenes, ZIP (Máx. 10MB)</small>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Enviar Consulta
            </button>
            <button type="button" className="btn-secondary">
              Limpiar Formulario
            </button>
          </div>
        </form>

        <div className="consulta-info">
          <h3>¿Qué pasa después?</h3>
          <div className="proceso-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Revisión de tu consulta</h4>
              <p>Analizaremos tu proyecto en detalle dentro de las próximas 24 horas.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Contacto personalizado</h4>
              <p>Te contactaremos para aclarar dudas y entender mejor tus necesidades.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Propuesta formal</h4>
              <p>Recibirás una propuesta detallada con timeline y costos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealizarConsulta;