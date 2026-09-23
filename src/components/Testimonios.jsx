import React, { useState, useEffect } from 'react';

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Reseñas reales basadas en tu imagen
  const reviews = [
    {
      name: "Kelly Trigoso",
      initial: "K",
      bgColor: "bg-[#6b8e23]",
      time: "Hace un mes",
      text: "Me gustó mucho la atención. Desde que llegas, el personal es muy amable y te hace sentir cómodo. Los médicos son muy profesionales y se toman el tiempo para escuchar y explicar todo con paciencia. He tenido una muy buena experiencia. Sin duda, es un centro de salud en el que confío y que recomendaría a familiares y amigos."
    },
    {
      name: "Silvia Wong",
      initial: "S",
      bgColor: "bg-[#b8860b]",
      time: "Hace un mes",
      text: "Buscaba una Dra que pudiera ayudarme con mi problema de resistencia a la insulina, me recomendaron este centro y desde el inicio supieron entenderme, y guiarme con el tratamiento adecuado para mí. He notado cambios que no los veía en años. Sin duda lo recomendaría."
    },
    {
      name: "Valery Bedón Naveros",
      initial: "V",
      bgColor: "bg-[#4682b4]",
      time: "Hace 3 horas",
      text: "La Dra. Angélica fue muy minuciosa y acertada, me aclaró todas las dudas y brindó indicaciones claras. Me sentí muy cómoda en la consulta y noté el interés en el seguimiento al tratamiento que me brindaron."
    },
    {
      name: "Rosa María Paredes",
      initial: "R",
      bgColor: "bg-[#cd853f]",
      time: "Hace 2 semanas",
      text: "Excelente atención multidisciplinaria. Por fin encontré un lugar donde ven la causa raíz de mi problema hormonal y no solo recetan por encimita. El equipo es increíble."
    }
  ];

  // Desplazamiento automático (auto-slide) cada 4.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // En PC mostramos 3 tarjetas a la vez
  const desktopStartIndex = Math.min(currentIndex, reviews.length - 3);

  return (
    <section className="w-full font-raleway py-24 bg-[#f8f9fa] overflow-hidden">
      
      {/* Animación suave para el cambio en celular */}
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
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center mb-14">
        <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
          TESTIMONIOS
        </span>
        <h2 className="font-raleway text-[32px] md:text-[44px] text-[#1e3325] font-bold leading-tight mb-3">
          Lo que dicen nuestros pacientes
        </h2>
        <p className="font-raleway text-[#6b7280] text-[15px]">
          Reseñas reales de pacientes en Google — con una valoración de <strong className="text-[#1e3325]">5.0★</strong>.
        </p>
      </div>

      <div 
        className="max-w-[1200px] mx-auto px-4 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* VISTA EN CELULAR: Muestra 1 reseña a la vez */}
        <div className="block md:hidden mb-8">
          <div key={currentIndex} className="animate-fade-slide bg-white rounded-[24px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between min-h-[320px]">
            <div>
              {/* Autor y Logo de Google */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${reviews[currentIndex].bgColor} text-white font-bold flex items-center justify-center text-[16px]`}>
                    {reviews[currentIndex].initial}
                  </div>
                  <div>
                    <h4 className="font-raleway font-bold text-[15px] text-[#1e3325]">
                      {reviews[currentIndex].name}
                    </h4>
                    <span className="font-raleway text-[12px] text-[#8a9096]">1 opinión</span>
                  </div>
                </div>
                {/* Icono Google SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.32 7.23 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 11.7s.43 3.58 1.19 5.12l4.09-3.18z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.68 1.19 6.58l4.09 3.18c.95-2.83 3.6-4.93 6.72-4.93z"/>
                </svg>
              </div>

              {/* Estrellas y Tiempo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#f59e0b] text-[14px]">★★★★★</div>
                <span className="font-raleway text-[12px] text-[#8a9096]">{reviews[currentIndex].time}</span>
              </div>

              {/* Texto de la reseña */}
              <p className="font-raleway text-[#4b5563] text-[14px] leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
            </div>
          </div>
        </div>

        {/* VISTA EN PC / TABLET: Muestra 3 tarjetas en fila */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-10">
          {reviews.slice(desktopStartIndex, desktopStartIndex + 3).map((review, idx) => (
            <div 
              key={desktopStartIndex + idx} 
              className="animate-fade-slide bg-white rounded-[24px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                {/* Autor y Logo de Google */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.bgColor} text-white font-bold flex items-center justify-center text-[16px]`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-raleway font-bold text-[15px] text-[#1e3325]">
                        {review.name}
                      </h4>
                      <span className="font-raleway text-[12px] text-[#8a9096]">1 opinión</span>
                    </div>
                  </div>
                  {/* Icono Google SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.32 7.23 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 11.7s.43 3.58 1.19 5.12l4.09-3.18z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.68 1.19 6.58l4.09 3.18c.95-2.83 3.6-4.93 6.72-4.93z"/>
                  </svg>
                </div>

                {/* Estrellas y Tiempo */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#f59e0b] text-[14px]">★★★★★</div>
                  <span className="font-raleway text-[12px] text-[#8a9096]">{review.time}</span>
                </div>

                {/* Texto de la reseña */}
                <p className="font-raleway text-[#4b5563] text-[14px] leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Paginación (Flechas y Puntos indicadores) */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button 
            onClick={handlePrev} 
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-[#256b3c] hover:text-white hover:border-[#256b3c] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
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

      </div>
    </section>
  );
};

export default Testimonios;