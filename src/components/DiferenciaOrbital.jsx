import React from 'react';

const DiferenciaOrbital = () => {
  const rows = [
    {
      feature: "Busca la causa del sobrepeso antes de indicar tratamiento",
      tradicional: "—",
      dietas: "×",
      orbital: true
    },
    {
      feature: "Varias especialidades trabajando juntas",
      tradicional: "×",
      dietas: "×",
      orbital: true
    },
    {
      feature: "Trata la causa metabólica y hormonal",
      tradicional: "—",
      dietas: "×",
      orbital: true
    },
    {
      feature: "Análisis corporal InBody incluido",
      tradicional: "×",
      dietas: "×",
      orbital: true
    },
    {
      feature: "Respaldo y supervisión médica",
      tradicional: "check-gray",
      dietas: "×",
      orbital: true
    },
    {
      feature: "Seguimiento y acompañamiento continuo",
      tradicional: "—",
      dietas: "×",
      orbital: true
    }
  ];

  return (
    /* hidden lg:block asegura que SOLO aparezca en pantallas de PC */
    <section className="w-full font-raleway py-24 bg-[#f8f9fa] hidden lg:block overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
            POR QUÉ ORBITAL SALUD
          </span>
          <h2 className="font-raleway text-[40px] text-[#1e3325] font-bold leading-tight mb-3">
            ¿Por qué Orbital Salud es <span className="font-raleway text-[#256b3c] italic font-medium">diferente</span>?
          </h2>
          <p className="font-raleway text-[#6b7280] text-[15px] max-w-xl mx-auto">
            Compara cómo abordamos tu peso y tu salud metabólica frente a las alternativas más comunes.
          </p>
        </div>

        {/* Tarjeta de la Tabla */}
        <div className="bg-white rounded-[32px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100">
          
          {/* Cabeceras de las columnas */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr] items-center pb-6 border-b border-gray-200 px-6">
            <div></div>
            <div className="font-raleway text-center text-[11px] font-bold tracking-wider text-[#6b7280] uppercase">
              CONSULTORIO TRADICIONAL
            </div>
            <div className="font-raleway text-center text-[11px] font-bold tracking-wider text-[#6b7280] uppercase">
              DIETAS SOLAS
            </div>
            <div className="font-raleway text-center text-[14px] font-bold text-[#1e3325] tracking-wide uppercase">
              Orbital Salud
            </div>
          </div>

          {/* Filas de la tabla */}
          <div className="divide-y divide-gray-100">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr] items-center py-6 px-6 bg-transparent hover:bg-gray-50/60 transition-colors rounded-xl">
                
                {/* Característica */}
                <div className="font-raleway font-semibold text-[15px] text-[#1e3325]">
                  {row.feature}
                </div>

                {/* Consultorio Tradicional */}
                <div className="text-center font-bold text-[16px] text-[#9ca3af]">
                  {row.tradicional === 'check-gray' ? (
                    <span className="inline-flex w-7 h-7 rounded-full bg-gray-200 text-gray-600 items-center justify-center text-xs">✓</span>
                  ) : (
                    row.tradicional
                  )}
                </div>

                {/* Dietas Solas */}
                <div className="text-center font-bold text-[16px] text-[#9ca3af]">
                  {row.dietas}
                </div>

                {/* Columna Destacada: Orbital Salud */}
                <div className="flex justify-center">
                  {row.orbital && (
                    <div className="w-8 h-8 rounded-full bg-[#256b3c] text-white flex items-center justify-center shadow-md">
                      ✓
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Leyenda inferior */}
          <div className="flex items-center justify-center gap-8 pt-8 mt-2 border-t border-gray-100 text-[12px] text-[#6b7280] font-medium">
            <span className="flex items-center gap-1.5"><strong className="text-[#256b3c]">✓</strong> Sí</span>
            <span className="flex items-center gap-1.5"><strong>—</strong> Limitado / parcial</span>
            <span className="flex items-center gap-1.5"><strong>×</strong> No</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiferenciaOrbital;