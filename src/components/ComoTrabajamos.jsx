import React from 'react';

const ComoTrabajamos = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-raleway relative z-10 border-t border-black/5">
      <div className="max-w-[1050px] mx-auto px-6 text-center">
        
        {/* Subtítulo superior */}
        <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-raleway">
          Cómo trabajamos
        </span>
        
        {/* Título principal */}
        <h2 className="text-[28px] md:text-[40px] lg:text-[44px] font-raleway font-bold text-[#1e3325] mb-6 leading-tight max-w-2xl mx-auto">
          Cada caso, coordinado entre especialistas
        </h2>
        
        {/* Párrafo descriptivo */}
        <p className="text-[#6b7280] text-[14px] md:text-[16px] leading-relaxed max-w-3xl mx-auto mb-12 font-raleway">
          No derivamos y desaparecemos — el equipo conversa cada caso en conjunto para que el tratamiento tenga una sola mirada.
        </p>
        
        {/* Imagen principal con bordes redondeados */}
        <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-sm border border-black/5 bg-[#f4f5f3] relative">
          <img 
            src="/como-trabajamos.jpg"
            alt="Doctores trabajando en equipo" 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500/efe8d8/256b3c?text=Foto+del+Equipo' }}
          />
        </div>

      </div>
    </section>
  );
};

export default ComoTrabajamos;