import React from 'react';

const EquipoHero = () => {
  return (
    <section className="w-full pt-16 md:pt-24 pb-12 bg-white font-raleway relative z-10">
      <div className="max-w-[1050px] mx-auto px-6 text-center">
        
        {/* Subtítulo superior */}
        <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-raleway">
          Servicios y equipo
        </span>
        
        {/* Título principal con la parte verde en cursiva */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-raleway font-bold text-[#1e3325] mb-6 leading-tight">
          Un equipo, <span className="text-[#256b3c] italic">una misma causa</span>
        </h1>
        
        {/* Párrafo descriptivo */}
        <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto mb-12 font-raleway">
          Endocrinología, nutrición, dermatología y cardiología trabajando sobre tu metabolismo — más el análisis InBody. Conoce a los especialistas que te acompañan.
        </p>
        
        {/* Imagen principal con bordes redondeados */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-lg border border-black/5 bg-white relative">
          <img 
            src="/equipo-portada.jpg" 
            alt="Equipo Orbital Salud" 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500/FFFFFF/256b3c?text=Foto+del+Equipo' }}
          />
        </div>

      </div>
    </section>
  );
};

export default EquipoHero;