import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const EspecialidadesCarousel = () => {
  const carouselRef = useRef(null);

  const especialidades = [
    {
      id: 1,
      titulo: "Endocrinología",
      subtitulo: "ADULTOS Y ADOLESCENTES",
      descripcion: "El corazón de Orbital Salud. Diagnóstico y tratamiento de diabetes, tiroides, obesidad y desórdenes hormonales — siempre buscando la causa metabólica de fondo, no solo el síntoma.",
      tags: ["Diabetes", "Tiroides", "Obesidad", "Resistencia a la insulina"],
      bgColor: "bg-[#e2eadc]",
      icon: <svg className="w-10 h-10 text-[#256b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5c-3 0-5.5 2-6.5 4.5.5 1.5 1.5 3.5 3 5 1.5 1.5 2.5 3.5 3.5 5.5 1-2 2-4 3.5-5.5 1.5-1.5 2.5-3.5 3-5-1-2.5-3.5-4.5-6.5-4.5z"></path></svg>
    },
    {
      id: 2,
      titulo: "Endocrinología Pediátrica",
      subtitulo: "NIÑOS Y ADOLESCENTES",
      descripcion: "Cuidamos el crecimiento y el metabolismo desde temprano: talla baja, pubertad adelantada, obesidad infantil y diabetes en los más chicos, con un enfoque preventivo.",
      tags: ["Crecimiento", "Pubertad", "Obesidad infantil", "Diabetes"],
      bgColor: "bg-[#ebdcca]",
      icon: <svg className="w-10 h-10 text-[#6b5035]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10h.01M15 10h.01M12 14c-1 0-2 .5-2 1.5s1 1.5 2 1.5 2-.5 2-1.5-1-1.5-2-1.5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 6a2 2 0 11-4 0 2 2 0 014 0zM21 6a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    },
    {
      id: 3,
      titulo: "Nutrición",
      subtitulo: "CON EVALUACIÓN INBODY INCLUIDA",
      descripcion: "Planes de alimentación personalizados según tu composición corporal real, orientados a resultados sostenibles en el tiempo — nada de dietas extremas ni temporales.",
      tags: ["Plan personalizado", "InBody", "Seguimiento"],
      bgColor: "bg-[#dce3d5]",
      icon: <svg className="w-10 h-10 text-[#3b522b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 11h16a8 8 0 01-16 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v8"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7c-2.5-2.5-6 0-6 0s3.5 2.5 6 0z"></path></svg>
    },
    {
      id: 4,
      titulo: "Dermatología",
      subtitulo: "PIEL Y HORMONAS",
      descripcion: "La piel refleja tu equilibrio hormonal. Tratamos acné, caída del cabello y manchas relacionadas con desórdenes metabólicos y endocrinos, no solo de forma estética.",
      tags: ["Acné hormonal", "Caída de cabello", "Manchas"],
      bgColor: "bg-[#e8decb]",
      icon: <svg className="w-10 h-10 text-[#594831]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8a8 8 0 01-1 3.87"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 9c0 1.5-1 3-3 3-2.5 0-3-1-3-1"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 13c1.5 2 2 4.5 1 7-3-1.5-5-2-7-1"></path></svg>
    },
    {
      id: 5,
      titulo: "Cardiología",
      subtitulo: "PREVENCIÓN CARDIOVASCULAR",
      descripcion: "Cuidamos tu corazón frente al riesgo que traen la diabetes, la obesidad y el síndrome metabólico, con evaluación y prevención pensadas a largo plazo.",
      tags: ["Presión arterial", "Colesterol", "Riesgo cardiovascular"],
      bgColor: "bg-[#dae0d7]",
      icon: <svg className="w-10 h-10 text-[#304533]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h2l1.5-3 2.5 6 1.5-3h2"></path></svg>
    },
    {
      id: 6,
      titulo: "Bioimpedancia InBody",
      subtitulo: "INCLUIDO EN TUS CONSULTAS",
      descripcion: "Análisis de grasa, músculo, agua y grasa visceral con precisión médica en menos de un minuto. Incluido sin costo en Endocrinología y Nutrición.",
      tags: ["% Grasa", "Masa muscular", "Grasa visceral"],
      bgColor: "bg-[#e3eae1]",
      icon: <svg className="w-10 h-10 text-[#3f5844]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? carouselRef.current.offsetWidth : carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? carouselRef.current.offsetWidth : carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 bg-[#efe8d8] font-raleway">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-[#256b3c] font-bold text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-raleway">
            Las cinco especialidades del equipo
          </h2>
        </div>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto items-stretch gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {especialidades.map((item) => (
              <div 
                key={item.id} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white hover:bg-[#2e4b34] rounded-[24px] p-6 shadow-sm hover:shadow-xl flex flex-col h-auto border border-gray-100 transition-all duration-300 group cursor-default"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bgColor}`}>
                  {item.icon}
                </div>

                <h3 className="font-raleway text-[22px] font-bold text-[#1e3325] group-hover:text-white mb-1 transition-colors duration-300">
                  {item.titulo}
                </h3>
                
                <p className="text-[#a3b18a] group-hover:text-[#c7d6b8] text-[10px] font-bold tracking-[0.1em] uppercase mb-4 transition-colors duration-300 font-raleway">
                  {item.subtitulo}
                </p>
                
                <p className="text-[#6b7280] group-hover:text-white/90 text-[14px] leading-relaxed mb-8 flex-grow transition-colors duration-300 font-raleway">
                  {item.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#efe8d8] group-hover:bg-white/20 text-[#6b7280] group-hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors duration-300 font-raleway"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1e3325] hover:bg-[#2e4b34] hover:text-white hover:border-[#2e4b34] hover:shadow-md transition-all focus:outline-none"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1e3325] hover:bg-[#2e4b34] hover:text-white hover:border-[#2e4b34] hover:shadow-md transition-all focus:outline-none"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/especialidades" 
            className="inline-block border border-[#256b3c] text-[#1e3325] px-8 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#1a3d24] hover:border-[#1a3d24] hover:text-white transition-all duration-300 shadow-sm font-raleway"
          >
            Ver todas las especialidades
          </Link>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EspecialidadesCarousel;