import React, { useState, useEffect } from 'react';

const MetodoOrbital = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Las 5 etapas del Método Orbital basadas en tus capturas
  const steps = [
    {
      num: 1,
      title: "Evaluación inicial",
      desc: "Conversamos sobre tu historia, hábitos, estilo de vida y objetivos.",
      img: "/doctora_principal.jpg"
    },
    {
      num: 2,
      title: "Laboratorio y bioimpedancia",
      desc: "Medimos lo que importa, no solo el peso. Incluye análisis de laboratorio y evaluación de composición corporal con InBody.",
      img: "/caso2_despues.jpg"
    },
    {
      num: 3,
      title: "Revisión médica",
      desc: "El equipo analiza tus resultados para definir el diagnóstico y el mejor plan de tratamiento.",
      img: "/caso1_despues.jpg"
    },
    {
      num: 4,
      title: "Inicio del plan",
      desc: "Diseñamos un plan personalizado, con metas claras y realistas, que se adapta a tu estilo de vida.",
      img: "/caso1_antes.jpg"
    },
    {
      num: 5,
      title: "Seguimiento",
      desc: "Controles periódicos y ajustes en equipo para asegurar tu progreso a largo plazo.",
      img: "/caso2_antes.jpg"
    }
  ];

  // Desplazamiento automático (auto-slide) cada 4 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  // En PC mostramos 3 tarjetas a la vez, calculamos el índice inicial seguro (máximo 2)
  const desktopStartIndex = Math.min(currentIndex, steps.length - 3);

  return (
    <section className="w-full font-raleway py-20 bg-white overflow-hidden">
      
      {/* Animación suave de transición */}
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateX(15px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-slide {
            animation: fadeInSlide 0.6s ease-in-out forwards;
          }
        `}
      </style>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center mb-12">
        <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
          EL MÉTODO ORBITAL
        </span>
        <h2 className="font-raleway text-[32px] md:text-[44px] text-[#1e3325] font-bold leading-tight max-w-3xl mx-auto">
          Todo tu caso, coordinado en un <span className="font-raleway text-[#256b3c] italic">mismo lugar</span>
        </h2>
      </div>

      <div 
        className="max-w-[1200px] mx-auto px-4 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* VISTA EN CELULAR: Muestra 1 tarjeta a la vez y se desplaza sola por las 5 */}
        <div className="block md:hidden mb-8">
          <div key={currentIndex} className="animate-fade-slide bg-white rounded-[28px] p-6 shadow-[0_20px_50px_rgba(17,35,24,0.12)] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="font-raleway w-7 h-7 rounded-full bg-[#112318] text-white text-[12px] font-bold flex items-center justify-center shrink-0">
                  {steps[currentIndex].num}
                </div>
                <h3 className="font-raleway text-[18px] font-bold text-[#1e3325]">
                  {steps[currentIndex].title}
                </h3>
              </div>
              <p className="font-raleway text-[#6b7280] text-[13.5px] leading-relaxed mb-6">
                {steps[currentIndex].desc}
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden h-[210px] bg-gray-100 border border-gray-100">
              <img 
                src={steps[currentIndex].img} 
                alt={steps[currentIndex].title} 
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = 'https://picsum.photos/600/400?random=' + steps[currentIndex].num }}
              />
            </div>
          </div>
        </div>

        {/* VISTA EN PC / TABLET: Muestra 3 tarjetas en fila con la sombra elegante */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-10">
          {steps.slice(desktopStartIndex, desktopStartIndex + 3).map((step, idx) => (
            <div 
              key={desktopStartIndex + idx} 
              className="animate-fade-slide bg-white rounded-[28px] p-6 shadow-[0_20px_50px_rgba(17,35,24,0.12)] border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-raleway w-7 h-7 rounded-full bg-[#112318] text-white text-[12px] font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-raleway text-[18px] font-bold text-[#1e3325]">
                    {step.title}
                  </h3>
                </div>
                <p className="font-raleway text-[#6b7280] text-[13.5px] leading-relaxed mb-6 min-h-[48px]">
                  {step.desc}
                </p>
              </div>
              <div className="rounded-[20px] overflow-hidden h-[210px] bg-gray-100 border border-gray-100">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.target.src = 'https://picsum.photos/600/400?random=' + step.num }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Paginación (Flechas y 5 puntos indicadores) */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button 
            onClick={handlePrev} 
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#256b3c] hover:text-white hover:border-[#256b3c] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#256b3c]' : 'w-2.5 bg-gray-300'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#256b3c] hover:text-white hover:border-[#256b3c] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Botón Inferior: Agendar mi evaluación */}
        <div className="flex justify-center">
          <a 
            href="/contacto" 
            className="font-raleway bg-[#256b3c] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#1f5a33] transition-all shadow-[0_12px_24px_-10px_rgba(37,107,60,0.5)] flex items-center justify-center gap-2.5 text-[15px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.399A7.968 7.968 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.121 4.094L.133 15.867l3.905-1.02A7.95 7.95 0 0 0 8 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.601zM8 14.653a6.59 6.59 0 0 1-3.364-1.22l-.241-.143-2.502.655.666-2.438-.157-.25A6.574 6.574 0 0 1 1.408 8c0-3.626 2.951-6.577 6.592-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577zm3.46-4.736c-.19-.095-1.121-.553-1.295-.616-.174-.063-.301-.095-.428.095-.127.19-.489.616-.599.742-.111.127-.222.143-.413.048-.19-.095-.8-.295-1.523-.935-.562-.498-.941-1.111-1.052-1.302-.111-.19-.012-.293.083-.388.084-.084.19-.222.285-.332.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.332-.048-.095-.428-1.032-.587-1.413-.156-.37-.313-.32-.428-.326-.111-.006-.238-.006-.365-.006-.127 0-.332.048-.506.238-.174.19-.665.65-.665 1.587 0 .936.681 1.841.776 1.968.095.127 1.341 2.049 3.242 2.868.452.194.805.31 1.08.397.453.144.865.123 1.19.075.364-.054 1.121-.458 1.279-.901.159-.443.159-.822.111-.901-.048-.079-.174-.127-.365-.222z"/>
            </svg>
            Agendar mi evaluación
          </a>
        </div>

      </div>
    </section>
  );
};

export default MetodoOrbital;