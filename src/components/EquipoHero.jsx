import React from 'react';

const EquipoHero = () => {
  return (
    <section className="w-full pt-16 md:pt-24 bg-[#F9F6F0] font-raleway relative z-10 overflow-hidden">
      
      <div className="max-w-[1050px] mx-auto px-6 text-center pb-6 md:pb-8 relative z-20">
        
        {/* Subtítulo superior */}
        <span className="text-[#A68A61] font-bold text-[13px] tracking-[0.2em] uppercase mb-4 block font-raleway">
          Servicios y equipo
        </span>
        
        {/* Título principal con la parte verde en cursiva */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-raleway font-bold text-[#1e3325] mb-6 leading-tight">
          Un equipo, <span className="text-[#256b3c] italic">una misma causa</span>
        </h1>
        
        {/* Párrafo descriptivo */}
        <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto font-raleway">
          Endocrinología, nutrición, dermatología y cardiología trabajando sobre tu metabolismo — más el análisis InBody. Conoce a los especialistas que te acompañan.
        </p>
        
      </div>

      {/* === ONDA INFERIOR CORREGIDA === */}
      {/* Se eliminaron márgenes que la ocultaban, ahora se aprecia completa */}
      <div className="w-full overflow-hidden leading-none z-0 relative">
        <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[90px]" preserveAspectRatio="none">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* === ZONA BLANCA E IMAGEN === */}
      {/* Se agregó un poco de padding top (pt-6 md:pt-10) para separar la imagen de la onda de forma limpia */}
      <div className="w-full bg-white pb-16 px-6 pt-6 md:pt-10">
        <div className="max-w-[1050px] mx-auto text-center">
          
          {/* Imagen principal con bordes redondeados */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-black/5 bg-white relative z-10">
            <img 
              src="/servicios-equipo.jpg" 
              alt="Equipo Orbital Salud" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500/efe8d8/256b3c?text=Foto+del+Equipo' }}
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default EquipoHero;