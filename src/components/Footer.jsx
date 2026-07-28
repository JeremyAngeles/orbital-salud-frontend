import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F1F2F3] text-os-ink-soft font-sans pt-[72px] border-t border-black/5">
      <div className="max-w-[1180px] mx-auto px-8">
        
        {/* === GRID PRINCIPAL (3 Columnas) === */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12 pb-12 border-b border-black/10">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="flex flex-col items-start">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img 
                src="/logo.png" 
                alt="Orbital Salud" 
                className="h-[44px] w-auto object-contain mb-[16px]" 
              />
            </Link>
            <p className="text-[14px] leading-relaxed max-w-[280px]">
              Centro de metabolismo y obesidad.<br />
              Bajamos de peso tratando la causa metabólica y hormonal, no solo la balanza — para adultos y niños. Av. Brasil 2730, consultorio 1106, Edificio Qualis, Pueblo Libre, Lima.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h5 className="text-os-ink font-serif text-[15px] font-semibold mb-[18px]">
              Enlaces
            </h5>
            <ul className="flex flex-col gap-[11px] text-[14px]">
              <li><Link to="/especialidades" className="hover:text-os-accent transition-colors">Especialidades</Link></li>
              <li><Link to="/equipo" className="hover:text-os-accent transition-colors">Equipo</Link></li>
              <li><Link to="/productos" className="hover:text-os-accent transition-colors">Tienda</Link></li>
              <li><Link to="/faq" className="hover:text-os-accent transition-colors">Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h5 className="text-os-ink font-serif text-[15px] font-semibold mb-[18px]">
              Contacto
            </h5>
            <ul className="flex flex-col gap-[11px] text-[14px]">
              <li>WhatsApp: 981 009 863</li>
              <li>Av. Brasil 2730, of. 1106 — Edif. Qualis</li>
              <li>Pueblo Libre, Lima</li>
              <li>Horario: Lun-Sáb 9am-6pm</li>
              <li>Instagram / TikTok: por confirmar</li>
            </ul>
          </div>

        </div>

        {/* === COPYRIGHT Y REDES (Bottom) === */}
        <div className="flex flex-col md:flex-row justify-between items-center py-[26px] text-[12.5px]">
          <p>
            © {new Date().getFullYear()} Orbital Salud. Todos los derechos reservados.
          </p>
          
          {/* Enlaces de Redes en línea texto */}
          <div className="flex gap-2 mt-4 md:mt-0 items-center font-medium">
            <a href="#" className="hover:text-os-accent transition-colors">Instagram</a>
            <span className="text-os-ink-soft/50">·</span>
            <a href="#" className="hover:text-os-accent transition-colors">TikTok</a>
            <span className="text-os-ink-soft/50">·</span>
            <a href="#" className="hover:text-os-accent transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;