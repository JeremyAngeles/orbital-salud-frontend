import React, { useState } from 'react';
import Footer from '../components/Footer';

const MOCK_PRODUCTOS = [
  { id: 1, nombre: "Glucosamina y Condroitina", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Suplemento", descripcion: "Suplemento de Glucosamina y Condroitina.", precio: 89.90, descuento: null, stock: 15 },
  { id: 2, nombre: "B-Vat Protek (Hepaprotector)", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=B-Vat", descripcion: "Es un hepaprotector y desintoxicante.", precio: 120.00, descuento: null, stock: 8 },
  { id: 3, nombre: "FITURAL (para la próstata)", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Fitural", descripcion: "Ayuda a aliviar síntomas de la próstata.", precio: 30.00, precioAntiguo: 60.00, descuento: "-50%", stock: 1 },
  { id: 4, nombre: "FULL-VAT (Shot de energía)", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Full-Vat", descripcion: "Solución oral multivitamínica.", precio: 36.60, descuento: null, stock: 25 },
  { id: 5, nombre: "L - Mesitran Soft", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=L-Mesitran", descripcion: "Gel hidroactivo antibacteriano.", precio: 100.00, descuento: null, stock: 5 },
  { id: 6, nombre: "Oramin-F Multivitamínico", imagen: "https://via.placeholder.com/200x200/FFFFFF/2E4B34?text=Oramin-F", descripcion: "Multivitamínico con Ginseng.", precio: 75.00, descuento: null, stock: 12 }
];

const CATEGORIAS = [
  { nombre: "Dermatología", icono: "💧" }, { nombre: "Endocrinología", icono: "🩺" }, { nombre: "Vitaminas", icono: "⚡" },
  { nombre: "Cuidado Facial", icono: "✨" }, { nombre: "Nutrición", icono: "🥗" }, { nombre: "Articulación", icono: "🦴" }, { nombre: "Inmunidad", icono: "🛡️" }
];

const ProductosPage = () => {
  const [productos] = useState(MOCK_PRODUCTOS);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recomendados");

  const productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F2EFE6] font-sans flex flex-col">
      
      {/* Contenedor relativo principal con z-20 */}
      <div className="flex-grow relative flex flex-col z-20">
        
        <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 pb-32 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-serif font-bold text-[#2E4B34]">Nuestros Productos</h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-[300px]">
                <input 
                  type="text" 
                  placeholder="Buscar productos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#A3B18A]/50 focus:outline-none focus:border-[#2E4B34] focus:ring-1 focus:ring-[#2E4B34] bg-white text-[#2E4B34] text-sm"
                />
                <svg className="w-5 h-5 absolute left-3 top-2.5 text-[#6B7C5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2.5 rounded-full border border-[#A3B18A]/50 bg-white text-[#2E4B34] text-sm focus:outline-none cursor-pointer">
                <option value="recomendados">Ordenar por: Recomendados</option>
                <option value="menor-precio">Menor precio</option>
                <option value="mayor-precio">Mayor precio</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-[280px] flex-shrink-0">
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#A3B18A]/20 sticky top-24">
                <div className="flex justify-between items-center mb-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-[#2E4B34]">Categorías</h3>
                  <svg className="w-5 h-5 text-[#2E4B34]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                </div>
                <ul className="space-y-4 mb-8">
                  {CATEGORIAS.map((cat, idx) => (
                    <li key={idx} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-lg opacity-70 grayscale group-hover:grayscale-0 transition-all">{cat.icono}</span>
                        <span className="text-[#6B7C5A] text-sm group-hover:text-[#2E4B34] transition-colors">{cat.nombre}</span>
                      </div>
                      <input type="checkbox" className="w-4 h-4 rounded border-[#A3B18A] text-[#2E4B34] focus:ring-[#2E4B34] cursor-pointer accent-[#2E4B34]" />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {productosFiltrados.map((prod) => (
                <div key={prod.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-[#A3B18A]/20 flex flex-col relative group hover:shadow-md transition-shadow">
                  {prod.descuento && <span className="absolute top-4 left-4 bg-[#2E4B34] text-white text-[11px] font-bold px-2 py-1 rounded-full z-10">{prod.descuento}</span>}
                  <h3 className="text-center font-bold text-[#2E4B34] text-[15px] min-h-[44px] mb-2 leading-tight">{prod.nombre}</h3>
                  <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-[#F2EFE6]/30">
                    <img src={prod.imagen} alt={prod.nombre} className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-center text-[12px] text-[#6B7C5A] line-clamp-2 mb-4 h-[36px]">{prod.descripcion}</p>
                  <div className="text-center mb-4">
                    {prod.precioAntiguo && <span className="text-[#A3B18A] line-through text-[13px] mr-2">S/ {prod.precioAntiguo.toFixed(2)}</span>}
                    <span className="text-xl font-bold text-[#2E4B34]">S/ {prod.precio.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-4 mt-auto">
                    <button className="w-full bg-[#2E4B34] text-white font-bold text-[13px] py-2.5 rounded-full hover:bg-[#1f3323] transition-colors">Añadir al carrito</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* MAGIA: Misma onda beige aquí para tapar el Footer sin modificarlo */}
        <div className="absolute top-full left-0 w-full overflow-hidden leading-none rotate-180 z-30">
          <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[100px]" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#F2EFE6"></path>
          </svg>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default ProductosPage;