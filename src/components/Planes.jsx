import React, { useState, useEffect } from 'react';

const Planes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Los planes y paquetes con sus respectivos textos de imagen
  const planes = [
    {
      badge: "★ RECOMENDADO",
      tag: "PAQUETE DE EVALUACIÓN",
      title: "Evaluación Híbrida",
      subtitle: "1 presencial + 1 virtual",
      price: "S/ 249",
      vigencia: "Vigencia 2 meses",
      imageText: "Evaluación completa para un plan a tu medida.",
      features: [
        "Evaluación presencial con InBody + reevaluación desde casa",
        "Diagnóstico y plan de tratamiento personalizado",
        "Gráficos de progreso en app"
      ],
      img: "/doctora_principal.jpg"
    },
    {
      badge: "",
      tag: "PAQUETE DE EVALUACIÓN",
      title: "Evaluación Presencial",
      subtitle: "1 inicial + 1 reevaluación · presencial",
      price: "S/ 279",
      vigencia: "Vigencia 2 meses",
      imageText: "Tu consulta, con el tiempo y la atención que necesitas.",
      features: [
        "Ambas consultas en consultorio, con examen físico e InBody",
        "Seguimiento de resultados y ajustes",
        "Gráficos de progreso en app"
      ],
      img: "/caso2_despues.jpg"
    },
    {
      badge: "",
      tag: "PAQUETE DE EVALUACIÓN",
      title: "Endocrinología + Nutrición",
      subtitle: "1 endocrino + 1 nutrición · presencial",
      price: "S/ 289",
      vigencia: "Vigencia 2 meses",
      imageText: "Especialistas trabajando juntos por tus resultados.",
      features: [
        "Evaluación metabólica (endocrinología) con InBody",
        "Plan alimentario detallado y personalizado (nutrición)",
        "Gráficos de progreso en app"
      ],
      img: "/caso1_despues.jpg"
    },
    {
      badge: "",
      tag: "PAQUETE DE SEGUIMIENTO",
      title: "Seguimiento Virtual",
      subtitle: "3 consultas virtuales",
      price: "S/ 270",
      vigencia: "Vigencia 6 meses",
      imageText: "Continúa tu tratamiento, cómodo desde casa.",
      features: [
        "Continúa tu tratamiento desde casa",
        "Monitoreo de tu progreso y ajustes del manejo"
      ],
      img: "/caso1_antes.jpg"
    },
    {
      badge: "",
      tag: "PAQUETE DE SEGUIMIENTO",
      title: "Seguimiento Presencial",
      subtitle: "3 consultas presenciales",
      price: "S/ 360",
      vigencia: "Vigencia 6 meses",
      imageText: "Tu control de cerca, en el consultorio.",
      features: [
        "Control en consultorio con evaluación de tu evolución",
        "Ajuste del manejo según tu progreso"
      ],
      img: "/caso2_antes.jpg"
    }
  ];

  // Auto-slide en celular cada 4.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % planes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, planes.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? planes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % planes.length);
  };

  // En PC mostramos 3 tarjetas a la vez
  const desktopStartIndex = Math.min(currentIndex, planes.length - 3);

  return (
    <section id="planes" className="w-full font-raleway py-24 bg-white overflow-hidden">
      
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-slide {
            animation: fadeInSlide 0.6s ease-in-out forwards;
          }
        `}
      </style>

      {/* Cabecera */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center mb-16">
        <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
          CONSULTAS Y PAQUETES
        </span>
        <h2 className="font-raleway text-[34px] md:text-[44px] text-[#1e3325] font-bold leading-tight mb-3">
          Precios claros para cada <br className="hidden md:block"/> momento de tu tratamiento
        </h2>
        <p className="font-raleway text-[#6b7280] text-[15px] max-w-xl mx-auto">
          Desde una consulta puntual hasta el acompañamiento completo — elige la opción que mejor se adapte a tus objetivos.
        </p>
      </div>

      <div 
        className="max-w-[1200px] mx-auto px-4 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* VISTA EN CELULAR: Muestra 1 tarjeta a la vez */}
        <div className="block md:hidden mb-10">
          <div key={currentIndex} className="animate-fade-slide bg-white rounded-[28px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-200 flex flex-col justify-between overflow-hidden relative">
            
            {/* Imagen superior full-width */}
            <div className="relative h-[150px] w-full overflow-hidden">
              <img 
                src={planes[currentIndex].img} 
                alt={planes[currentIndex].title} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent flex items-start p-4">
                <p className="font-raleway text-white text-[13px] font-bold leading-tight drop-shadow-md">
                  {planes[currentIndex].imageText}
                </p>
              </div>
              {planes[currentIndex].badge && (
                <div className="absolute top-3 right-3 bg-[#256b3c] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {planes[currentIndex].badge}
                </div>
              )}
            </div>

            {/* Contenido del Card más compacto */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="font-raleway text-[#8a9096] text-[10px] font-bold tracking-widest uppercase block mb-1">
                  {planes[currentIndex].tag}
                </span>
                <h3 className="font-raleway text-[19px] font-bold text-[#1e3325]">
                  {planes[currentIndex].title}
                </h3>
                <p className="font-raleway text-[#256b3c] text-[12.5px] font-semibold mb-3">
                  {planes[currentIndex].subtitle}
                </p>

                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="font-raleway text-[28px] font-bold text-[#1e3325]">
                    {planes[currentIndex].price}
                  </span>
                </div>
                <span className="font-raleway text-[#8a9096] text-[11.5px] block mb-4 pb-3 border-b border-gray-100">
                  {planes[currentIndex].vigencia}
                </span>

                <ul className="space-y-2.5 mb-6">
                  {planes[currentIndex].features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[12.5px] text-[#4b5563]">
                      <span className="text-[#256b3c] font-bold">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="/contacto" 
                className="font-raleway w-full py-3 rounded-full font-bold text-[13.5px] flex items-center justify-center gap-2 border border-gray-300 text-[#1e3325] hover:bg-[#2E4B34] hover:text-white hover:border-[#2E4B34] transition-all"
              >
                Agendar este paquete →
              </a>
            </div>

          </div>
        </div>

        {/* VISTA EN PC / TABLET: Muestra 3 tarjetas en fila */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {planes.slice(desktopStartIndex, desktopStartIndex + 3).map((plan, idx) => (
            <div 
              key={desktopStartIndex + idx} 
              className="animate-fade-slide bg-white rounded-[28px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-200 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:-translate-y-1"
            >
              {/* Imagen superior full-width */}
              <div className="relative h-[150px] w-full overflow-hidden">
                <img 
                  src={plan.img} 
                  alt={plan.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent flex items-start p-4">
                  <p className="font-raleway text-white text-[13px] font-bold leading-tight drop-shadow-md">
                    {plan.imageText}
                  </p>
                </div>
                {plan.badge && (
                  <div className="absolute top-3 right-3 bg-[#256b3c] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
              </div>

              {/* Contenido del Card más compacto */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-raleway text-[#8a9096] text-[10px] font-bold tracking-widest uppercase block mb-1">
                    {plan.tag}
                  </span>
                  <h3 className="font-raleway text-[19px] font-bold text-[#1e3325]">
                    {plan.title}
                  </h3>
                  <p className="font-raleway text-[#256b3c] text-[12.5px] font-semibold mb-3">
                    {plan.subtitle}
                  </p>

                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-raleway text-[28px] font-bold text-[#1e3325]">
                      {plan.price}
                    </span>
                  </div>
                  <span className="font-raleway text-[#8a9096] text-[11.5px] block mb-4 pb-3 border-b border-gray-100">
                    {plan.vigencia}
                  </span>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[12.5px] text-[#4b5563]">
                        <span className="text-[#256b3c] font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="/contacto" 
                  className="font-raleway w-full py-3 rounded-full font-bold text-[13.5px] flex items-center justify-center gap-2 border border-gray-300 text-[#1e3325] hover:bg-[#2E4B34] hover:text-white hover:border-[#2E4B34] transition-all"
                >
                  Agendar este paquete →
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Controles de Paginación */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button 
            onClick={handlePrev} 
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-[#256b3c] hover:text-white hover:border-[#256b3c] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="flex gap-2">
            {planes.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#256b3c]' : 'w-2.5 bg-gray-300'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-[#256b3c] hover:text-white hover:border-[#256b3c] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Iconos informativos inferiores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200 text-center md:text-left mb-8">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#256b3c] shrink-0">💳</div>
            <div>
              <h5 className="font-raleway font-bold text-[13px] text-[#1e3325]">Pagos seguros</h5>
              <p className="font-raleway text-[11px] text-[#8a9096]">y múltiples medios</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#256b3c] shrink-0">📅</div>
            <div>
              <h5 className="font-raleway font-bold text-[13px] text-[#1e3325]">Agenda en línea</h5>
              <p className="font-raleway text-[11px] text-[#8a9096]">en minutos</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#256b3c] shrink-0">⭐</div>
            <div>
              <h5 className="font-raleway font-bold text-[13px] text-[#1e3325]">Atención personalizada</h5>
              <p className="font-raleway text-[11px] text-[#8a9096]">y sin esperas</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#256b3c] shrink-0">🔒</div>
            <div>
              <h5 className="font-raleway font-bold text-[13px] text-[#1e3325]">Tu información</h5>
              <p className="font-raleway text-[11px] text-[#8a9096]">siempre segura</p>
            </div>
          </div>
        </div>

        {/* Notas legales inferiores */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-[11px] text-[#8a9096] text-center">
          <span>⊙ La reevaluación es una consulta aparte</span>
          <span>⊙ La vigencia inicia desde la primera consulta</span>
          <span>⊙ No incluye medicamentos ni exámenes de laboratorio</span>
        </div>

      </div>
    </section>
  );
};

export default Planes;