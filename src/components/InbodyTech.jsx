import React from 'react';

const InbodyTech = () => {
  return (
    <>
      <section className="max-w-[1050px] mx-auto px-6 lg:px-8 text-center mb-16">
        <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-sans">
          TECNOLOGÍA INBODY 270S
        </span>
        <h1 className="text-[36px] md:text-[44px] font-serif text-[#1e3325] mb-4 font-bold leading-tight">
          No es tu peso. Es <span className="text-[#256b3c] italic">de qué está hecho tu</span><br /> cuerpo
        </h1>
        <p className="text-[#6b7280] text-[15px] md:text-[16px] font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          El análisis de composición corporal InBody mide con precisión médica tu grasa, músculo, agua y grasa visceral — en menos de un minuto y sin pinchazos. Datos reales para tratar la causa, no la balanza.
        </p>
        <div className="inline-block bg-[#eef5f0] text-[#256b3c] font-sans font-bold text-[12px] px-5 py-2 rounded-full border border-[#256b3c]/20">
          ✓ Incluido sin costo en toda consulta de Endocrinología y Nutrición
        </div>
      </section>

      <section className="max-w-[1050px] mx-auto px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <h3 className="font-serif font-bold text-[22px] text-[#1e3325] mb-6">
              Lo que tu cuerpo te dice en <span className="text-[#256b3c] italic">55 segundos</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "💧", title: "% Grasa corporal", desc: "Cuánta grasa tienes, no solo tu peso" },
                { icon: "💪", title: "Masa muscular", desc: "Tu músculo esquelético real" },
                { icon: "🎯", title: "Grasa visceral", desc: "La grasa peligrosa que rodea tus órganos" },
                { icon: "🌊", title: "Agua corporal", desc: "Tu nivel de hidratación total" },
                { icon: "⚡", title: "Metabolismo basal", desc: "Cuántas calorías quemas en reposo" },
                { icon: "📊", title: "Puntaje + análisis segmental", desc: "Tu score y el balance brazo/pierna/tronco" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-[#eef5f0] text-[#256b3c] flex items-center justify-center shrink-0 text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-bold text-[13px] text-[#1e3325] block mb-0.5 leading-tight">{item.title}</span>
                    <span className="text-[#8a9096] text-[11px] leading-tight block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
            <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
              <span className="font-bold text-[14px] text-[#1e3325]">Hoja de Resultados InBody</span>
              <span className="text-[10px] text-[#256b3c] font-bold tracking-wider">270S</span>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-[11px] font-bold text-[#1e3325] mb-1.5">
                  <span>Grasa corporal</span><span>35.2 %</span>
                </div>
                <div className="w-full bg-[#e5e7eb] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2E4B34] h-full w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold text-[#1e3325] mb-1.5">
                  <span>Masa muscular (MME)</span><span>20.4 kg</span>
                </div>
                <div className="w-full bg-[#e5e7eb] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2E4B34] h-full w-[60%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold text-[#1e3325] mb-1.5">
                  <span>Grasa visceral</span><span>Nivel 11</span>
                </div>
                <div className="w-full bg-[#e5e7eb] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2E4B34] h-full w-[55%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold text-[#1e3325] mb-1.5">
                  <span>Agua corporal total</span><span>28.1 L</span>
                </div>
                <div className="w-full bg-[#e5e7eb] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2E4B34] h-full w-[70%]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f9faf9] p-3 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2E4B34] text-white flex flex-col items-center justify-center shrink-0">
                <span className="font-bold text-lg leading-none">69</span>
                <span className="text-[7px] tracking-wider uppercase opacity-80 mt-0.5">Puntaje</span>
              </div>
              <p className="text-[10px] text-[#6b7280] leading-snug">
                Un solo estudio te da más de 15 parámetros: peso ideal, cuánta grasa bajar, cuánto músculo ganar y tu progreso en el tiempo.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-[#8a9096] italic mt-4">Ejemplo ilustrativo de la Hoja de Resultados InBody 270S</p>
      </section>

      <section className="max-w-[1050px] mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
          <div className="bg-white py-6 px-4 rounded-xl shadow-sm border border-gray-100">
            <span className="font-serif font-bold text-[32px] text-[#256b3c] block mb-1">35 seg</span>
            <p className="text-[11px] text-[#6b7280]">Lo que dura el análisis, de pie y sin pinchazos</p>
          </div>
          <div className="bg-white py-6 px-4 rounded-xl shadow-sm border border-gray-100">
            <span className="font-serif font-bold text-[32px] text-[#256b3c] block mb-1">+98%</span>
            <p className="text-[11px] text-[#6b7280]">Correlación con DEXA, el estándar de oro médico</p>
          </div>
          <div className="bg-white py-6 px-4 rounded-xl shadow-sm border border-gray-100">
            <span className="font-serif font-bold text-[32px] text-[#256b3c] block mb-1">A tu celular</span>
            <p className="text-[11px] text-[#6b7280]">Tus resultados por código QR, para seguir tu progreso</p>
          </div>
        </div>
        <div className="text-center">
          <a href="/agenda" className="inline-flex items-center gap-2 bg-[#256b3c] text-white px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#1f5a33] transition-colors shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Agenda tu consulta — el análisis InBody va incluido
          </a>
          <p className="text-[10px] text-[#8a9096] italic mt-3">Pronto sumaremos aquí la foto real de nuestro equipo InBody 270S y una hoja de resultados real.</p>
        </div>
      </section>
    </>
  );
};

export default InbodyTech;