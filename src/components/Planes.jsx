import React from 'react';

const Planes = ({ planesData, loading, error }) => {
  
  // Transformamos los datos de BD para que coincidan con el render exacto
  const dataToRender = planesData && planesData.length > 0 ? planesData.map(plan => {
    const isDestacado = plan.mas_elegido === 1 || plan.mas_elegido === true || plan.mas_elegido === "1";
    
    return {
      id: plan.id,
      destacado: isDestacado, 
      categoria: plan.categoria || "PLAN",
      titulo: plan.nombre_paquete,
      descripcion: plan.descripcion,
      // Lógica idéntica a la imagen: "Desde S/" para normales, "S/" para el destacado
      precio: isDestacado 
        ? `S/ ${Number(plan.precio_total).toFixed(0)}` 
        : `Desde S/ ${Number(plan.precio_total).toFixed(0)}`
    };
  }) : [];

  return (
    <section className="bg-[#F4F5F6] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* === Cabecera === */}
        <div className="text-center mb-16">
          <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-sans">
            Planes
          </span>
          <h2 className="text-[36px] lg:text-[42px] font-serif text-os-ink mb-4 leading-tight font-bold">
            Más que una consulta: un plan para tu<br className="hidden md:block" /> caso
          </h2>
          <p className="text-[#6b7280] text-[16px] font-sans">
            En vez de una consulta aislada, arma un plan con el equipo que tu caso necesita.
          </p>
        </div>

        {loading && <p className="text-center text-[#8a9096] mb-8 font-sans">Cargando planes...</p>}
        {error && <p className="text-center text-red-500 mb-8 font-sans">{error}</p>}
        {!loading && !error && dataToRender.length === 0 && (
          <p className="text-center text-[#8a9096] mb-8 font-sans">Aún no hay planes disponibles.</p>
        )}

        {/* === Contenedor de Tarjetas === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch pt-4">
          {dataToRender.map((plan) => (
            <div 
              key={plan.id} 
              className="relative flex flex-col h-full transition-transform duration-300"
            >
              <div className={`
                relative z-10 flex flex-col h-full rounded-[24px] p-8 md:px-10 md:py-10 bg-white
                ${plan.destacado 
                  ? 'border-[2px] border-[#29663B] shadow-[0_12px_40px_-10px_rgba(41,102,59,0.15)]' // Borde y sombra verde
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
                }
              `}>
                
                {/* Etiqueta "MÁS ELEGIDO" sobresaliendo del borde como en la imagen */}
                {plan.destacado && (
                  <div className="absolute -top-[14px] left-8 bg-[#29663B] text-white font-bold text-[10px] tracking-widest px-5 py-1.5 rounded-full z-20">
                    MÁS ELEGIDO
                  </div>
                )}

                {/* Contenido Interno */}
                <div className="flex flex-col h-full">
                  
                  {/* Categoría */}
                  <span className={`text-[10.5px] font-bold tracking-widest uppercase mb-4 block font-sans 
                    ${plan.destacado ? 'text-[#29663B]' : 'text-[#8a9096]'}`}
                  >
                    {plan.categoria}
                  </span>
                  
                  {/* Título */}
                  <h3 className="text-[24px] font-serif font-bold text-[#1a1a1a] mb-5 leading-tight">
                    {plan.titulo}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-[14.5px] text-[#5e646a] leading-[1.65] font-sans mb-8">
                    {plan.descripcion}
                  </p>
                  
                  {/* Contenedor inferior (mt-auto) empuja el precio y botón siempre abajo */}
                  <div className="mt-auto flex flex-col">
                    
                    {/* Precio */}
                    <div className={`text-[16px] font-serif mb-6
                      ${plan.destacado ? 'text-[#29663B] font-bold text-[17px]' : 'text-[#8a9096] font-medium'}`}
                    >
                      {plan.precio}
                    </div>
                    
                    {/* Botón */}
                    <button className={`w-full py-[14px] rounded-full font-bold transition-colors font-sans text-[14px] border-[1.5px]
                      ${plan.destacado 
                        ? 'bg-[#29663B] border-[#29663B] text-white hover:bg-[#1f4e2d] hover:border-[#1f4e2d]' 
                        : 'bg-transparent border-[#29663B] text-[#29663B] hover:bg-[#f0f4f1]'
                      }`}
                    >
                      Conocer este plan
                    </button>
                    
                  </div>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === Texto Inferior (Footer) === */}
        <div className="mt-16 max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[13px] italic text-[#8a9096] font-sans leading-relaxed px-4">
            También tenemos paquetes de Dermatología (presencial + reevaluación, desde S/249) y otras 
            combinaciones de seguimiento en Endocrinología (3 sesiones presenciales o virtuales) — escríbenos 
            por WhatsApp para conocer el detalle completo de cada uno.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Planes;