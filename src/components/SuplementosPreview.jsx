import React from 'react';

const SuplementosPreview = () => {
  const suplementos = [
    {
      id: 1,
      titulo: "MetaSlim Berb",
      dosis: "BERBERINA 500MG",
      desc: "Fórmula orientada al apoyo del metabolismo glucémico y lipídico; contribuye a mejorar la sensibilidad a la insulina. 60 cápsulas.",
      precio: "S/ 140",
      imagen: "/img/suplementos/metaslim.png"
    },
    {
      id: 2,
      titulo: "Omega Gold",
      dosis: "OMEGA 3 - EPA - DHA",
      desc: "Apoya la salud cardiovascular y el equilibrio de triglicéridos; contribuye al bienestar cognitivo. 60 cápsulas.",
      precio: "S/ 99",
      imagen: "/img/suplementos/omega.png"
    },
    {
      id: 3,
      titulo: "D-Core 5000",
      dosis: "VITAMINA D 5000 UI",
      desc: "Optimización hormonal e inmunológica; contribuye a la adecuada absorción de calcio. 30 cápsulas.",
      precio: "S/ 85",
      imagen: "/img/suplementos/dcore.png"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28 relative border-t border-gray-100">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block font-sans">
            Tienda Virtual
          </span>
          <h2 className="text-[32px] md:text-[38px] font-serif text-os-ink mb-4 font-bold leading-tight">
            Suplementos con entrega a domicilio
          </h2>
          <p className="text-[#6b7280] text-[15px] font-sans leading-relaxed">
            La línea Endo Orbital y otras marcas de respaldo de nuestros aliados — fórmulas bajo indicación médica, con entrega a domicilio y pago seguro. Sin medicamentos.
          </p>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {suplementos.map((prod) => (
            <div key={prod.id} className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
              
              {/* Imagen del producto */}
              <div className="w-full aspect-square bg-[#f8f9fa] rounded-[16px] mb-6 flex items-center justify-center p-4">
                 <img src={prod.imagen} alt={prod.titulo} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              
              {/* Textos */}
              <h3 className="font-serif font-bold text-[18px] text-os-ink mb-1">
                {prod.titulo}
              </h3>
              <p className="text-[#8a9096] font-bold text-[10px] tracking-wider uppercase mb-4 font-sans">
                {prod.dosis}
              </p>
              <p className="text-[#4a5056] font-sans text-[13px] leading-relaxed mb-6 flex-grow">
                {prod.desc}
              </p>
              
              {/* Precio y Etiqueta */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <span className="font-serif font-bold text-[18px] text-os-ink">
                  {prod.precio}
                </span>
                <span className="bg-[#F1F2F3] text-[#8a9096] text-[9px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                  Bajo indicación médica
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#8a9096] text-[13px] font-sans mb-12 max-w-2xl mx-auto">
          + 6 fórmulas más (zinc, magnesio, hierro, selenio) en la tienda virtual completa — Basestar, Myo Inositol/D-Chiro y Vitamina B12 también disponibles bajo consulta.
        </p>

        {/* Banner Inferior (CTA Tienda) */}
        <div className="bg-[#f0f4f1] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#256b3c]/10">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-[22px] text-os-ink mb-2">
              Tienda Orbital Salud
            </h3>
            <p className="text-[#4a5056] text-[14px] font-sans max-w-md">
              Explora el catálogo completo, arma tu pedido con el carrito de compras y paga en línea vía Culqi, Yape o tarjeta.
            </p>
          </div>
          <a 
            href="/tienda" 
            className="shrink-0 bg-[#256b3c] text-white px-8 py-3.5 rounded-full font-sans font-bold text-[14px] hover:bg-[#1f5a33] transition-colors shadow-sm"
          >
            Ver tienda virtual completa &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default SuplementosPreview;