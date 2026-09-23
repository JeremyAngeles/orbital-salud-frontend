import React, { useState } from 'react';

const ResultadosReales = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCase, setActiveCase] = useState(0);
  
  // Nuevo estado para saber hacia dónde deslizar la animación
  const [direction, setDirection] = useState('next');

  // Datos extraídos exactamente de tus imágenes
  const cases = [
    {
      tag: "CASO 1 - PROGRAMA METABÓLICO DE PESO",
      name: "Paciente E.H.",
      details: "47 años · 1.70 m · Endocrinología + Nutrición",
      stats: [
        { label: "Peso", value: "98 kg → 79 kg", highlight: "(-19 kg · -19%)" },
        { label: "IMC", value: "33.9 → 27.3" },
        { label: "Grasa corporal (InBody)", value: "34% → 24%" },
        { label: "Masa muscular", value: "Mantenida" },
        { label: "Duración", value: "24 semanas" }
      ],
      causa: "Resistencia a la insulina + prediabetes",
      tratamiento: "plan nutricional personalizado + tratamiento médico supervisado (análogo de GLP-1 cuando estuvo indicado) + seguimiento con InBody.",
      quote: `"Había intentado mil dietas. Recién cuando encontraron por qué mi cuerpo no bajaba, todo cambió."`,
      imgAntes: "/caso1_antes.jpg",
      imgDespues: "/caso1_despues.jpg"
    },
    {
      tag: "CASO 2 - PROGRAMA METABÓLICO DE PESO",
      name: "Paciente M.R.",
      details: "39 años · 1.58 m · Endocrinología + Nutrición",
      stats: [
        { label: "Peso", value: "82 kg → 66 kg", highlight: "(-16 kg · -20%)" },
        { label: "IMC", value: "32.8 → 26.4" },
        { label: "Grasa corporal (InBody)", value: "38% → 28%" },
        { label: "Masa muscular", value: "Mantenida" },
        { label: "Duración", value: "26 semanas" }
      ],
      causa: "Hipotiroidismo subclínico + resistencia a la insulina",
      tratamiento: "manejo de tiroides + plan nutricional + tratamiento médico supervisado (análogo de GLP-1) + seguimiento con InBody.",
      quote: `"Me trataron la tiroides y la insulina, no solo el peso. Por eso esta vez sí se mantuvo."`,
      imgAntes: "/caso2_antes.jpg",
      imgDespues: "/caso2_despues.jpg"
    }
  ];

  const currentCase = cases[activeCase];

  const handlePrev = () => {
    setDirection('prev'); // Indicamos que deslice desde la izquierda
    setActiveCase((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
    setSliderPos(50);
  };

  const handleNext = () => {
    setDirection('next'); // Indicamos que deslice desde la derecha
    setActiveCase((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
    setSliderPos(50);
  };

  return (
    <section id="resultados" className="w-full font-raleway pb-16 overflow-hidden">
      
      {/* Estilos para el desplazamiento horizontal de lado a lado */}
      <style>
        {`
          @keyframes slideInNext {
            0% { opacity: 0; transform: translateX(40%); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInPrev {
            0% { opacity: 0; transform: translateX(-40%); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-next {
            animation: slideInNext 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          .animate-slide-prev {
            animation: slideInPrev 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      <div className="max-w-[1050px] mx-auto px-6 lg:px-8 text-center mb-10 pt-16 border-t border-gray-200">
        <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
          RESULTADOS REALES
        </span>
        <h2 className="font-raleway text-[34px] md:text-[42px] text-[#1e3325] mb-3 font-bold leading-tight">
          Antes y después de <span className="font-raleway text-[#256b3c] italic">nuestros <br className="hidden md:block"/>pacientes</span>
        </h2>
        <p className="font-raleway text-[#6b7280] text-[16px] max-w-2xl mx-auto mb-10">
          No es solo peso: recuperamos tu metabolismo. Mira cómo cambia el cuerpo cuando se trata la causa de fondo.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 mb-8">
        
        {/* Contenedor estático con overflow hidden para que la animación no se salga del borde */}
        <div className="bg-[#112318] rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-[#294B37] flex flex-col lg:flex-row min-h-[500px]">
          
          {/* Aquí aplicamos la clase dinámica dependiendo de la dirección (next o prev) */}
          <div 
            key={activeCase} 
            className={`flex flex-col lg:flex-row w-full ${direction === 'next' ? 'animate-slide-next' : 'animate-slide-prev'}`}
          >
            
            {/* Columna Izquierda: Textos */}
            <div className="p-6 lg:p-10 lg:w-[50%] flex flex-col justify-center text-white">
              <span className="font-raleway text-[#4ADE80] text-[10px] font-bold tracking-widest uppercase mb-2 block opacity-90">
                {currentCase.tag}
              </span>
              <h3 className="font-raleway text-[30px] font-bold text-white mb-1">
                {currentCase.name}
              </h3>
              <p className="font-raleway text-[#A0AAB2] text-[12px] mb-6">
                {currentCase.details}
              </p>

              <div className="space-y-3 mb-6 text-[13px]">
                {currentCase.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-end border-b border-[#294B37]/50 pb-1.5">
                    <span className="font-raleway text-[#A0AAB2]">{stat.label}</span>
                    <span className="font-raleway font-bold text-white text-right">
                      {stat.value} {stat.highlight && <span className="font-raleway text-[#4ADE80] ml-1">{stat.highlight}</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0A160F] p-4 rounded-xl border border-[#294B37] mb-5">
                <span className="font-raleway text-[9px] font-bold tracking-widest text-[#4ADE80] uppercase block mb-1.5 opacity-80">
                  CAUSA DE FONDO DETECTADA
                </span>
                <p className="font-raleway text-white font-bold text-[13px]">
                  {currentCase.causa}
                </p>
              </div>

              <p className="font-raleway text-[12px] text-[#A0AAB2] leading-relaxed mb-5">
                <strong className="font-raleway text-white">Tratamiento:</strong> {currentCase.tratamiento}
              </p>

              <blockquote className="font-raleway italic text-[13px] text-white border-l-[3px] border-[#4ADE80] pl-4 py-1 opacity-90">
                {currentCase.quote}
              </blockquote>
            </div>

            {/* Columna Derecha: Imagen Slider */}
            <div className="lg:w-[50%] relative bg-[#EAE6DF] min-h-[400px] lg:min-h-full select-none flex items-center justify-center overflow-hidden">
              <img 
                src={currentCase.imgDespues} 
                alt="Paciente Después" 
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = 'https://picsum.photos/800/1000?random=2' }}
              />
              <img 
                src={currentCase.imgAntes} 
                alt="Paciente Antes" 
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                onError={(e) => { e.target.src = 'https://picsum.photos/800/1000?random=1' }}
              />
              
              <div className="font-raleway absolute top-6 left-6 bg-[#6b7280]/80 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-1.5 rounded-full z-10 uppercase tracking-wider">
                ANTES
              </div>
              <div className="font-raleway absolute top-6 right-6 bg-[#6b7280]/80 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-1.5 rounded-full z-10 uppercase tracking-wider">
                DESPUÉS
              </div>

              <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ left: `calc(${sliderPos}% - 2px)` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl pointer-events-none">
                  <svg className="w-5 h-5 text-[#112318]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 4 4 4m8-8l4 4-4 4"></path>
                  </svg>
                </div>
              </div>

              <input 
                type="range" 
                min="0" max="100" 
                value={sliderPos} 
                onChange={(e) => setSliderPos(e.target.value)} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" 
              />
            </div>

          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#256b3c] hover:text-white transition-colors hover:border-[#256b3c]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="flex gap-2">
            {cases.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => { 
                  // Si hace clic en un punto, determinamos si va para adelante o atrás
                  setDirection(idx > activeCase ? 'next' : 'prev');
                  setActiveCase(idx); 
                  setSliderPos(50); 
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeCase === idx ? 'w-8 bg-[#256b3c]' : 'w-2.5 bg-gray-300'}`}
              />
            ))}
          </div>

          <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#256b3c] hover:text-white transition-colors hover:border-[#256b3c]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="font-raleway text-[11px] text-[#8a9096] italic text-center max-w-[850px] leading-relaxed">
            En Orbital Salud protegemos la identidad de nuestros pacientes; los avatares son ilustraciones representativas. Los casos mostrados son ejemplos ilustrativos del tipo de resultados; los resultados reales varían según cada persona y su evaluación médica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultadosReales;