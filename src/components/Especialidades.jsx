import React, { useRef } from 'react';

const Especialidades = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      // 1. Calculamos el ancho exacto de una tarjeta dinámicamente + el gap (gap-6 = 24px)
      const cardWidth = container.firstElementChild.offsetWidth;
      const gap = 24;
      const scrollStep = cardWidth + gap;

      // 2. Vemos dónde estamos y cuál es el tope máximo que se puede scrollear
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // 3. Calculamos la nueva posición
      let newScroll = direction === 'left' 
        ? currentScroll - scrollStep 
        : currentScroll + scrollStep;

      // 4. EL FRENO: Evitamos que se vaya a los bordes blancos infinitos
      if (newScroll <= 0) newScroll = 0;
      if (newScroll >= maxScroll) newScroll = maxScroll;

      // 5. Usamos scrollTo (ir a posición exacta) en lugar de scrollBy (sumar a lo ciego)
      container.scrollTo({ 
        left: newScroll, 
        behavior: 'smooth' 
      });
    }
  };

  const especialidades = [
    {
      id: 1,
      titulo: "Endocrinología",
      subtitulo: "ADULTOS Y ADOLESCENTES",
      descripcion: "El corazón de Orbital Salud. Diagnóstico y tratamiento de diabetes, tiroides, obesidad y desórdenes hormonales — siempre buscando la causa metabólica de fondo, no solo el síntoma.",
      etiquetas: ["Diabetes", "Tiroides", "Obesidad", "Resistencia a la insulina"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8c-1.5-2-4-2-5-1s-1.5 4-1 6 3 4 5 3a2 2 0 013 0c2 1 4.5 1 5-3s.5-5-1-6-3.5-1-5 1c-.5.5-1 .5-1 0z" />
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Endocrinología Pediátrica",
      subtitulo: "NIÑOS Y ADOLESCENTES",
      descripcion: "Cuidamos el crecimiento y el metabolismo desde temprano: talla baja, pubertad adelantada, obesidad infantil y diabetes en los más chicos, con un enfoque preventivo.",
      etiquetas: ["Crecimiento", "Pubertad", "Obesidad infantil", "Diabetes"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0" />
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Nutrición",
      subtitulo: "CON EVALUACIÓN INBODY INCLUIDA",
      descripcion: "Planes de alimentación personalizados según tu composición corporal real, orientados a resultados sostenibles en el tiempo — nada de dietas extremas ni temporales.",
      etiquetas: ["Plan personalizado", "InBody", "Seguimiento"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10a8 8 0 0016 0H4zm2 8h12" />
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Dermatología",
      subtitulo: "PIEL Y HORMONAS",
      descripcion: "La piel refleja tu equilibrio hormonal. Tratamos acné, caída del cabello y manchas relacionadas con desórdenes metabólicos y endocrinos, no solo de forma estética.",
      etiquetas: ["Acné hormonal", "Caída de cabello", "Manchas"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-1.5 0-2.5 1-2.5 2.5V8c0 1.5-1 2.5-2.5 2.5C8.5 10.5 9.5 11.5 9.5 13v1.5c0 1.5 1 2.5 2.5 2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10c0-1.5 1-2.5 2.5-2.5" />
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Cardiología",
      subtitulo: "PREVENCIÓN CARDIOVASCULAR",
      descripcion: "Cuidamos tu corazón frente al riesgo que traen la diabetes, la obesidad y el síndrome metabólico, con evaluación y prevención pensadas a largo plazo.",
      etiquetas: ["Presión arterial", "Colesterol", "Riesgo cardiovascular"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Bioimpedancia InBody",
      subtitulo: "INCLUIDO EN TUS CONSULTAS",
      descripcion: "Análisis de grasa, músculo, agua y grasa visceral con precisión médica en menos de un minuto. Incluido sin costo en Endocrinología y Nutrición.",
      etiquetas: ["% Grasa", "Masa muscular", "Grasa visceral"],
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-6v2m-3-2h6" />
        </svg>
      )
    }
  ];

  return (
    <section id="especialidades" className="relative bg-[#efe8d8] py-20 md:py-28 overflow-hidden">
      
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        
        {/* Cabecera ajustada con el título un poco más pequeño */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-sans">
            Especialidades
          </span>
          {/* Se redujo el tamaño de texto a 32px en móvil y 40px en desktop */}
          <h2 className="text-[32px] md:text-[40px] font-serif font-semibold text-os-ink mb-4 leading-tight">
            Todo tu metabolismo, <span className="text-[#256b3c] italic">en un solo equipo</span>
          </h2>
          <p className="text-[#6b7280] text-[16px] font-sans">
            Cinco especialidades. Un mismo objetivo: tu balance metabólico y hormonal.
          </p>
        </div>

        {/* Contenedor Carrusel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
        >
          {especialidades.map((item) => (
            <div 
              key={item.id} 
              // Se cambió hover:bg-[#256b3c] a hover:bg-[#2e4b34]
              className="group bg-white hover:bg-[#2e4b34] transition-colors duration-300 cursor-pointer rounded-[24px] p-8 md:p-10 text-left shadow-sm border border-black/5 flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              {/* Ícono */}
              <div className="bg-[#2d4b35] group-hover:bg-white text-white group-hover:text-[#2e4b34] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300">
                {item.icono}
              </div>
              
              {/* Textos */}
              <h3 className="font-serif text-[22px] text-os-ink group-hover:text-white mb-1 font-bold transition-colors duration-300">
                {item.titulo}
              </h3>
              <p className="text-[#8a9096] group-hover:text-white/80 text-[10px] font-bold uppercase tracking-wider mb-4 font-sans transition-colors duration-300">
                {item.subtitulo}
              </p>
              <p className="text-[#4a5056] group-hover:text-white/90 text-[14px] leading-[1.65] font-sans flex-grow transition-colors duration-300">
                {item.descripcion}
              </p>

              {/* Etiquetas / Píldoras */}
              <div className="flex flex-wrap gap-2 mt-8">
                {item.etiquetas.map((etiqueta, i) => (
                  <span 
                    key={i} 
                    className="bg-[#F1F2F3] group-hover:bg-white/20 text-[#4a5056] group-hover:text-white px-3 py-1.5 rounded-full text-[11px] font-semibold font-sans transition-colors duration-300"
                  >
                    {etiqueta}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controles y Botón Final */}
        <div className="flex flex-col items-center mt-4">
          
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-os-ink"
              aria-label="Anterior especialidad"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-os-ink"
              aria-label="Siguiente especialidad"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <a href="/especialidades" className="border border-[#2d4b35] text-[#2d4b35] px-8 py-3.5 rounded-full font-semibold hover:bg-[#2d4b35] hover:text-white transition-colors font-sans text-[14px]">
            Ver todas las especialidades
          </a>
        </div>

      </div>
    </section>
  );
};

export default Especialidades;