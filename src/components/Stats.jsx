import React, { useState, useEffect } from 'react';

// Sub-componente para hacer la animación de conteo
const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  }, [end, duration]);

  return <span className="font-raleway">{count}</span>;
};

const Stats = () => {
  return (
    <section className="font-raleway pb-20 relative z-20">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* 2 columnas en celular/tablet, y las 4 en una sola fila (grid-cols-4) en pantallas grandes (PC) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto">
          
          {/* Tarjeta 1: +8 años */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-raleway text-[#256b3c] font-bold text-3xl sm:text-5xl mb-1 sm:mb-2 flex items-baseline justify-center">
              <span className="font-raleway text-lg sm:text-2xl mr-1">+</span>
              <AnimatedNumber end={8} duration={1500} />
              <span className="font-raleway text-lg sm:text-2xl ml-1 sm:ml-2">años</span>
            </h3>
            <p className="font-raleway text-[#5B6165] text-[12px] sm:text-[15px] font-medium leading-[1.3]">
              tratando obesidad <br className="font-raleway" /> y metabolismo
            </p>
          </div>

          {/* Tarjeta 2: +8000 pacientes */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-raleway text-[#256b3c] font-bold text-3xl sm:text-5xl mb-1 sm:mb-2 flex items-baseline justify-center">
              <span className="font-raleway text-xl sm:text-3xl mr-1">+</span>
              <AnimatedNumber end={8000} duration={2500} />
            </h3>
            <p className="font-raleway text-[#5B6165] text-[12px] sm:text-[15px] font-medium leading-[1.3]">
              pacientes <br className="font-raleway" /> acompañados
            </p>
          </div>

          {/* Tarjeta 3: 5 especialidades */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-raleway text-[#256b3c] font-bold text-3xl sm:text-5xl mb-1 sm:mb-2 flex items-baseline justify-center">
              <AnimatedNumber end={5} duration={1500} />
            </h3>
            <p className="font-raleway text-[#5B6165] text-[12px] sm:text-[15px] font-medium leading-[1.3]">
              especialidades en <br className="font-raleway" /> un solo equipo
            </p>
          </div>

          {/* Tarjeta 4: InBody */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-raleway text-[#256b3c] font-bold text-[28px] sm:text-[42px] mb-1 sm:mb-2 flex items-baseline justify-center tracking-tight">
              InBody
            </h3>
            <p className="font-raleway text-[#5B6165] text-[12px] sm:text-[15px] font-medium leading-[1.3]">
              incluido en cada <br className="font-raleway" /> evaluación
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;