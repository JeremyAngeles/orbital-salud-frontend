import React, { useState } from 'react';

const ResultadosReales = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="resultados" className="w-full">
      <div className="max-w-[1050px] mx-auto px-6 lg:px-8 text-center mb-10 pt-16 border-t border-gray-200">
        <span className="text-[#8a9096] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block font-sans">
          RESULTADOS REALES
        </span>
        <h2 className="text-[34px] md:text-[40px] font-serif text-[#1e3325] mb-3 font-bold leading-tight">
          Antes y después de <span className="text-[#256b3c] italic">nuestros pacientes</span>
        </h2>
        <p className="text-[#6b7280] text-[15px] font-sans max-w-xl mx-auto mb-10">
          No es solo peso: recuperamos tu metabolismo. Mira cómo cambia el cuerpo cuando se trata la causa de fondo.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row">
          <div className="p-8 lg:p-10 lg:w-[45%] flex flex-col justify-center">
            <span className="text-[#256b3c] text-[10px] font-bold tracking-widest uppercase mb-2 block">
              CASO 1 - PROGRAMA METABÓLICO DE PESO
            </span>
            <h3 className="text-[26px] font-serif font-bold text-[#1e3325] mb-1">Paciente E.H.</h3>
            <p className="text-[#8a9096] text-[12px] mb-6">47 años - 1.70 m - Endocrinología + Nutrición</p>

            <div className="space-y-4 mb-6 text-[13px]">
              <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-2">
                <span className="text-[#6b7280]">Peso</span>
                <span className="font-bold text-[#1e3325]">98 kg → 79 kg <span className="text-[#256b3c]">(-19 kg · -19%)</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-2">
                <span className="text-[#6b7280]">IMC</span>
                <span className="font-bold text-[#1e3325]">33.9 → 27.5</span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-2">
                <span className="text-[#6b7280]">Grasa corporal (InBody)</span>
                <span className="font-bold text-[#1e3325]">34% → 24%</span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-2">
                <span className="text-[#6b7280]">Masa muscular</span>
                <span className="font-bold text-[#1e3325]">Mantenida</span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-2">
                <span className="text-[#6b7280]">Duración</span>
                <span className="font-bold text-[#1e3325]">24 semanas</span>
              </div>
            </div>

            <div className="bg-[#f2f7f4] p-4 rounded-xl border border-[#256b3c]/20 mb-5">
              <span className="text-[9px] font-bold tracking-widest text-[#256b3c] uppercase block mb-1">CAUSA DE FONDO DETECTADA</span>
              <p className="text-[#1e3325] font-bold text-[13px]">Resistencia a la insulina + prediabetes</p>
            </div>

            <p className="text-[11px] text-[#6b7280] leading-relaxed mb-5">
              <strong>Tratamiento:</strong> plan nutricional personalizado + tratamiento médico supervisado (análogo de GLP-1 cuando estuvo indicado) + seguimiento con InBody.
            </p>

            <blockquote className="italic text-[12px] text-[#256b3c] border-l-2 border-[#256b3c] pl-3 py-1">
              "Había intentado mil dietas. Recién cuando encontraron por qué mi cuerpo no bajaba, todo cambió."
            </blockquote>
          </div>

          <div className="lg:w-[55%] relative bg-[#EAE6DF] min-h-[400px] select-none flex items-center justify-center">
            <img 
              src="/caso_despues.jpg" 
              alt="Paciente Después" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => { e.target.src = 'https://picsum.photos/600/800?random=2' }}
            />
            <img 
              src="/caso_antes.jpg" 
              alt="Paciente Antes" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              onError={(e) => { e.target.src = 'https://picsum.photos/600/800?random=1' }}
            />
            <div className="absolute top-4 left-4 bg-[#6b7280] text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">ANTES</div>
            <div className="absolute top-4 right-4 bg-[#6b7280] text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">DESPUÉS</div>

            <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]" style={{ left: `calc(${sliderPos}% - 2px)` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
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

        <div className="mt-6 flex flex-col items-center">
          <p className="text-[9px] text-[#8a9096] italic text-center max-w-2xl">
            En Orbital Salud protegemos la identidad de nuestros pacientes; los avatares son ilustraciones representativas. Los casos mostrados son ejemplos ilustrativos del tipo de resultados; los resultados reales varían según cada persona y su evaluación médica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultadosReales;