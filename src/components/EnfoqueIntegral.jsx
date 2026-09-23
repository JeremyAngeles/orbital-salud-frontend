import React from 'react';

const EnfoqueIntegral = () => {
  return (
    <section className="w-full font-raleway py-20 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        
        {/* Columna Izquierda: Textos y Badges */}
        <div>
          <span className="font-raleway text-[#8a9096] font-bold text-[12px] tracking-[0.18em] uppercase mb-4 block">
            NO SOMOS UN CONSULTORIO TRADICIONAL
          </span>
          
          <h2 className="font-raleway text-[34px] lg:text-[42px] leading-[1.15] mb-6 font-bold text-[#1e3325]">
            Tu cuerpo <span className="font-raleway text-[#256b3c] italic font-medium">no funciona por partes</span>
          </h2>
          
          <p className="font-raleway text-[#6b7280] text-[16px] leading-[1.6] mb-8">
            Un solo equipo de endocrinología, nutrición, dermatología y cardiología, sobre la misma causa metabólica y hormonal — de la infancia a la adultez.
          </p>
          
          {/* Insignias / Pills con check */}
          <div className="flex flex-wrap gap-3">
            <div className="font-raleway bg-white border border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-full px-5 py-2.5 flex items-center gap-2 text-[14px] font-semibold text-[#1e3325]">
              <span className="text-[#256b3c] font-bold">✓</span> Un solo equipo, un mismo caso
            </div>
            
            <div className="font-raleway bg-white border border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-full px-5 py-2.5 flex items-center gap-2 text-[14px] font-semibold text-[#1e3325]">
              <span className="text-[#256b3c] font-bold">✓</span> De la infancia a la adultez
            </div>
            
            <div className="font-raleway bg-white border border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-full px-5 py-2.5 flex items-center gap-2 text-[14px] font-semibold text-[#1e3325]">
              <span className="text-[#256b3c] font-bold">✓</span> Tratamos la causa, no el síntoma
            </div>
          </div>
        </div>

        {/* Columna Derecha: Imagen con tarjeta flotante oscura */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(17,35,24,0.15)] border-[6px] border-white max-w-[500px] w-full">
            <img 
              src="/doctora_principal.jpg" 
              alt="Equipo Orbital Salud" 
              className="w-full h-[420px] object-cover object-top"
              onError={(e) => { e.target.src = 'https://picsum.photos/600/700?random=10' }}
            />
            
            {/* Tarjeta flotante inferior oscura con sombra y diseño exacto de la imagen */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#112318]/95 backdrop-blur-md p-5 rounded-[20px] border border-white/10 shadow-lg text-white">
              <span className="font-raleway text-[#4ADE80] text-[10px] font-bold tracking-widest uppercase block mb-1">
                Endocrinología adulta + pediátrica
              </span>
              <h4 className="font-raleway font-bold text-[16px] text-white">
                Un solo equipo, un mismo caso
              </h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnfoqueIntegral;