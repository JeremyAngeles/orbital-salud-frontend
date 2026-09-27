import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51999999999" // <-- Cambia esto por el número real
      target="_blank"
      rel="noreferrer"
      // Usamos drop-shadow para que la sombra se adapte perfectamente a la forma de tu imagen PNG
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center drop-shadow-xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Mensaje emergente (Tooltip) */}
      <span className="absolute right-[75px] bg-white text-[#1e3325] text-sm font-raleway font-bold py-2 px-4 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¡Agenda tu cita!
      </span>
      
      {/* Tu imagen local de WhatsApp */}
      <img 
        src="/whatsapp.png" 
        alt="WhatsApp" 
        className="w-14 h-14 md:w-16 md:h-16 object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;