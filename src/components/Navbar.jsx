import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const handleHashClick = (e, id) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault(); 
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `/#${id}`);
      }
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-os-beige/85 backdrop-blur-md border-b border-os-dark/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-3">
        
        {/* === VERSIÓN ESCRITORIO === */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex gap-4 xl:gap-6 items-center justify-start">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-os-ink font-medium hover:text-os-medium transition-colors text-[18px] font-sans whitespace-nowrap">Inicio</Link>
            <Link to="/especialidades" className="text-os-ink font-medium hover:text-os-medium transition-colors text-[18px] font-sans whitespace-nowrap">Especialidades</Link>
          </div>
          
          <div className="flex justify-center shrink-0 mx-4">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img src="/logo.png" alt="Logo Orbital Salud" className="h-[68px] object-contain shrink-0" />
            </Link>
          </div>

          <div className="flex gap-4 xl:gap-6 items-center justify-end">
            <Link to="/equipo" className="text-os-ink font-medium hover:text-os-medium transition-colors text-[18px] font-sans whitespace-nowrap">Equipo</Link>
            {/* AQUÍ ESTÁ EL CAMBIO: Ahora apunta a la página de productos */}
            <Link to="/productos" className="text-os-ink font-medium hover:text-os-medium transition-colors text-[18px] font-sans whitespace-nowrap">Tienda</Link>
            <Link to="/contacto" className="text-os-ink font-medium hover:text-os-medium transition-colors text-[18px] font-sans whitespace-nowrap">Contacto</Link>
            <Link to="/reservar-cita" className="bg-os-dark hover:bg-os-medium text-os-beige px-7 py-2.5 rounded-full text-[18px] font-semibold transition-colors font-sans whitespace-nowrap shrink-0 min-w-max">
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
          <div className="lg:hidden flex flex-col gap-4 pt-4 pb-4 border-t border-os-dark/10 mt-3">
            <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0,0); }} className="text-os-ink font-medium text-[20px] font-sans">Inicio</Link>
            <Link to="/especialidades" onClick={closeMenu} className="text-os-ink font-medium text-[20px] font-sans">Especialidades</Link>
            <Link to="/equipo" onClick={closeMenu} className="text-os-ink font-medium text-[20px] font-sans">Equipo</Link>
            {/* AQUÍ ESTÁ EL CAMBIO MÓVIL: Ahora apunta a la página de productos */}
            <Link to="/productos" onClick={closeMenu} className="text-os-ink font-medium text-[20px] font-sans">Tienda</Link>
            <Link to="/contacto" onClick={closeMenu} className="text-os-ink font-medium text-[20px] font-sans">Contacto</Link>
            <Link to="/reservar-cita" onClick={closeMenu} className="bg-os-dark text-center text-os-beige px-6 py-3 rounded-full text-[16px] font-semibold transition-colors font-sans whitespace-nowrap mt-2">
              Reservar cita
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;