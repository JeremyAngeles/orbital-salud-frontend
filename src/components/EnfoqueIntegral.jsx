import React from 'react';

const EnfoqueIntegral = () => {
  return (
    <section className="bg-os-beige py-24 lg:py-36 overflow-hidden relative">
      
      {/* ELIMINAMOS TODAS LAS ONDAS AQUÍ. 
          El Hero es beige, esta sección es beige, no necesitamos separador. */}
      
      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-orbit {
            animation: orbit 45s linear infinite;
          }
          .animate-counter-orbit {
            animation: counter-orbit 45s linear infinite;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Lado Izquierdo: Textos y Botones */}
        <div className="max-w-xl z-10">
          <span className="text-[#bba488] font-bold text-[11px] tracking-[0.25em] uppercase mb-5 block font-sans">
            No somos un consultorio tradicional
          </span>
          
          <h2 className="text-5xl lg:text-[60px] leading-[1.1] mb-6 font-serif text-os-dark">
            <span className="font-bold">Tu cuerpo </span> 
            <span className="italic text-[#a68a61]">no funciona por partes</span>
          </h2>
          
          <p className="text-os-ink text-[17px] leading-relaxed mb-8 max-w-[480px] font-sans font-medium">
            Un solo equipo de endocrinología, nutrición, dermatología y cardiología, sobre la misma causa metabólica y hormonal — de la infancia a la adultez.
          </p>
          
          <a href="#enfoque" className="inline-flex items-center gap-2 bg-os-dark hover:bg-os-medium text-os-beige px-8 py-3.5 rounded-full text-[16px] font-semibold transition-colors font-sans shadow-md mb-10">
            Conoce el enfoque integral <span className="text-xl leading-none">&rarr;</span>
          </a>
          
          {/* Etiquetas Blancas (Píldoras) */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div className="bg-white text-os-dark px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm font-sans font-semibold text-[13px] border border-black/5">
              <svg className="w-4 h-4 text-os-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              Un solo equipo, un mismo caso
            </div>
            <div className="bg-white text-os-dark px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm font-sans font-semibold text-[13px] border border-black/5">
              <svg className="w-4 h-4 text-os-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              De la infancia a la adultez
            </div>
            <div className="bg-white text-os-dark px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm font-sans font-semibold text-[13px] border border-black/5">
              <svg className="w-4 h-4 text-os-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              Tratamos la causa, no el síntoma
            </div>
          </div>
        </div>

        {/* Lado Derecho: Diagrama Circular (Orbital) */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center scale-90 sm:scale-100 origin-center">
            
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-[#cbbca9] z-0 animate-[spin_60s_linear_infinite]"></div>
            
            <div className="absolute w-[150px] h-[150px] bg-os-dark rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center p-4">
              <span className="text-white font-serif font-bold text-xl leading-none">Orbital</span>
              <span className="text-[#a68a61] text-[8px] tracking-[0.3em] uppercase mb-2">Salud</span>
              <p className="text-white font-sans text-[11px] leading-tight font-medium mt-1">Tu salud,<br/>un solo equipo</p>
            </div>

            <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] z-30 animate-orbit">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#cbbca9]"></div>

              {/* Top: Endocrinología */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-counter-orbit flex flex-col items-center">
                  <div className="bg-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-os-dark border border-black/5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 8a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8H8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8c2.5 0 5.5 8 8 8" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 8c-2.5 0-5.5 8-8 8" /></svg>
                  </div>
                  <span className="absolute top-[64px] text-os-dark font-sans font-bold text-[13px] whitespace-nowrap">Endocrinología</span>
                </div>
              </div>

              {/* Bottom: Dermatología */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-counter-orbit flex flex-col items-center">
                  <div className="bg-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-os-dark border border-black/5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" /></svg>
                  </div>
                  <span className="absolute top-[64px] text-os-dark font-sans font-bold text-[13px] whitespace-nowrap">Dermatología</span>
                </div>
              </div>

              {/* Left: Cardiología */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-counter-orbit flex flex-col items-center">
                  <div className="bg-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-os-dark border border-black/5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h5l2.5-4 4 9 2.5-4h4" /></svg>
                  </div>
                  <span className="absolute top-[64px] text-os-dark font-sans font-bold text-[13px] whitespace-nowrap">Cardiología</span>
                </div>
              </div>

              {/* Right: Nutrición */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="animate-counter-orbit flex flex-col items-center">
                  <div className="bg-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-os-dark border border-black/5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-4.5-4.5M12 19.5l4.5-4.5m-1.5-6a4.5 4.5 0 10-6 0v3h6v-3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15h15" /></svg>
                  </div>
                  <span className="absolute top-[64px] text-os-dark font-sans font-bold text-[13px] whitespace-nowrap">Nutrición</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnfoqueIntegral;