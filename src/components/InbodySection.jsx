import React from 'react';

const InbodySection = () => {
  return (
    <section className="bg-os-dark relative pt-12 pb-16 md:pt-16 md:pb-24 z-10">
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* === ENCABEZADO === */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#a68a61] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 block">
            Tecnología InBody 270S
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 leading-tight">
            No es tu peso. Es <span className="text-[#a68a61] italic">de qué está hecho tu cuerpo</span>
          </h2>
          <p className="text-white/90 text-[15px] md:text-[17px] mb-8 leading-relaxed px-4">
            El análisis de composición corporal InBody mide con precisión médica tu grasa, músculo, agua y grasa visceral — en menos de un minuto y sin pinchazos. Datos reales para tratar la causa, no la balanza.
          </p>
          <div className="inline-flex items-center justify-center border border-white/20 rounded-full px-5 py-2.5 text-[13px] bg-white/5 text-white">
            <svg className="w-4 h-4 text-[#a68a61] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Incluido sin costo en toda consulta de Endocrinología y Nutrición
          </div>
        </div>

        {/* === CONTENIDO CENTRAL (2 COLUMNAS) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Columna Izquierda: Grilla de beneficios */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-serif mb-8 text-center lg:text-left">
              Lo que tu cuerpo te dice en <span className="text-[#a68a61] italic">35 segundos</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">% Grasa corporal</h4>
                  <p className="text-[12px] text-white/70 leading-snug">Cuánta grasa tienes, no solo tu peso</p>
                </div>
              </div>
              
              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">Masa muscular</h4>
                  <p className="text-[12px] text-white/70 leading-snug">Tu músculo esquelético real</p>
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11A7 7 0 015 11m14 0a2 2 0 01-2 2H7a2 2 0 01-2-2m14 0c0 4.418-3.582 8-8 8s-8-3.582-8-8m14 0a9 9 0 01-18 0"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">Grasa visceral</h4>
                  <p className="text-[12px] text-white/70 leading-snug">La grasa peligrosa que rodea tus órganos</p>
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">Agua corporal</h4>
                  <p className="text-[12px] text-white/70 leading-snug">Tu nivel de hidratación total</p>
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">Metabolismo basal</h4>
                  <p className="text-[12px] text-white/70 leading-snug">Cuántas calorías quemas en reposo</p>
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 rounded-xl p-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a68a61] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-1">Puntaje + análisis segmental</h4>
                  <p className="text-[12px] text-white/70 leading-snug">Tu score y el balance brazo/pierna/tronco</p>
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Hoja de Resultados */}
          <div className="relative flex justify-center w-full mt-4 lg:mt-0">
            <div className="bg-[#fdfbf7] rounded-3xl p-6 md:p-8 w-full max-w-[460px] text-os-dark shadow-2xl relative z-10">
              
              <div className="flex justify-between items-end border-b-2 border-[#e5e0d8] pb-4 mb-5">
                <h4 className="font-serif font-bold text-[17px] md:text-[19px]">Hoja de Resultados InBody</h4>
                <span className="text-[#a68a61] text-[10px] font-bold tracking-widest">270S</span>
              </div>
              
              <div className="space-y-5 mb-8">
                <div>
                  <div className="flex justify-between text-[13px] font-bold mb-1.5">
                    <span>Grasa corporal</span>
                    <span>38.2 %</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-os-dark h-full rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-[13px] font-bold mb-1.5">
                    <span>Masa muscular (MME)</span>
                    <span>20.4 kg</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-os-dark h-full rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[13px] font-bold mb-1.5">
                    <span>Grasa visceral</span>
                    <span>Nivel 11</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-os-dark h-full rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[13px] font-bold mb-1.5">
                    <span>Agua corporal total</span>
                    <span>28.1 L</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-os-dark h-full rounded-full" style={{width: '55%'}}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-[#e5e0d8]">
                <div className="bg-os-dark text-white rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center shrink-0 shadow-inner">
                  <span className="text-2xl font-bold leading-none">69</span>
                  <span className="text-[8px] uppercase tracking-wider mt-0.5">Puntaje</span>
                </div>
                <p className="text-[11px] text-os-ink leading-snug font-medium">
                  Un solo estudio te da más de 15 parámetros: peso ideal, cuánta grasa bajar, cuánto músculo ganar y tu progreso en el tiempo.
                </p>
              </div>

            </div>
            
            <p className="text-center text-[10px] text-white/50 absolute -bottom-7 w-full italic">
              Ejemplo ilustrativo de la Hoja de Resultados InBody 270S
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6 text-center">
              <h4 className="text-[#a68a61] font-serif text-3xl font-bold mb-2">35 seg</h4>
              <p className="text-white/80 text-[13px] leading-snug">Lo que dura el análisis, de pie y sin pinchazos</p>
            </div>
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6 text-center">
              <h4 className="text-[#a68a61] font-serif text-3xl font-bold mb-2">+98%</h4>
              <p className="text-white/80 text-[13px] leading-snug">Correlación con DEXA, el estándar de oro médico</p>
            </div>
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6 text-center">
              <h4 className="text-[#a68a61] font-serif text-3xl font-bold mb-2">A tu celular</h4>
              <p className="text-white/80 text-[13px] leading-snug">Tus resultados por código QR, para seguir tu progreso</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <a href="#contacto" className="bg-[#fdfbf7] text-os-dark px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white transition shadow-xl text-[14px] md:text-[15px] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.399A7.968 7.968 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.121 4.094L.133 15.867l3.905-1.02A7.95 7.95 0 0 0 8 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.601zM8 14.653a6.59 6.59 0 0 1-3.364-1.22l-.241-.143-2.502.655.666-2.438-.157-.25A6.574 6.574 0 0 1 1.408 8c0-3.626 2.951-6.577 6.592-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577zm3.46-4.736c-.19-.095-1.121-.553-1.295-.616-.174-.063-.301-.095-.428.095-.127.19-.489.616-.599.742-.111.127-.222.143-.413.048-.19-.095-.8-.295-1.523-.935-.562-.498-.941-1.111-1.052-1.302-.111-.19-.012-.293.083-.388.084-.084.19-.222.285-.332.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.332-.048-.095-.428-1.032-.587-1.413-.156-.37-.313-.32-.428-.326-.111-.006-.238-.006-.365-.006-.127 0-.332.048-.506.238-.174.19-.665.65-.665 1.587 0 .936.681 1.841.776 1.968.095.127 1.341 2.049 3.242 2.868.452.194.805.31 1.08.397.453.144.865.123 1.19.075.364-.054 1.121-.458 1.279-.901.159-.443.159-.822.111-.901-.048-.079-.174-.127-.365-.222z"/>
              </svg>
              Agenda tu consulta — el análisis InBody va incluido
            </a>
            <p className="text-[11px] text-white/50 italic">
              Pronto sumaremos aquí la foto real de nuestro equipo InBody 270S y una hoja de resultados real.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InbodySection;