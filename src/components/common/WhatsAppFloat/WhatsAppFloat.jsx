// src/components/common/WhatsAppFloat/WhatsAppFloat.jsx
import React from 'react';
import iconoWhatsApp2 from '../../../assets/images/iconos/whatsapp2.png';
import { openWhatsApp } from '../../utils/openWhatsApp';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <button type="button" className="whatsapp-flotante" onClick={openWhatsApp}>
      <img src={iconoWhatsApp2} alt="Contactar por WhatsApp" />
    </button>
  );
};

export default WhatsAppFloat;
