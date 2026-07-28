import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll suave al cargar la página si hay un hash (ej. #resultados)
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Función para manejar clics en enlaces con # (Anclas)
  const handleHashClick = (e, id, targetPath) => {
    setIsOpen(false);
    // Si ya estamos en la página correcta, solo hacemos scroll suave
    if (location.pathname === targetPath) {
      e.preventDefault(); 
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Actualizamos la URL sin recargar
        window.history.pushState(null, '', `${targetPath}#${id}`);
      }
    }
  };

  const closeMenu = () => setIsOpen(false);

  // === FUNCIÓN PARA DETERMINAR EL COLOR DEL ENLACE ACTIVO ===
  const getLinkClass = (path, hash = '') => {
    // Verifica si la ruta y el hash coinciden con la ubicación actual
    const isActive = location.pathname === path && location.hash === hash;
    const baseClass = "text-[14.5px] font-sans whitespace-nowrap transition-colors";
    
    // Si está activo: Verde principal y bold. Si no: Gris oscuro y semibold.
    return `${baseClass} ${isActive ? "text-[#256b3c] font-bold" : "text-os-ink font-semibold hover:text-[#256b3c]"}`;
  };

  // Versión para el menú móvil
  const getMobileLinkClass = (path, hash = '') => {
    const isActive = location.pathname === path && location.hash === hash;
    const baseClass = "font-bold text-[17px] border-b border-black/5 pb-3 font-sans transition-colors block";
    return `${baseClass} ${isActive ? "text-[#256b3c]" : "text-os-ink"}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="max-w-[1180px] mx-auto px-8 py-2.5">
        
        {/* === VERSIÓN ESCRITORIO === */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full gap-5">
          
          {/* Lado Izquierdo */}
          <div className="flex gap-7 items-center justify-start">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className={getLinkClass('/', '')}>
              Inicio
            </Link>
            <Link to="/especialidades" className={getLinkClass('/especialidades', '')}>
              Especialidades
            </Link>
            <Link to="/inbody" onClick={() => window.scrollTo(0,0)} className={getLinkClass('/inbody', '')}>
              InBody
            </Link>
            <Link 
              to="/inbody#resultados" 
              onClick={(e) => handleHashClick(e, 'resultados', '/inbody')} 
              className={getLinkClass('/inbody', '#resultados')}
            >
              Resultados
            </Link>
          </div>
          
          {/* Logo Central */}
          <div className="flex justify-center shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img src="/logo.png" alt="Logo Orbital Salud" className="h-[64px] w-auto object-contain shrink-0" />
            </Link>
          </div>

          {/* Lado Derecho */}
          <div className="flex gap-6 items-center justify-end">
            <Link to="/equipo" className={getLinkClass('/equipo', '')}>
              Equipo
            </Link>
            <Link to="/productos" className={getLinkClass('/productos', '')}>
              Tienda
            </Link>
            <Link to="/contacto" className={getLinkClass('/contacto', '')}>
              Contacto
            </Link>
            
            {/* Botón de Reserva (Color actualizado) */}
            <Link to="/reservar-cita" className="bg-[#256b3c] hover:bg-[#1e542f] text-white px-6 py-[11px] rounded-full text-[14px] font-bold transition-all shadow-md hover:shadow-lg font-sans whitespace-nowrap shrink-0 ml-1">
              Reservar cita
            </Link>
          </div>
        </div>

        {/* === VERSIÓN MÓVIL === */}
        <div className="flex lg:hidden justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo(0,0)}>
            <img src="/logo.png" alt="Logo Orbital Salud" className="h-[52px] object-contain shrink-0" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-os-dark p-2 focus:outline-none shrink-0" aria-label="Abrir menú">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* === MENÚ DESPLEGABLE MÓVIL === */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 pt-4 pb-4 border-t border-black/5 mt-3 animate-fadeIn">
            <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0,0); }} className={getMobileLinkClass('/', '')}>Inicio</Link>
            <Link to="/especialidades" onClick={closeMenu} className={getMobileLinkClass('/especialidades', '')}>Especialidades</Link>
            <Link to="/inbody" onClick={() => { closeMenu(); window.scrollTo(0,0); }} className={getMobileLinkClass('/inbody', '')}>InBody</Link>
            <Link to="/inbody#resultados" onClick={(e) => handleHashClick(e, 'resultados', '/inbody')} className={getMobileLinkClass('/inbody', '#resultados')}>Resultados</Link>
            <Link to="/equipo" onClick={closeMenu} className={getMobileLinkClass('/equipo', '')}>Equipo</Link>
            <Link to="/productos" onClick={closeMenu} className={getMobileLinkClass('/productos', '')}>Tienda</Link>
            <Link to="/contacto" onClick={closeMenu} className={getMobileLinkClass('/contacto', '')}>Contacto</Link>
            
            {/* Botón de Reserva Móvil (Color actualizado) */}
            <Link to="/reservar-cita" onClick={closeMenu} className="bg-[#256b3c] text-center text-white px-6 py-3.5 rounded-full text-[16px] font-bold shadow-md mt-4 font-sans">
              Reservar cita
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;