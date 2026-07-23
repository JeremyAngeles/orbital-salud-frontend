import React from 'react';

const Especialidades = () => {
  const especialidades = [
    {
      id: 1,
      titulo: "Endocrinología",
      descripcion: "Diabetes, tiroides, obesidad, hormonas.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8H8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8c2.5 0 5.5 8 8 8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8c-2.5 0-5.5 8-8 8" />
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Endocrinología Pediátrica",
      descripcion: "Prevención desde la infancia.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H11M17 7V13" />
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Nutrición",
      descripcion: "Planes sostenibles, no dietas temporales.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-4.5-4.5M12 19.5l4.5-4.5m-1.5-6a4.5 4.5 0 10-6 0v3h6v-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15h15" />
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Dermatología",
      descripcion: "La piel también habla de tus hormonas.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" />
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Cardiología",
      descripcion: "Prevención del riesgo cardiovascular.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h5l2.5-4 4 9 2.5-4h4" />
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Bioimpedancia InBody",
      descripcion: "Composición corporal: grasa, músculo y agua en minutos.",
      icono: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="especialidades" className="relative bg-white pt-20 md:pt-24 pb-20 md:pb-28">
      
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="text-os-beige fill-current"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <span className="text-[#a68a61] font-bold text-[10px] md:text-[11px] tracking-[0.25em] uppercase mb-3 md:mb-4 block font-sans">
            Especialidades
          </span>
          <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-os-dark mb-3 md:mb-5 leading-tight">
            Todo tu metabolismo, en un solo<br className="hidden md:block" /> equipo
          </h2>
          <p className="text-os-ink text-[14px] md:text-[17px] font-sans font-medium px-2">
            Cinco especialidades. Un mismo objetivo: tu balance metabólico y hormonal.
          </p>
        </div>

        {/* AQUÍ ESTÁ LA MAGIA: grid-cols-2 (para móvil) y md:grid-cols-3 (para desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {especialidades.map((item) => (
            <div 
              key={item.id} 
              // Puse paddings mucho más pequeños en móvil (p-4) para que la caja no explote, y se agranda en PC (md:p-10)
              className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-10 text-center shadow-md hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border border-black/5 group flex flex-col items-center"
            >
              {/* Ícono más pequeñito en celular */}
              <div className="bg-os-dark w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl mx-auto flex items-center justify-center text-white mb-3 md:mb-6 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
                {item.icono}
              </div>
              
              {/* Textos ajustados con leading-tight para que si caen en 2 líneas no se vean feos */}
              <h3 className="font-serif text-[15px] sm:text-[17px] md:text-2xl text-os-dark mb-1.5 md:mb-3 font-bold leading-tight">
                {item.titulo}
              </h3>
              <p className="text-os-ink text-[11.5px] sm:text-[13px] md:text-[14px] leading-snug md:leading-relaxed font-sans">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <button className="border border-os-dark text-os-dark px-6 md:px-10 py-3 md:py-3.5 rounded-full font-semibold hover:bg-os-dark hover:text-os-beige transition-colors font-sans text-[13px] md:text-[15px]">
            Ver todas las especialidades
          </button>
        </div>

      </div>
    </section>
  );
};

export default Especialidades;