import React from 'react';

const Planes = ({ planesData, loading, error }) => {
  const defaultPlanes = [
    {
      id: 1,
      destacado: true,
      etiqueta: "MÁS ELEGIDO",
      categoria: "PLAN COMBINADO",
      titulo: "Plan Metabólico Integral",
      descripcion: "Endocrinología + Nutrición. Para quienes buscan resultados sostenibles en peso, glucosa u hormonas, con seguimiento conjunto de ambos especialistas. Incluye bioimpedancia InBody.",
      precio: "S/ 285"
    },
    {
      id: 2,
      destacado: false,
      categoria: "SEGUIMIENTO",
      titulo: "Plan Endocrinología Adulto",
      descripcion: "Consulta presencial inicial + reevaluación virtual. Para dar seguimiento continuo a diabetes, tiroides, obesidad y hormonas sin tener que ir presencialmente cada vez.",
      precio: "Desde S/ 249"
    },
    {
      id: 3,
      destacado: false,
      categoria: "PLAN HÍBRIDO",
      titulo: "Plan Endocrinología Pediátrica",
      descripcion: "Consulta presencial inicial + reevaluación (virtual o presencial). Para prevenir en los niños lo que se complica en los adultos.",
      precio: "Desde S/ 400"
    }
  ];

  const dataToRender = planesData && planesData.length > 0 ? planesData : defaultPlanes;

  return (
    <section className="bg-os-beige pt-20 pb-40 lg:pt-28 lg:pb-52 relative">
      
      {/* ONDA SUPERIOR CORREGIDA: Sin rotate-180 */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#a68a61] font-bold text-[11px] tracking-[0.25em] uppercase mb-4 block font-sans">
            Planes
          </span>
          <h2 className="text-4xl lg:text-[44px] font-serif text-os-dark mb-4 leading-tight font-bold">
            Más que una consulta: un plan para tu<br/>caso
          </h2>
          <p className="text-os-ink text-[16px] font-sans font-medium">
            En vez de una consulta aislada, arma un plan con el equipo que tu caso necesita.
          </p>
        </div>

        {loading && <p className="text-center text-os-light mb-8 font-sans">Cargando planes...</p>}
        {error && <p className="text-center text-red-500 mb-8 font-sans">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {dataToRender.map((plan) => (
            <div key={plan.id} className="relative flex flex-col">
              
              {plan.destacado && (
                <div className="absolute -top-7 left-6 bg-[#d8cbbb] text-os-dark font-bold text-[10px] tracking-widest px-6 py-2 rounded-t-xl z-0">
                  {plan.etiqueta || "MÁS ELEGIDO"}
                </div>
              )}

              <div className={`
                relative z-10 flex flex-col h-full rounded-[2rem] p-8 md:p-10 shadow-sm
                ${plan.destacado ? 'bg-os-dark text-white shadow-xl' : 'bg-white text-os-dark border border-black/5'}
              `}>
                
                <span className={`text-[11px] font-bold tracking-widest uppercase mb-4 block font-sans 
                  ${plan.destacado ? 'text-white' : 'text-[#bba488]'}`}
                >
                  {plan.categoria}
                </span>
                
                <h3 className={`text-[26px] font-serif font-bold mb-4 leading-tight
                  ${plan.destacado ? 'text-white' : 'text-os-dark'}`}
                >
                  {plan.titulo}
                </h3>
                
                <p className={`text-[14.5px] leading-relaxed font-sans mb-8 flex-grow
                  ${plan.destacado ? 'text-white/90' : 'text-os-ink'}`}
                >
                  {plan.descripcion}
                </p>
                
                <div className={`text-[18px] font-serif mb-6
                  ${plan.destacado ? 'text-[#cbbca9]' : 'text-[#a68a61]'}`}
                >
                  {plan.precio}
                </div>
                
                <button className={`w-full py-3.5 rounded-full font-semibold transition-colors font-sans text-[15px]
                  ${plan.destacado 
                    ? 'bg-os-beige text-os-dark hover:bg-white' 
                    : 'bg-transparent border border-os-dark text-os-dark hover:bg-os-dark hover:text-white'
                  }`}
                >
                  Conocer este plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[13px] italic text-os-ink font-sans leading-relaxed">
            También tenemos paquetes de Dermatología (presencial + reevaluación, desde S/249) y otras 
            combinaciones de seguimiento en Endocrinología (3 sesiones presenciales o virtuales) — escríbenos 
            por WhatsApp para conocer el detalle completo de cada uno.
          </p>
        </div>

      </div>

      {/* AQUI ESTÁ LA MAGIA: Onda verde oscura para unirse perfecto con InBody */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="block w-full h-[70px] md:h-[130px]" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            className="text-os-dark fill-current"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default Planes;