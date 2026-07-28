import React from 'react';

const TablaComparativa = () => {
  // Datos estructurados para mantener el JSX limpio
  const caracteristicas = [
    { nombre: "Busca la causa del sobrepeso antes de indicar tratamiento", trad: "-", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Varias especialidades trabajando juntas", trad: "x", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Trata la causa metabólica y hormonal", trad: "-", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Análisis corporal InBody incluido", trad: "x", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Respaldo y supervisión médica", trad: "check_grey", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Seguimiento y acompañamiento continuo", trad: "-", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Resultados sostenibles en el tiempo", trad: "-", dietas: "x", auto: "x", orbital: "check_green" },
    { nombre: "Seguro para tu salud (sin automedicarte)", trad: "check_grey", dietas: "-", auto: "x", orbital: "check_green" },
  ];

  // Función auxiliar para renderizar los iconos de la tabla
  const renderIcon = (type) => {
    switch (type) {
      case 'check_green':
        return (
          <div className="w-[26px] h-[26px] rounded-full bg-[#256b3c] text-white flex items-center justify-center mx-auto shadow-sm">
            <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        );
      case 'check_grey':
        return (
          <div className="w-[26px] h-[26px] rounded-full bg-[#e5e7eb] text-[#8a9096] flex items-center justify-center mx-auto">
            <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        );
      case '-':
        return <span className="text-[#a1a1aa] font-semibold">—</span>;
      case 'x':
        return <span className="text-[#d1d5db] font-bold text-[13px]">✕</span>;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#F1F2F3] py-20 lg:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <span className="text-[#256b3c] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-sans">
            Por qué Orbital Salud
          </span>
          <h2 className="text-[34px] md:text-[40px] font-serif text-os-ink mb-4 font-bold leading-tight">
            ¿Por qué Orbital Salud es <span className="text-[#256b3c] italic">diferente?</span>
          </h2>
          <p className="text-[#6b7280] text-[15.5px] font-sans max-w-2xl mx-auto">
            Compara cómo abordamos tu peso y tu salud metabólica frente a las alternativas más comunes.
          </p>
        </div>

        {/* Tabla Contenedor (Con scroll horizontal en móviles para evitar que se rompa) */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-x-auto">
          <div className="min-w-[800px]"> {/* Asegura un ancho mínimo para que la tabla no se aplaste */}
            
            {/* Header de la Tabla */}
            <div className="grid grid-cols-[minmax(300px,2fr)_1fr_1fr_1fr_1.2fr] items-end border-b border-gray-100">
              <div className="p-6"></div>
              <div className="p-6 text-center text-[#8a9096] font-bold text-[11px] uppercase tracking-wider leading-tight">
                Consultorio<br/>Tradicional
              </div>
              <div className="p-6 text-center text-[#8a9096] font-bold text-[11px] uppercase tracking-wider leading-tight">
                Dietas<br/>Solas
              </div>
              <div className="p-6 text-center text-[#8a9096] font-bold text-[11px] uppercase tracking-wider leading-tight">
                Auto-<br/>Medicación
              </div>
              <div className="p-6 text-center bg-[#f4f7f5] text-os-ink font-serif font-bold text-[18px] rounded-tr-[24px]">
                Orbital Salud
              </div>
            </div>

            {/* Filas de la Tabla */}
            {caracteristicas.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[minmax(300px,2fr)_1fr_1fr_1fr_1.2fr] items-center transition-colors hover:bg-gray-50/50
                  ${index !== caracteristicas.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="py-5 px-6 font-bold text-[#4a5056] text-[13.5px] font-sans">
                  {item.nombre}
                </div>
                <div className="py-5 px-6 text-center">
                  {renderIcon(item.trad)}
                </div>
                <div className="py-5 px-6 text-center">
                  {renderIcon(item.dietas)}
                </div>
                <div className="py-5 px-6 text-center">
                  {renderIcon(item.auto)}
                </div>
                <div className="py-5 px-6 text-center bg-[#f4f7f5] h-full flex items-center justify-center">
                  {renderIcon(item.orbital)}
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Leyenda Inferior */}
        <div className="flex justify-center items-center gap-8 mt-8 text-[#8a9096] text-[12px] font-sans">
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 text-[#256b3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Sí
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#a1a1aa]">—</span>
            Limitado / parcial
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[11px] text-[#d1d5db]">✕</span>
            No
          </div>
        </div>

      </div>
    </section>
  );
};

export default TablaComparativa;