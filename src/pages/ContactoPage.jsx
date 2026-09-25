import React from 'react';
import Footer from '../components/Footer';

const ContactoPage = () => {
  return (
   
    <div className="min-h-screen flex flex-col bg-white font-raleway">
      
      <main className="flex-grow pt-20 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-[1250px] mx-auto px-6 lg:px-8">
          
          {/* HEADER CONTACTO */}
          <div className="text-center mb-16">
            <span className="text-[#a3b18a] font-bold text-[11px] md:text-[13px] tracking-[0.25em] uppercase mb-4 block font-raleway">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1e3325] leading-tight font-raleway">
              Estamos aquí para ayudarte
            </h1>
            <p className="text-[#6b7280] text-[15px] md:text-[17px] mt-6 max-w-2xl mx-auto font-raleway leading-relaxed">
              Resuelve tus dudas, agenda una cita o visítanos. Nuestro equipo médico está listo para acompañarte en tu proceso de salud metabólica.
            </p>
          </div>

          {/* GRID DE 4 TARJETAS (Fondo basado en tu segunda imagen: #F9F6F0) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Tarjeta 1: Dirección */}
            <div className="bg-[#F9F6F0] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm text-[#256b3c]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="text-[#1e3325] font-bold text-[15px] tracking-widest uppercase mb-3 font-raleway">Dirección</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-raleway">
                Av. Brasil 2730, Of. 1106<br />
                Pueblo Libre, Lima
              </p>
            </div>

            {/* Tarjeta 2: Teléfono */}
            <div className="bg-[#F9F6F0] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm text-[#256b3c]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="text-[#1e3325] font-bold text-[15px] tracking-widest uppercase mb-3 font-raleway">Teléfono</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-raleway">
                +51 981 009 863<br />
                Atención vía WhatsApp
              </p>
            </div>

            {/* Tarjeta 3: Correo */}
            <div className="bg-[#F9F6F0] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm text-[#256b3c]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-[#1e3325] font-bold text-[15px] tracking-widest uppercase mb-3 font-raleway">Correo</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-raleway">
                citas@orbitalsalud.pe<br />
                info@orbitalsalud.pe
              </p>
            </div>

            {/* Tarjeta 4: Horario */}
            <div className="bg-[#F9F6F0] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm text-[#256b3c]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-[#1e3325] font-bold text-[15px] tracking-widest uppercase mb-3 font-raleway">Horario</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-raleway">
                Lunes a Viernes: 9am - 6pm<br />
                Sábados: 9am - 1pm
              </p>
            </div>
          </div>

          {/* BANNER COMUNIDAD (Basado en tu primera imagen) */}
          <div className="bg-[#F9F6F0] rounded-[32px] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between mb-16 border border-black/5">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-[#1e3325] font-bold text-[18px] md:text-[22px] tracking-wide mb-2 font-raleway">
                ÚNETE A NUESTRA COMUNIDAD
              </h2>
              <p className="text-[#6b7280] text-[15px] font-raleway">
                Descubre tips, casos reales y novedades para cuidar tu metabolismo.
              </p>
            </div>
            
            <div className="flex gap-4">
              {/* FB Icon */}
              <a href="#" aria-label="Facebook" className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1e3325] hover:bg-[#256b3c] hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              {/* IG Icon */}
              <a href="#" aria-label="Instagram" className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1e3325] hover:bg-[#256b3c] hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* TikTok Icon */}
              <a href="#" aria-label="TikTok" className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1e3325] hover:bg-[#256b3c] hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.27-1.15 4.14-2.91 5.37-1.76 1.24-4 1.64-6.02 1.09-2.02-.54-3.66-2-4.52-3.87-.86-1.87-.8-4.08.15-5.9 1.04-2.01 3.12-3.37 5.37-3.53.05-1.39.01-2.79.03-4.18-3.41.35-6.39 2.59-7.53 5.81-1.14 3.21-.31 6.88 2.11 9.4 2.42 2.51 6.19 3.51 9.53 2.53 3.33-.97 5.76-3.79 6.25-7.2.06-.42.06-.85.06-1.28.01-4.8.01-9.59.01-14.39-1.74-.01-3.48-.01-5.22-.02z"/></svg>
              </a>
            </div>
          </div>

          {/* MAPA A PANTALLA COMPLETA EN SU CONTENEDOR */}
          <div className="w-full h-[450px] lg:h-[550px] bg-white rounded-[32px] overflow-hidden shadow-sm border border-black/5 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.73711903673!2d-77.06587932398418!3d-12.061596742825656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c906de3c9f27%3A0x3344d32cfdcf8369!2sAv.%20Brasil%202730%2C%20Pueblo%20Libre%2015083!5e0!3m2!1ses-419!2spe!4v1716335123456!5m2!1ses-419!2spe" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
              className="grayscale-[0.2] contrast-125 transition-all duration-500 group-hover:grayscale-0" title="Ubicación Orbital Salud">
            </iframe>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactoPage;