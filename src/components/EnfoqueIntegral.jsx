import React from 'react';

const EnfoqueIntegral = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden relative">
      
      {/* === ESTILOS MATEMÁTICOS A PRUEBA DE FALLOS === */}
      <style>
        {`
          /* Pausar al pasar el mouse */
          .orbit-container:hover .orbita,
          .orbit-container:hover .contra-orbita {
            animation-play-state: paused !important;
          }

          /* NODO 1: InBody (36deg - Arriba Derecha) */
          @keyframes orbit-1 { from { transform: rotate(36deg); } to { transform: rotate(396deg); } }
          @keyframes counter-1 { from { transform: rotate(-36deg); } to { transform: rotate(-396deg); } }

          /* NODO 2: Endocrinología (108deg - Abajo Derecha) */
          @keyframes orbit-2 { from { transform: rotate(108deg); } to { transform: rotate(468deg); } }
          @keyframes counter-2 { from { transform: rotate(-108deg); } to { transform: rotate(-468deg); } }

          /* NODO 3: Nutrición (180deg - Abajo Centro) */
          @keyframes orbit-3 { from { transform: rotate(180deg); } to { transform: rotate(540deg); } }
          @keyframes counter-3 { from { transform: rotate(-180deg); } to { transform: rotate(-540deg); } }

          /* NODO 4: Dermatología (252deg - Abajo Izquierda) */
          @keyframes orbit-4 { from { transform: rotate(252deg); } to { transform: rotate(612deg); } }
          @keyframes counter-4 { from { transform: rotate(-252deg); } to { transform: rotate(-612deg); } }

          /* NODO 5: Cardiología (324deg - Arriba Izquierda) */
          @keyframes orbit-5 { from { transform: rotate(324deg); } to { transform: rotate(684deg); } }
          @keyframes counter-5 { from { transform: rotate(-324deg); } to { transform: rotate(-684deg); } }

          /* Clases base para centrado absoluto */
          .nodo-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none; /* No bloquea clicks internos */
          }
          .nodo-content {
            position: absolute;
            top: -60px; /* Sube exactamente la mitad de su altura */
            left: calc(50% - 60px); /* Centrado horizontal perfecto */
            width: 120px;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            pointer-events: auto; /* Reactiva interacciones en el ícono */
          }
        `}
      </style>

      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* === LADO IZQUIERDO: Textos y Botones === */}
        <div className="max-w-xl z-10">
          <span className="text-[#8a9096] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block font-sans">
            No somos un consultorio tradicional
          </span>
          
          <h2 className="text-[40px] lg:text-[48px] leading-[1.1] mb-5 font-serif font-semibold text-os-ink">
            Tu cuerpo <span className="text-[#256b3c] italic">no funciona por partes</span>
          </h2>
          
          <p className="text-[#4a5056] text-[17.5px] leading-[1.6] mb-8 max-w-[460px] font-sans">
            Un solo equipo de endocrinología, nutrición, dermatología y cardiología, sobre la misma causa metabólica y hormonal — de la infancia a la adultez.
          </p>
          
          <a href="#enfoque" className="inline-flex items-center justify-center gap-2 bg-[#256b3c] hover:bg-[#1f5a33] text-white px-7 py-[14px] rounded-full text-[15px] font-bold transition-all shadow-[0_12px_24px_-10px_rgba(37,107,60,0.5)] font-sans mb-10">
            Conoce el enfoque integral <span>&rarr;</span>
          </a>
          
          {/* Etiquetas Blancas (Píldoras) */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-[#4a5056] px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] font-sans font-medium text-[13.5px] border border-gray-100">
              <svg className="w-3.5 h-3.5 text-[#256b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              Un solo equipo, un mismo caso
            </div>
            <div className="bg-white text-[#4a5056] px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] font-sans font-medium text-[13.5px] border border-gray-100">
              <svg className="w-3.5 h-3.5 text-[#256b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              De la infancia a la adultez
            </div>
            <div className="bg-white text-[#4a5056] px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] font-sans font-medium text-[13.5px] border border-gray-100">
              <svg className="w-3.5 h-3.5 text-[#256b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              Tratamos la causa, no el síntoma
            </div>
          </div>
        </div>

        {/* === LADO DERECHO: Diagrama Circular (Orbital) === */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full orbit-container">
          
          <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center scale-95 sm:scale-100 origin-center z-30">
            
            {/* Órbita interior decorativa (estática y más pequeña) */}
            <div className="absolute w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-full border border-dashed border-[#c5c9c6]/80 z-0"></div>
            
            {/* Núcleo Central: Ícono Persona Verde Oscuro */}
            <div className="absolute w-[105px] h-[105px] bg-[#2d4b35] rounded-full shadow-[0_15px_30px_-5px_rgba(45,75,53,0.5)] z-20 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>

            {/* Círculo Principal Punteado (Estático) */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-[#c5c9c6] z-10 pointer-events-none"></div>


            {/* ========================================================
                NODO 1: InBody (Arriba Derecha - 36°)
            ======================================================== */}
            <div className="nodo-wrapper orbita z-30" style={{ animation: 'orbit-1 45s linear infinite' }}>
              <div className="nodo-content contra-orbita group" style={{ animation: 'counter-1 45s linear infinite' }}>
                <div className="bg-white w-[48px] h-[48px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2d4b35] border border-gray-100 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-6v2m-3-2h6" />
                  </svg>
                </div>
                <span className="text-[#2d4b35] font-sans font-bold text-[12px] whitespace-nowrap mt-2.5">InBody</span>
              </div>
            </div>

            {/* ========================================================
                NODO 2: Endocrinología (Abajo Derecha - 108°)
            ======================================================== */}
            <div className="nodo-wrapper orbita z-30" style={{ animation: 'orbit-2 45s linear infinite' }}>
              <div className="nodo-content contra-orbita group" style={{ animation: 'counter-2 45s linear infinite' }}>
                <div className="bg-white w-[48px] h-[48px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2d4b35] border border-gray-100 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8c-1.5-2-4-2-5-1s-1.5 4-1 6 3 4 5 3a2 2 0 013 0c2 1 4.5 1 5-3s.5-5-1-6-3.5-1-5 1c-.5.5-1 .5-1 0z" />
                  </svg>
                </div>
                <span className="text-[#2d4b35] font-sans font-bold text-[12px] whitespace-nowrap mt-2.5">Endocrinología</span>
              </div>
            </div>

            {/* ========================================================
                NODO 3: Nutrición (Abajo Centro - 180°)
            ======================================================== */}
            <div className="nodo-wrapper orbita z-30" style={{ animation: 'orbit-3 45s linear infinite' }}>
              <div className="nodo-content contra-orbita group" style={{ animation: 'counter-3 45s linear infinite' }}>
                <div className="bg-white w-[48px] h-[48px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2d4b35] border border-gray-100 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10a8 8 0 0016 0H4zm2 8h12" />
                  </svg>
                </div>
                <span className="text-[#2d4b35] font-sans font-bold text-[12px] whitespace-nowrap mt-2.5">Nutrición</span>
              </div>
            </div>

            {/* ========================================================
                NODO 4: Dermatología (Abajo Izquierda - 252°)
            ======================================================== */}
            <div className="nodo-wrapper orbita z-30" style={{ animation: 'orbit-4 45s linear infinite' }}>
              <div className="nodo-content contra-orbita group" style={{ animation: 'counter-4 45s linear infinite' }}>
                <div className="bg-white w-[48px] h-[48px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2d4b35] border border-gray-100 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-1.5 0-2.5 1-2.5 2.5V8c0 1.5-1 2.5-2.5 2.5C8.5 10.5 9.5 11.5 9.5 13v1.5c0 1.5 1 2.5 2.5 2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10c0-1.5 1-2.5 2.5-2.5" />
                  </svg>
                </div>
                <span className="text-[#2d4b35] font-sans font-bold text-[12px] whitespace-nowrap mt-2.5">Dermatología</span>
              </div>
            </div>

            {/* ========================================================
                NODO 5: Cardiología (Arriba Izquierda - 324°)
            ======================================================== */}
            <div className="nodo-wrapper orbita z-30" style={{ animation: 'orbit-5 45s linear infinite' }}>
              <div className="nodo-content contra-orbita group" style={{ animation: 'counter-5 45s linear infinite' }}>
                <div className="bg-white w-[48px] h-[48px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2d4b35] border border-gray-100 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <span className="text-[#2d4b35] font-sans font-bold text-[12px] whitespace-nowrap mt-2.5">Cardiología</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EnfoqueIntegral;