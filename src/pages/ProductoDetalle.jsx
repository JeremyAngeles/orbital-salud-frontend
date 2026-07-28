import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const ProductoDetalle = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCart(); // Usamos la función global
  
  const [producto, setProducto] = useState(null);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Controles de la página
  const [cantidad, setCantidad] = useState(1);
  const [seccionActiva, setSeccionActiva] = useState('descripcion'); // 'descripcion' o 'beneficios'

  useEffect(() => {
    const fetchDatos = async () => {
      setLoading(true);
      try {
        const resProducto = await fetch(`http://localhost:3000/api/productos/${id}`);
        const dataProducto = await resProducto.json();
        
        const resTodos = await fetch('http://localhost:3000/api/productos');
        const dataTodos = await resTodos.json();

        const relacionados = dataTodos.filter(p => 
          p.estado === 'ACTIVO' && 
          p.id !== dataProducto.id && 
          (p.categoria === dataProducto.categoria || p.especialidad === dataProducto.especialidad)
        ).slice(0, 4); 

        setProducto(dataProducto);
        setProductosRelacionados(relacionados);
        setCantidad(1); 
        setLoading(false);
      } catch (error) {
        console.error("Error cargando el producto:", error);
        setLoading(false);
      }
    };

    fetchDatos();
    window.scrollTo(0, 0); 
  }, [id]);

  const sumarCantidad = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-8 h-8 border-4 border-[#2E4B34] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!producto) {
    return <div className="min-h-screen flex justify-center items-center bg-white text-xl font-bold text-gray-800">Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <div className="flex-grow max-w-[1200px] mx-auto w-full px-4 py-10">
        
        <div className="text-sm text-gray-500 mb-8 font-medium flex items-center gap-2">
          <Link to="/productos" className="hover:text-black transition-colors">Inicio</Link> 
          <span>/</span> 
          {(producto.categoria || producto.especialidad) && (
            <>
              <span className="text-gray-500">{producto.categoria || producto.especialidad}</span> 
              <span>/</span>
            </>
          )}
          <span className="text-black font-bold uppercase">{producto.nombre}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          <div className="bg-white rounded-2xl p-8 flex justify-center items-center">
            <img 
              src={producto.url_imagen_cloudinary || "https://via.placeholder.com/400x400/FFFFFF/2E4B34?text=Sin+Imagen"} 
              alt={producto.nombre} 
              className="max-w-full h-auto object-contain mix-blend-multiply drop-shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>

          <div className="flex flex-col pt-4">
            <h1 className="text-4xl font-black text-[#1a1a1a] uppercase mb-4 tracking-tight">
              {producto.nombre}
            </h1>
            
            <p className="text-2xl font-bold text-[#1a1a1a] mb-8">
              S/ {Number(producto.precio).toFixed(2)}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold text-gray-800 uppercase w-32">Presentación :</span>
              
              <div className="flex gap-4 items-center flex-wrap">
                <div className="flex bg-[#333333] text-white rounded">
                  <button onClick={restarCantidad} className="px-4 py-2 hover:bg-black transition-colors font-bold">-</button>
                  <div className="px-4 py-2 bg-[#444444] border-x border-gray-600 w-12 text-center">{cantidad}</div>
                  <button onClick={sumarCantidad} className="px-4 py-2 hover:bg-black transition-colors font-bold">+</button>
                </div>
                
                <button 
                  onClick={() => agregarAlCarrito(producto, cantidad)}
                  disabled={producto.stock === 0}
                  className={`px-8 py-2.5 font-bold uppercase text-sm rounded transition-colors ${producto.stock > 0 ? 'bg-[#FFC107] hover:bg-[#e0a800] text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                >
                  {producto.stock > 0 ? 'Agregar al carrito' : 'Agotado'}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-8 font-medium">Stock disponible: {producto.stock} unidades</p>

            <div className="border-t border-gray-200">
              
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => setSeccionActiva(seccionActiva === 'descripcion' ? '' : 'descripcion')}
                  className="w-full py-4 flex justify-between items-center text-sm font-bold text-[#FFC107] uppercase"
                >
                  Descripción
                  <span className="text-gray-400 font-normal">{seccionActiva === 'descripcion' ? '∧' : '∨'}</span>
                </button>
                {seccionActiva === 'descripcion' && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed pr-4 whitespace-pre-line">
                    {producto.descripcion}
                  </div>
                )}
              </div>

              {producto.beneficios && (
                <div className="border-b border-gray-200">
                  <button 
                    onClick={() => setSeccionActiva(seccionActiva === 'beneficios' ? '' : 'beneficios')}
                    className="w-full py-4 flex justify-between items-center text-sm font-bold text-gray-800 uppercase hover:text-[#FFC107] transition-colors"
                  >
                    Beneficios
                    <span className="text-gray-400 font-normal">{seccionActiva === 'beneficios' ? '∧' : '∨'}</span>
                  </button>
                  {seccionActiva === 'beneficios' && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed pr-4 whitespace-pre-line">
                      {producto.beneficios}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {productosRelacionados.length > 0 && (
          <div className="mt-20 mb-10">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase mb-8 border-t border-gray-200 pt-8 tracking-tight">
              Te puede interesar
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {productosRelacionados.map(rel => (
                <Link to={`/producto/${rel.id}`} key={rel.id} className="group bg-white p-4 text-center flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={rel.url_imagen_cloudinary || "https://via.placeholder.com/200x200"} 
                      alt={rel.nombre} 
                      className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] text-sm uppercase leading-tight mb-1 group-hover:text-[#FFC107] transition-colors">{rel.nombre}</h3>
                  <p className="text-xs text-gray-500 mb-2">{rel.categoria || rel.especialidad}</p>
                  <p className="font-black text-black mt-auto">S/ {Number(rel.precio).toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default ProductoDetalle;