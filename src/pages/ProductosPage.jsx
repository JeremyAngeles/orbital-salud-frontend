import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductosPage = () => {
  const { agregarAlCarrito } = useCart();
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados de Filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recomendados");
  const [categoriasActivas, setCategoriasActivas] = useState([]);
  const [especialidadesActivas, setEspecialidadesActivas] = useState([]);
  
  // Estado para Pestañas de Filtros en Celular
  const [mobileTabActiva, setMobileTabActiva] = useState(null);
  
  // Estados para el Rango de Precio
  const [maxPrecioReal, setMaxPrecioReal] = useState(1000);
  const [precioFiltro, setPrecioFiltro] = useState(1000);

  // Array de aliados
  const aliados = [
    "adium.png", "expert (1).png", "imaginesmedicas.png", "integral.png",
    "intermedica.png", "novo.png", "saludTools.png", "sermed.png", "vanttive.png"
  ];

  useEffect(() => {
    // Simulamos una carga rápida y pasamos los datos estáticos
    const cargarProductosEstaticos = () => {
      const mockProductos = [
        {
          id: 1,
          nombre: "MetaSlim Berb",
          categoria: "BERBERINA 500MG",
          especialidad: "Endocrinología",
          descripcion: "Fórmula orientada al apoyo del metabolismo glucémico y lipídico; contribuye a mejorar la sensibilidad a la insulina. 60 cápsulas.",
          precio: 140,
          stock: 50,
          imagen: "/metaslim.png" 
        },
        {
          id: 2,
          nombre: "Ashwa Balance",
          categoria: "ASHWAGANDHA",
          especialidad: "Bienestar",
          descripcion: "Apoya el equilibrio neuroendocrino y metabólico; contribuye a moderar los efectos del estrés. 30 cápsulas.",
          precio: 99,
          stock: 50,
          imagen: "/ashwa.png"
        },
        {
          id: 3,
          nombre: "MagBio Active",
          categoria: "BISGLICINATO DE MAGNESIO",
          especialidad: "Nutrición",
          descripcion: "Apoya el sistema nervioso y favorece la relajación neuromuscular y un descanso más reparador. 30 cápsulas.",
          precio: 79,
          stock: 50,
          imagen: "/magbio.png"
        },
        {
          id: 4,
          nombre: "Zenthera Zinc",
          categoria: "BISGLICINATO DE ZINC",
          especialidad: "Dermatología",
          descripcion: "Apoya el sistema inmunológico y la salud tiroidea; favorece la salud de piel, cabello y uñas. 30 cápsulas.",
          precio: 69,
          stock: 50,
          imagen: "/zenthera.png"
        },
        {
          id: 5,
          nombre: "MagCitra Balance",
          categoria: "CITRATO DE MAGNESIO",
          especialidad: "Gastroenterología",
          descripcion: "Favorece la relajación mental y el bienestar digestivo. Contenido de 300 gr.",
          precio: 59,
          stock: 50,
          imagen: "/magcitra.png"
        },
        {
          id: 6,
          nombre: "Hemo Power",
          categoria: "HIERRO POLIMALTOSADO",
          especialidad: "Hematología",
          descripcion: "Ayuda a prevenir y tratar la anemia; contribuye a la formación normal de glóbulos rojos y hemoglobina. 30 cápsulas.",
          precio: 60,
          stock: 50,
          imagen: "/hemopower.png"
        }
      ];

      setProductos(mockProductos);
      
      if (mockProductos.length > 0) {
        const maxP = Math.max(...mockProductos.map(p => p.precio));
        setMaxPrecioReal(maxP);
        setPrecioFiltro(maxP);
      }
      
      setLoading(false);
    };

    setTimeout(cargarProductosEstaticos, 400);
  }, []);

  const categoriasUnicas = [...new Set(productos.map(p => p.categoria).filter(c => c !== ''))];
  const especialidadesUnicas = [...new Set(productos.map(p => p.especialidad).filter(e => e !== ''))];

  const toggleFiltro = (valor, tipo) => {
    if (tipo === 'categoria') {
      setCategoriasActivas(prev => prev.includes(valor) ? prev.filter(c => c !== valor) : [...prev, valor]);
    } else {
      setEspecialidadesActivas(prev => prev.includes(valor) ? prev.filter(e => e !== valor) : [...prev, valor]);
    }
  };

  const limpiarFiltros = () => {
    setCategoriasActivas([]);
    setEspecialidadesActivas([]);
    setPrecioFiltro(maxPrecioReal);
    setSearchTerm("");
    setMobileTabActiva(null);
  };

  let productosProcesados = productos.filter(p => {
    const textoBuscado = searchTerm.toLowerCase();
    const matchTexto =
      p.nombre.toLowerCase().includes(textoBuscado) ||
      p.descripcion.toLowerCase().includes(textoBuscado);
    
    const matchCategoria = categoriasActivas.length === 0 || categoriasActivas.includes(p.categoria);
    const matchEspecialidad = especialidadesActivas.length === 0 || especialidadesActivas.includes(p.especialidad);
    const matchPrecio = p.precio <= precioFiltro;

    return matchTexto && matchCategoria && matchEspecialidad && matchPrecio;
  });

  if (sortBy === 'menor-precio') {
    productosProcesados.sort((a, b) => a.precio - b.precio);
  } else if (sortBy === 'mayor-precio') {
    productosProcesados.sort((a, b) => b.precio - a.precio);
  }

  const filtrosActivosCount = categoriasActivas.length + especialidadesActivas.length + (precioFiltro < maxPrecioReal ? 1 : 0);

  return (
    <div className="min-h-screen bg-white font-raleway flex flex-col relative z-10">
      
      {/* =========================================
          CABECERA HERO (Con fondo F9F6F0 y Onda)
          ========================================= */}
      <section className="w-full pt-20 md:pt-28 bg-[#F9F6F0] relative overflow-hidden z-10">
        
        <div className="max-w-[1050px] mx-auto px-6 text-center pb-8 md:pb-12 relative z-20">
          <span className="text-[#A68A61] font-bold text-[11px] md:text-[13px] tracking-[0.2em] uppercase mb-4 block font-raleway">
            Tienda Virtual — Orbital Salud
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-raleway font-bold text-[#1e3325] mb-6 leading-tight">
            Suplementos <span className="text-[#256b3c] italic">Endo Orbital</span>
          </h1>
          
          <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto font-raleway">
            Fórmulas magistrales bajo indicación médica, formuladas en exclusiva para Orbital Salud. Arma tu pedido, revisa el total y coordina el pago — sin medicamentos.
          </p>
          
          <div className="inline-flex items-center justify-center gap-2 bg-white border border-black/5 px-6 py-2.5 mt-8 rounded-full text-[12px] md:text-[13px] font-bold text-[#1e3325] shadow-sm font-raleway">
            <span>🚚 Entrega a domicilio en Lima · Pago via Yape o transferencia</span>
          </div>
        </div>

        {/* === ONDA INFERIOR CORREGIDA === */}
        <div className="w-full overflow-hidden leading-none z-0 relative">
          <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[90px]" preserveAspectRatio="none">
            <path 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* =========================================
          CONTENIDO PRINCIPAL (Productos y Filtros)
          ========================================= */}
      <div className="flex-grow relative flex flex-col z-20 bg-white">
        <main className="flex-grow max-w-[1250px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 pb-16 relative z-10">

          {/* BUSCADOR */}
          <div className="flex flex-col items-center mb-8 gap-4">
            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-[#F9F6F0] focus:outline-none focus:border-[#256b3c] focus:ring-1 focus:ring-[#256b3c] text-[#1e3325] text-sm shadow-sm transition-all font-raleway"
              />
              <svg className="w-5 h-5 absolute left-5 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* PESTAÑAS DE FILTROS PARA CELULAR (SOLO VISIBLE EN MÓVIL) */}
          <div className="lg:hidden w-full mb-8">
            <div className="flex bg-[#F9F6F0] rounded-xl shadow-sm border border-black/5 overflow-hidden mb-3">
              <button 
                onClick={() => setMobileTabActiva(mobileTabActiva === 'precio' ? null : 'precio')}
                className={`flex-1 py-3 text-[12px] font-bold border-r border-black/5 transition-colors font-raleway ${mobileTabActiva === 'precio' ? 'bg-[#256b3c] text-white' : 'text-[#6b7280] hover:bg-white'}`}
              >
                Precio
              </button>
              <button 
                onClick={() => setMobileTabActiva(mobileTabActiva === 'especialidad' ? null : 'especialidad')}
                className={`flex-1 py-3 text-[12px] font-bold border-r border-black/5 transition-colors font-raleway ${mobileTabActiva === 'especialidad' ? 'bg-[#256b3c] text-white' : 'text-[#6b7280] hover:bg-white'}`}
              >
                Especialidad
              </button>
              <button 
                onClick={() => setMobileTabActiva(mobileTabActiva === 'categoria' ? null : 'categoria')}
                className={`flex-1 py-3 text-[12px] font-bold transition-colors font-raleway ${mobileTabActiva === 'categoria' ? 'bg-[#256b3c] text-white' : 'text-[#6b7280] hover:bg-white'}`}
              >
                Categoría
              </button>
            </div>

            {/* CONTENIDO DE LAS PESTAÑAS (MÓVIL) */}
            {mobileTabActiva && (
              <div className="bg-[#F9F6F0] p-5 rounded-xl shadow-sm border border-black/5 animate-fadeIn">
                
                {mobileTabActiva === 'precio' && (
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1e3325] mb-4 font-raleway">Rango de Precio</h4>
                    <input type="range" min="0" max={maxPrecioReal} value={precioFiltro} onChange={(e) => setPrecioFiltro(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#256b3c]"/>
                    <div className="flex justify-between text-xs font-bold text-[#6b7280] mt-3 font-raleway">
                      <span>S/ 0</span>
                      <span>Hasta S/ {precioFiltro.toFixed(0)}</span>
                    </div>
                  </div>
                )}

                {mobileTabActiva === 'especialidad' && (
                  <ul className="space-y-3">
                    {especialidadesUnicas.map((esp, idx) => (
                      <li key={`mob-esp-${idx}`} className="flex items-center justify-between cursor-pointer font-raleway" onClick={() => toggleFiltro(esp, 'especialidad')}>
                        <span className={`text-[13px] ${especialidadesActivas.includes(esp) ? 'text-[#256b3c] font-bold' : 'text-[#6b7280]'}`}>{esp}</span>
                        <input type="checkbox" checked={especialidadesActivas.includes(esp)} readOnly className="w-4 h-4 rounded border-gray-300 accent-[#256b3c]" />
                      </li>
                    ))}
                  </ul>
                )}

                {mobileTabActiva === 'categoria' && (
                  <ul className="space-y-3">
                    {categoriasUnicas.map((cat, idx) => (
                      <li key={`mob-cat-${idx}`} className="flex items-center justify-between cursor-pointer font-raleway" onClick={() => toggleFiltro(cat, 'categoria')}>
                        <span className={`text-[13px] ${categoriasActivas.includes(cat) ? 'text-[#256b3c] font-bold' : 'text-[#6b7280]'}`}>{cat}</span>
                        <input type="checkbox" checked={categoriasActivas.includes(cat)} readOnly className="w-4 h-4 rounded border-gray-300 accent-[#256b3c]" />
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* ASIDE DE FILTROS (SOLO VISIBLE EN PC) */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              <div className="sticky top-24 bg-[#F9F6F0] p-6 rounded-[32px] border border-black/5 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-[#1e3325] font-raleway">Filtrar por</h3>
                  {filtrosActivosCount > 0 && (
                    <button onClick={limpiarFiltros} className="text-[12px] text-red-500 font-bold hover:underline font-raleway">Limpiar</button>
                  )}
                </div>

                <div className="mb-8 border-b border-black/5 pb-6">
                  <h4 className="text-[12px] font-bold text-[#8a9096] mb-4 uppercase tracking-wider font-raleway">Precio Máximo</h4>
                  <input type="range" min="0" max={maxPrecioReal} value={precioFiltro} onChange={(e) => setPrecioFiltro(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#256b3c]"/>
                  <div className="flex justify-between text-xs font-bold text-[#1e3325] mt-3 font-raleway">
                    <span>S/ 0</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-black/5">S/ {precioFiltro.toFixed(0)}</span>
                  </div>
                </div>
                
                {especialidadesUnicas.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[12px] font-bold text-[#8a9096] mb-4 uppercase tracking-wider font-raleway">Especialidad</h4>
                    <ul className="space-y-3 font-raleway">
                      {especialidadesUnicas.map((esp, idx) => (
                        <li key={`esp-${idx}`} className="flex items-center justify-between cursor-pointer group" onClick={() => toggleFiltro(esp, 'especialidad')}>
                          <span className={`text-[13px] transition-colors ${especialidadesActivas.includes(esp) ? 'text-[#256b3c] font-bold' : 'text-[#6b7280] group-hover:text-[#1e3325]'}`}>{esp}</span>
                          <input type="checkbox" checked={especialidadesActivas.includes(esp)} readOnly className="w-4 h-4 rounded border-gray-300 accent-[#256b3c]" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {categoriasUnicas.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[12px] font-bold text-[#8a9096] mb-4 uppercase tracking-wider font-raleway">Categoría</h4>
                    <ul className="space-y-3 font-raleway">
                      {categoriasUnicas.map((cat, idx) => (
                        <li key={`cat-${idx}`} className="flex items-center justify-between cursor-pointer group" onClick={() => toggleFiltro(cat, 'categoria')}>
                          <span className={`text-[13px] transition-colors ${categoriasActivas.includes(cat) ? 'text-[#256b3c] font-bold' : 'text-[#6b7280] group-hover:text-[#1e3325]'}`}>{cat}</span>
                          <input type="checkbox" checked={categoriasActivas.includes(cat)} readOnly className="w-4 h-4 rounded border-gray-300 accent-[#256b3c]" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>

            {/* ZONA DE PRODUCTOS */}
            <div className="flex-grow">
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#6b7280] text-[13px] font-medium font-raleway">{productosProcesados.length} productos encontrados</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)} 
                  className="px-4 py-2.5 rounded-full border border-black/5 bg-[#F9F6F0] text-[#1e3325] text-[13px] font-raleway focus:outline-none cursor-pointer shadow-sm font-bold"
                >
                  <option value="recomendados">Ordenar por Recomendados</option>
                  <option value="menor-precio">Menor precio</option>
                  <option value="mayor-precio">Mayor precio</option>
                </select>
              </div>

              {loading && (
                <div className="flex justify-center items-center py-20">
                  <div className="w-8 h-8 border-4 border-[#256b3c] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {!loading && !error && productosProcesados.length === 0 && (
                <div className="text-center py-20 bg-[#F9F6F0] rounded-[32px] border border-black/5 shadow-sm">
                  <p className="text-lg font-bold text-[#1e3325] mb-2 font-raleway">No encontramos productos</p>
                  <p className="text-sm text-[#6b7280] font-raleway">Intenta ajustar tu búsqueda o limpiar los filtros.</p>
                  <button onClick={limpiarFiltros} className="mt-6 px-6 py-2.5 bg-[#1e3325] text-white text-sm font-bold rounded-full font-raleway hover:bg-[#256b3c] transition-colors">Limpiar filtros</button>
                </div>
              )}

              {/* GRID DE PRODUCTOS (2 MÓVIL, 3 PC) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {!loading && !error && productosProcesados.map((prod) => (
                  <div key={prod.id} className="bg-[#F9F6F0] rounded-[32px] p-4 md:p-6 shadow-sm border border-black/5 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/card">
                    
                    <Link to={`/producto/${prod.id}`} className="block relative cursor-pointer flex-grow flex flex-col">
                      
                      <div className="bg-white rounded-2xl p-4 mb-5 flex justify-center items-center relative h-[160px] md:h-[220px] shadow-sm border border-black/5">
                        {prod.stock === 0 && (
                          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-2xl">
                            <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full text-[11px] transform -rotate-12 font-raleway">Agotado</span>
                          </div>
                        )}
                        <img 
                          src={prod.imagen} 
                          alt={prod.nombre} 
                          className={`h-full object-contain mix-blend-multiply drop-shadow-md transition-transform duration-500 ${prod.stock > 0 ? 'group-hover/card:scale-110' : 'opacity-60'}`}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Sin+Imagen" }}
                        />
                      </div>

                      <div className="flex-grow flex flex-col">
                        <h3 className="font-bold text-[#1e3325] text-[15px] md:text-[18px] leading-tight mb-1.5 font-raleway group-hover/card:text-[#256b3c] transition-colors">
                          {prod.nombre}
                        </h3>
                        <span className="text-[#a3b18a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase block mb-3 font-raleway">
                          {prod.categoria || prod.especialidad}
                        </span>
                        
                        <p className="text-[#6b7280] text-[11px] md:text-[13px] leading-snug line-clamp-3 mb-4 font-raleway">
                          {prod.descripcion}
                        </p>
                      </div>
                    </Link>

                    <div className="mt-auto">
                      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-5 gap-2">
                        <span className="font-bold text-[18px] md:text-[22px] text-[#1e3325] font-raleway">
                          S/ {prod.precio.toFixed(0)}
                        </span>
                        <span className="bg-white text-[#8a9096] text-[9px] md:text-[10px] px-2.5 md:px-3 py-1.5 rounded-full font-bold border border-black/5 font-raleway">
                          Bajo indicación médica
                        </span>
                      </div>
                      
                      <button
                        onClick={() => agregarAlCarrito(prod)}
                        disabled={prod.stock === 0}
                        className={`w-full font-bold text-[12px] md:text-[14px] py-3.5 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-raleway shadow-sm
                          ${prod.stock > 0
                            ? 'bg-[#1e3325] text-white hover:bg-[#256b3c] hover:shadow-md'
                            : 'bg-white text-gray-400 border border-gray-200 cursor-not-allowed'
                          }`}
                      >
                        + Agregar al carrito
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </main>

        {/* NOTA INFERIOR */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-6">
          <p className="text-[#8a9096] text-[12px] md:text-[13px] font-medium leading-relaxed font-raleway bg-[#F9F6F0] p-4 rounded-2xl border border-black/5">
            También contamos con Basestar (Vitamina D 25,000 y 50,000 UI), Myo Inositol/D-Chiro y Vitamina B12 — consulta disponibilidad con tu médico antes de agregarlos a tu pedido.
          </p>
        </div>

        {/* SECCIÓN DE ALIADOS ESTRATÉGICOS */}
        <section className="py-12 border-t border-black/5 bg-[#F9F6F0] overflow-hidden flex flex-col items-center">
          <h3 className="text-[#A68A61] font-bold text-[12px] tracking-[0.2em] uppercase mb-10 font-raleway text-center">
            Nuestros aliados estratégicos
          </h3>
          
          <div className="carousel-container relative w-full flex overflow-hidden">
            <style>
              {`
                @keyframes slide {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-100%); }
                }
                .animate-slide {
                  animation: slide 40s linear infinite; 
                }
                .carousel-container:hover .animate-slide {
                  animation-play-state: paused;
                }
              `}
            </style>
            
            <div className="flex animate-slide whitespace-nowrap items-center shrink-0">
              {aliados.map((logo, index) => (
                <img 
                  key={`logo-1-${index}`} 
                  src={`/${logo}`} 
                  alt={`Logo Aliado ${index}`} 
                  className="h-10 md:h-12 w-auto object-contain mx-10 transition-transform duration-300 hover:scale-105 filter grayscale hover:grayscale-0"
                />
              ))}
            </div>

            <div className="flex animate-slide whitespace-nowrap items-center shrink-0">
              {aliados.map((logo, index) => (
                <img 
                  key={`logo-2-${index}`} 
                  src={`/${logo}`} 
                  alt={`Logo Aliado duplicado ${index}`} 
                  className="h-10 md:h-12 w-auto object-contain mx-10 transition-transform duration-300 hover:scale-105 filter grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ProductosPage;