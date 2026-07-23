import React, { useState } from 'react';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactoPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { pregunta: "¿Cuánto cuesta la consulta?", respuesta: "Depende de la especialidad. Puedes ver el precio de cada una en la sección de Especialidades, o escribirnos por WhatsApp." },
    { pregunta: "¿Las consultas son presenciales o virtuales?", respuesta: "Ambas modalidades están disponibles según la especialidad y tu preferencia. Indícalo al agendar." },
    { pregunta: "¿Atienden niños?", respuesta: "Sí, contamos con endocrinología pediátrica además de la atención para adultos." },
    { pregunta: "¿Qué debo llevar a mi consulta?", respuesta: "Tus últimos análisis de laboratorio (si los tienes) y una lista de los medicamentos que tomas actualmente." },
    { pregunta: "¿Puedo reprogramar mi cita?", respuesta: "Sí, escríbenos por WhatsApp con anticipación y te reagendamos sin costo adicional." },
    { pregunta: "¿Qué pasa si no puedo asistir?", respuesta: "Avísanos lo antes posible por WhatsApp para coordinar una nueva fecha." }
  ];

  return (
    // Contenedor principal con fondo blanco para que haga match con el footer
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-grow">
        
        {/* =========================================
            SECCIÓN 1: CONTACTO Y MAPA (Fondo Beige) 
            ========================================= */}
        <section className="bg-os-beige pt-20 md:pt-28 pb-24 md:pb-32 relative z-10">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Lado Izquierdo: Información */}
              <div>
                <span className="text-[#a68a61] font-bold text-[11px] md:text-[12px] tracking-[0.25em] uppercase mb-4 block font-sans">
                  Contáctanos
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-os-dark mb-8 leading-tight">
                  Estamos aquí para <br className="hidden md:block" />ayudarte
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-os-dark mt-1 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[18px] text-os-dark mb-1">Nuestra Clínica</h4>
                      <p className="font-sans text-os-ink text-[15px] leading-relaxed">Av. Brasil 2730, Cons. 1106<br/>Edificio Qualis, Pueblo Libre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-os-dark mt-1 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[18px] text-os-dark mb-1">Horario de Atención</h4>
                      <p className="font-sans text-os-ink text-[15px] leading-relaxed">Lunes a Viernes: 8:00 AM - 8:00 PM<br/>Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-os-dark mt-1 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[18px] text-os-dark mb-1">WhatsApp / Citas</h4>
                      <p className="font-sans text-os-ink text-[15px] leading-relaxed mb-3">+51 987 654 321</p>
                      <a href="https://wa.me/51987654321" target="_blank" rel="noreferrer" className="inline-block bg-os-dark text-white px-6 py-2.5 rounded-full font-sans font-semibold text-[13px] hover:bg-os-medium transition-colors shadow-sm">
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Derecho: Mapa */}
              <div className="w-full h-[400px] lg:h-[500px] bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.73711903673!2d-77.06587932398418!3d-12.061596742825656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c906de3c9f27%3A0x3344d32cfdcf8369!2sAv.%20Brasil%202730%2C%20Pueblo%20Libre%2015083!5e0!3m2!1ses-419!2spe!4v1716335123456!5m2!1ses-419!2spe" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                  className="grayscale-[0.2] contrast-125 transition-all duration-500 group-hover:grayscale-0" title="Ubicación Orbital Salud">
                </iframe>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            SECCIÓN 2: PREGUNTAS FRECUENTES (Fondo Blanco)
            ========================================= */}
        <section className="bg-white relative pt-24 pb-24 md:pt-32 md:pb-32 z-10">
          
          {/* OLA DE TRANSICIÓN: Se dibuja en color beige sobre el fondo blanco */}
          <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-0">
            <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="text-os-beige fill-current"></path>
            </svg>
          </div>

          <div className="max-w-[800px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#a68a61] font-bold text-[11px] md:text-[12px] tracking-[0.25em] uppercase mb-4 block font-sans">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-os-dark mb-4 leading-tight">
                Resolvemos tus dudas
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-5">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-os-beige rounded-[1.25rem] shadow-sm border border-black/5 overflow-hidden transition-all duration-300">
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 md:py-6 flex justify-between items-center text-left focus:outline-none">
                    <span className="font-bold text-os-dark font-serif text-[16px] md:text-[18px] pr-4">{faq.pregunta}</span>
                    <span className="text-[#cbbca9] text-2xl leading-none font-light shrink-0 transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </button>
                  <div className={`px-6 text-os-ink font-sans text-[14px] md:text-[15.5px] leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                    {faq.respuesta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <WhatsAppButton/>
      <Footer />
    </div>
  );
};

export default ContactoPage;