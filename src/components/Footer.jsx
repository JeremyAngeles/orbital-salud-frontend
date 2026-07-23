import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-os-dark text-[#cbbca9] font-sans pt-32 pb-8 overflow-hidden">
      
      {/* === ONDA SUPERIOR DEL FOOTER === */}
      {/* Conecta a la perfección el blanco de "Horarios" con el verde oscuro del Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[100px]" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y descripción */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-bold text-white tracking-wide">
              Orbital<span className="text-[#a68a61] italic">Salud</span>
            </h2>
            <p className="text-[14px] leading-relaxed opacity-90">
              Un enfoque médico integral donde tratamos la causa, no solo el síntoma. Tu balance metabólico y hormonal en manos de expertos.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-6 uppercase tracking-widest">Navegación</h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes y Precios</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Nuestro Equipo</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-6 uppercase tracking-widest">Contacto</h4>
            <ul className="flex flex-col gap-4 text-[14px]">
              <li className="flex items-start gap-3">
                <span className="text-[#a68a61]">📍</span>
                <span>Av. Brasil 2730, Cons. 1106<br/>Edificio Qualis, Pueblo Libre</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#a68a61]">📞</span>
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#a68a61]">✉️</span>
                <span>contacto@orbitalsalud.pe</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-6 uppercase tracking-widest">Síguenos</h4>
            <div className="flex gap-4">
              {/* Icono FB */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a61] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Icono IG */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a61] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
          <p className="opacity-70">
            © {new Date().getFullYear()} Orbital Salud. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 opacity-70">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;