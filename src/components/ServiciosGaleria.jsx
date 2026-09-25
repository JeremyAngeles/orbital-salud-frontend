import React, { useRef, useEffect } from 'react';

const ServiciosGaleria = () => {
  const carouselRef = useRef(null);

  const servicios = [
    {
      id: 1,
      titulo: "Consulta personalizada",
      subtitulo: "Endocrinología Pediátrica · Dra. Alcázar",
      imagen: "/servicio_1.jpg"
    },
    {
      id: 2,
      titulo: "Consulta presencial",
      subtitulo: "Endocrinología · Dra. Antonella Zúñiga",
      imagen: "/servicio_2.jpg"
    },
    {
      id: 3,
      titulo: "Dermatología",
      subtitulo: "Dra. Karen Ángeles",
      imagen: "/servicio_3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollWidth <= clientWidth) return;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-white font-raleway relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[#8a9096] font-bold text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-raleway block mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-[#1e3325] font-raleway text-[32px] md:text-[42px] font-bold leading-tight mb-4">
            Atención cercana, en cada<br className="hidden md:block"/> especialidad
          </h2>
          <p className="text-[#6b7280] text-[15px] md:text-[16px] font-raleway">
            Así acompañamos a nuestros pacientes — presencial y virtual, siempre en equipo.
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicios.map((item) => (
            <div 
              key={item.id} 
              className="relative w-[80%] sm:w-[320px] md:w-full shrink-0 snap-center md:snap-start aspect-[4/5] lg:aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm group cursor-default border border-black/5"
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800/d1d5db/1e3325?text=Foto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3325]/90 via-[#1e3325]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <h3 className="text-white font-raleway font-bold text-[18px] md:text-[22px] mb-1.5 md:mb-2 leading-tight">
                  {item.titulo}
                </h3>
                <p className="text-white/90 font-raleway text-[11px] md:text-[13px] font-medium">
                  {item.subtitulo}
                </p>
              </div>
            </div>
          ))}
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

export default ServiciosGaleria;