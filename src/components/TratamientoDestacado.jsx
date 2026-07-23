import React from 'react';

const TratamientoDestacado = ({ contenidos, loading, error }) => {
  // 1. Si está cargando o hay error, mostramos un estado muy sutil o nada
  if (loading) return <div className="py-10 text-center text-os-light font-sans">Cargando destacados...</div>;
  if (error) return null; // Si hay error, mejor ocultar la sección para no arruinar el diseño

  // 2. Si NO hay publicaciones (0 elementos), OCULTAMOS toda la sección devolviendo null
  if (!contenidos || contenidos.length === 0) {
    return null; 
  }

  // Tomamos la primera publicación para hacerla el "Hero" gigante
  const destacadoPrincipal = contenidos[0];
  
  // Tomamos TODAS las demás publicaciones (ya no hay límite de 5 ni rellenos falsos)
  const secundarios = contenidos.slice(1);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* === ENCABEZADO === */}
        <div className="mb-12">
          <div className="bg-[#a68a61]/10 text-os-dark px-4 py-2 rounded-full inline-flex items-center gap-2 text-[13px] font-bold tracking-wide uppercase mb-6 font-sans">
            <svg className="w-4 h-4 text-[#a68a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            Contenido Destacado
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-os-dark max-w-3xl leading-tight">
            Un tratamiento diseñado para cuidar tu salud de forma <span className="italic text-[#a68a61] font-bold">integral</span>
          </h2>
          <p className="text-os-ink mt-4 text-lg max-w-2xl font-sans">
            Explora nuestros pilares fundamentales y descubre cómo te acompañamos en cada etapa de tu proceso.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* === CONTENEDOR SUPERIOR DINÁMICO (Soporta Video o Foto) === */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group bg-os-beige flex items-center justify-center">
            
            {destacadoPrincipal.video_url ? (
              <video 
                src={destacadoPrincipal.video_url} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <img 
                src={destacadoPrincipal.imagen_url || "/placeholder-wide.jpg"} 
                alt={destacadoPrincipal.titulo}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            
            <div className="absolute inset-0 bg-os-dark/30"></div>
            
            <div className="absolute z-10 flex flex-col items-center">
                {destacadoPrincipal.video_url && (
                  <button className="bg-white text-os-dark w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 ml-1 text-[#a68a61]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                )}
                <h3 className="text-white text-3xl md:text-5xl font-serif font-bold mt-6 text-center drop-shadow-md px-4">
                  {destacadoPrincipal.titulo}
                </h3>
            </div>
          </div>

          {/* === GRILLA BENTO INFERIOR (Crece infinitamente según lo que suban) === */}
          {secundarios.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
              {secundarios.map((item, index) => {
                // Matemática simple para que cada 3ra tarjeta sea alta y mantenga el diseño Bento
                const isTall = index % 3 === 2; 
                
                return (
                  <div 
                    key={item.id} 
                    className={`relative rounded-3xl overflow-hidden group bg-os-beige shadow-sm border border-black/5 ${isTall ? 'md:row-span-2' : ''}`}
                  >
                    <img 
                      src={item.imagen_url || `/placeholder-${index}.jpg`} 
                      alt={item.titulo}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="bg-os-beige w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-4 h-4 text-[#a68a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-os-dark font-sans text-[15px] mb-1 line-clamp-1">
                        {item.titulo}
                      </h4>
                      <p className="text-os-ink text-[12px] leading-relaxed line-clamp-2 font-sans font-medium">
                        {item.contenido_texto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TratamientoDestacado;