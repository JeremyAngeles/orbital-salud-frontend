import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const ProductosPage = () => {
  const { agregarAlCarrito } = useCart(); // Usamos la función global
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados de Filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recomendados");
  const [categoriasActivas, setCategoriasActivas] = useState([]);
  const [especialidadesActivas, setEspecialidadesActivas] = useState([]);
  
  // Estado para abrir/cerrar el panel de filtros EN CELULAR
  const [isFiltrosOpen, setIsFiltrosOpen] = useState(false);
  
  // Estados para el Rango de Precio
  const [maxPrecioReal, setMaxPrecioReal] = useState(1000);
  const [precioFiltro, setPrecioFiltro] = useState(1000);

  useEffect(() => {
    const fetchProductosPublicos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos');
        if (!response.ok) throw new Error('Error al cargar los productos');
        
        const data = await response.json();

        const productosAdaptados = data
          .filter(prod => prod.estado === 'ACTIVO')
          .map(prod => ({
            id: prod.id,
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            beneficios: prod.beneficios || '',
            categoria: prod.categoria ? prod.categoria.trim() : '',
            especialidad: prod.especialidad ? prod.especialidad.trim() : '',
            precio: Number(prod.precio),
            stock: Number(prod.stock),
            imagen: prod.url_imagen_cloudinary || "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Sin+Imagen",
          }));

        setProductos(productosAdaptados);
        
        if (productosAdaptados.length > 0) {
          const maxP = Math.max(...productosAdaptados.map(p => p.precio));
          setMaxPrecioReal(maxP);
          setPrecioFiltro(maxP);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error de conexión:', err);
        setError('No se pudieron cargar los productos.');
        setLoading(false);
      }
    };

    fetchProductosPublicos();
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
    setIsFiltrosOpen(false); // Cerramos el panel en celular si se limpian
  };

  // Lógica de Filtrado
  let productosProcesados = productos.filter(p => {
    const textoBuscado = searchTerm.toLowerCase();
    const matchTexto =
      p.nombre.toLowerCase().includes(textoBuscado) ||
      p.descripcion.toLowerCase().includes(textoBuscado) ||
      p.beneficios.toLowerCase().includes(textoBuscado);
    
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
    <div className="min-h-screen bg-white font-sans flex flex-col relative z-10">
      <div className="flex-grow relative flex flex-col z-20">
        <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-32 relative z-10">
          
          {/* TÍTULO Y BÚSQUEDA */}
          <div className="flex flex-col items-center mb-6 md:mb-10 gap-4 md:gap-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2E4B34] text-center w-full">
              Nuestros Productos
            </h1>
            
            <div className="relative w-full max-w-[400px]">
              <input
                type="text"
                placeholder="Buscar producto o beneficio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 md:py-3 rounded-full border border-[#A3B18A]/50 focus:outline-none focus:border-[#2E4B34] focus:ring-1 focus:ring-[#2E4B34] bg-white text-[#2E4B34] text-sm shadow-sm"
              />
              <svg className="w-5 h-5 absolute left-4 top-2.5 md:top-3.5 text-[#6B7C5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* BARRA DE HERRAMIENTAS (Botón de filtro móvil + Ordenar) */}
          <div className="flex justify-between items-center w-full mb-6 gap-3 lg:justify-end">
            
            {/* Botón Filtros SOLO visible en móvil y tablet (< lg) */}
            <button 
              onClick={() => setIsFiltrosOpen(true)}
              className="lg:hidden flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#A3B18A]/50 bg-white text-[#2E4B34] font-bold text-[13px] shadow-sm active:bg-gray-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              Filtros {filtrosActivosCount > 0 && `(${filtrosActivosCount})`}
            </button>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="flex-1 lg:flex-none px-4 py-2.5 rounded-full border border-[#A3B18A]/50 bg-white text-[#2E4B34] text-[13px] md:text-sm focus:outline-none cursor-pointer shadow-sm"
            >
              <option value="recomendados">Recomendados</option>
              <option value="menor-precio">Menor precio</option>
              <option value="mayor-precio">Mayor precio</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* === PANEL DE FILTROS === */}
            {/* En Móvil: Es un Drawer (Panel deslizante oscuro). En PC: Es el aside lateral fijo */}
            <aside className={`
              fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:static lg:bg-transparent lg:z-auto lg:backdrop-blur-none
              transition-opacity duration-300
              ${isFiltrosOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
            `} onClick={() => setIsFiltrosOpen(false)}> {/* Cierra al clicar en lo negro en celular */}
              
              <div 
                className={`
                  absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-[#E8F0E4] p-6 shadow-2xl overflow-y-auto transform transition-transform duration-300
                  lg:relative lg:w-[280px] lg:h-auto lg:max-w-none lg:shadow-sm lg:rounded-2xl lg:border lg:border-[#d2e0cc] lg:sticky lg:top-24
                  ${isFiltrosOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
                onClick={(e) => e.stopPropagation()} // Evita que se cierre al clicar dentro del panel blanco
              >
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-[#2E4B34]">Filtros</h3>
                  {/* Botón X solo en móvil */}
                  <button onClick={() => setIsFiltrosOpen(false)} className="lg:hidden text-[#2E4B34] hover:text-red-500 bg-white rounded-full p-1 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>

                <div className="mb-8 border-b border-[#c2d6bb] pb-6">
                  <h4 className="text-[13px] font-bold text-[#4a6b39] mb-4 uppercase tracking-wider">Rango de Precio</h4>
                  <input
                    type="range"
                    min="0"
                    max={maxPrecioReal}
                    value={precioFiltro}
                    onChange={(e) => setPrecioFiltro(Number(e.target.value))}
                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-[#2E4B34]"
                  />
                  <div className="flex justify-between text-xs font-bold text-[#2E4B34] mt-3">
                    <span>S/ 0</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Hasta S/ {precioFiltro.toFixed(0)}</span>
                  </div>
                </div>
                
                {especialidadesUnicas.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[13px] font-bold text-[#4a6b39] mb-3 uppercase tracking-wider">Especialidad</h4>
                    <ul className="space-y-3">
                      {especialidadesUnicas.map((esp, idx) => (
                        <li key={`esp-${idx}`} className="flex items-center justify-between cursor-pointer group" onClick={() => toggleFiltro(esp, 'especialidad')}>
                          <span className={`text-[13px] transition-colors ${especialidadesActivas.includes(esp) ? 'text-[#2E4B34] font-black' : 'text-[#5d804b] group-hover:text-[#2E4B34]'}`}>{esp}</span>
                          <input type="checkbox" checked={especialidadesActivas.includes(esp)} readOnly className="w-4 h-4 rounded border-[#A3B18A] text-[#2E4B34] accent-[#2E4B34]" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {categoriasUnicas.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[13px] font-bold text-[#4a6b39] mb-3 uppercase tracking-wider">Categorías</h4>
                    <ul className="space-y-3">
                      {categoriasUnicas.map((cat, idx) => (
                        <li key={`cat-${idx}`} className="flex items-center justify-between cursor-pointer group" onClick={() => toggleFiltro(cat, 'categoria')}>
                          <span className={`text-[13px] transition-colors ${categoriasActivas.includes(cat) ? 'text-[#2E4B34] font-black' : 'text-[#5d804b] group-hover:text-[#2E4B34]'}`}>{cat}</span>
                          <input type="checkbox" checked={categoriasActivas.includes(cat)} readOnly className="w-4 h-4 rounded border-[#A3B18A] text-[#2E4B34] accent-[#2E4B34]" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {(filtrosActivosCount > 0 || searchTerm !== "") && (
                  <button onClick={limpiarFiltros} className="mt-4 w-full py-3 text-[13px] font-bold bg-white text-red-500 rounded-xl hover:bg-red-50 shadow-sm transition-colors">
                    Limpiar todos los filtros
                  </button>
                )}
              </div>
            </aside>

            {/* === RESULTADOS DE PRODUCTOS === */}
            <div className="flex-grow">
              
              {loading && (
                <div className="flex justify-center items-center py-20">
                  <div className="w-8 h-8 border-4 border-[#2E4B34] border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-[#2E4B34] font-bold">Cargando catálogo...</span>
                </div>
              )}
              
              {error && !loading && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center border border-red-200">
                  {error}
                </div>
              )}

              {!loading && !error && productosProcesados.length === 0 && (
                <div className="text-center py-16 text-[#6B7C5A] bg-gray-50 rounded-2xl border border-gray-200 mx-2">
                  <p className="text-base md:text-lg font-bold text-[#2E4B34] mb-2">No encontramos productos</p>
                  <p className="text-sm">Intenta ajustar el precio o limpiar los filtros.</p>
                </div>
              )}

              {/* === GRID RESPONSIVO: 2 EN MÓVIL, 3 EN PC === */}
              {/* Aquí está la magia: grid-cols-2 en todo momento, pero en pc salta a 3 o 4 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                
                {!loading && !error && productosProcesados.map((prod) => (
                  <div key={prod.id} className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    
                    <Link to={`/producto/${prod.id}`} className="block relative pt-3 px-3 md:pt-6 md:px-6 bg-white cursor-pointer group flex-grow">
                      
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 flex flex-col gap-1">
                        {prod.especialidad && (
                          <span className="bg-[#2E4B34] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full shadow-sm">
                            {prod.especialidad}
                          </span>
                        )}
                        {prod.categoria && (
                          <span className="bg-[#A3B18A] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full shadow-sm">
                            {prod.categoria}
                          </span>
                        )}
                      </div>

                      {/* Imagen compacta para celular */}
                      <div className="w-full aspect-square flex items-center justify-center overflow-hidden mb-2 md:mb-4 bg-[#F2EFE6]/30 rounded-xl relative mt-4 md:mt-0">
                        {prod.stock === 0 && (
                          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-10">
                            <span className="bg-red-500 text-white font-bold px-2 py-0.5 md:px-4 md:py-1 rounded-full text-[10px] md:text-sm transform -rotate-12 shadow-sm">
                              Agotado
                            </span>
                          </div>
                        )}
                        <img
                          src={prod.imagen}
                          alt={prod.nombre}
                          className={`w-3/4 h-3/4 object-contain mix-blend-multiply transition-transform duration-300 ${prod.stock > 0 ? 'group-hover:scale-105' : 'opacity-60'}`}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Sin+Imagen" }}
                        />
                      </div>

                      {/* Títulos y textos adaptados para celular */}
                      <h3 className="text-center font-bold text-[#2E4B34] text-[12.5px] md:text-[15px] min-h-[38px] md:min-h-[44px] leading-tight group-hover:text-[#4a7251] transition-colors line-clamp-2">
                        {prod.nombre}
                      </h3>
                      
                      {/* En celular cortamos la descripción a 2 líneas para que no se alargue mucho */}
                      <p className="text-center text-[10px] md:text-[12px] text-[#6B7C5A] line-clamp-2 h-[30px] md:h-[36px] mt-1">
                        {prod.descripcion}
                      </p>
                    </Link>

                    {/* Botonera y precios */}
                    <div className="p-3 md:p-5 pt-0 flex flex-col bg-white mt-auto">
                      <div className="text-center mb-2 md:mb-4 mt-2 md:mt-3">
                        <span className="text-base md:text-xl font-bold text-[#2E4B34]">
                          S/ {prod.precio.toFixed(2)}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => agregarAlCarrito(prod)}
                        disabled={prod.stock === 0}
                        className={`w-full font-bold text-[10px] md:text-[13px] uppercase tracking-wide py-2.5 md:py-3.5 rounded-full transition-colors border-[1px] md:border-[1.5px]
                          ${prod.stock > 0
                            ? 'bg-[#f4f6f3] md:bg-transparent text-[#2E4B34] border-[#2E4B34]/30 md:border-[#2E4B34] hover:bg-[#2E4B34] hover:text-white'
                            : 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200'
                          }`}
                      >
                        {prod.stock > 0 ? 'Agregar' : 'Sin stock'}
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductosPage;