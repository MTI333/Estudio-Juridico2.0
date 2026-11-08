// src/components/utils/openWhatsApp.js
export function openWhatsApp() {
  const phoneNumber = "5493544437481";
  const message = "Hola, me gustaría solicitar una consulta legal.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
