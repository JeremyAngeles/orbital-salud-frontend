import { useEffect, useState } from 'react';
import axios from 'axios';
import EnfoqueIntegral from '../components/EnfoqueIntegral';
import TratamientoDestacado from '../components/TratamientoDestacado';
import Especialidades from '../components/Especialidades';
import Planes from '../components/Planes';
import InbodySection from '../components/InbodySection'; // AQUÍ IMPORTAMOS EL NUEVO COMPONENTE

import Horarios from '../components/Horarios';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/publicaciones');
        const activas = response.data.filter(pub => pub.estado === 'ACTIVO');
        setPublicaciones(activas);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error al cargar las publicaciones');
        setLoading(false);
      }
    };

    fetchPublicaciones();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-os-beige">
      
      <main className="flex-grow">
        <section id="agenda" className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-xl">
              <span className="text-[#a68a61] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-5 block font-sans">
                Medicina Metabólica Integral · Pueblo Libre, Lima
              </span>
              
              <h1 className="text-5xl lg:text-[64px] leading-[1.1] mb-6 font-serif text-os-dark">
                <span className="font-bold">Orbital</span> <span className="italic text-[#a68a61]">Salud</span><br/>
                <span className="italic text-[#a68a61]">Metabolismo Integral</span>
              </h1>
              
              <p className="text-os-ink text-[17px] leading-relaxed mb-10 max-w-[420px] font-sans font-medium">
                Centro integral de salud metabólica y hormonal, para adultos y niños. Tratamos la causa, no solo el síntoma.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contacto" className="bg-os-dark text-os-beige px-7 py-3.5 rounded-full font-semibold hover:bg-os-medium transition shadow-md flex items-center justify-center gap-3 font-sans text-[15px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.399A7.968 7.968 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.121 4.094L.133 15.867l3.905-1.02A7.95 7.95 0 0 0 8 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.601zM8 14.653a6.59 6.59 0 0 1-3.364-1.22l-.241-.143-2.502.655.666-2.438-.157-.25A6.574 6.574 0 0 1 1.408 8c0-3.626 2.951-6.577 6.592-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577zm3.46-4.736c-.19-.095-1.121-.553-1.295-.616-.174-.063-.301-.095-.428.095-.127.19-.489.616-.599.742-.111.127-.222.143-.413.048-.19-.095-.8-.295-1.523-.935-.562-.498-.941-1.111-1.052-1.302-.111-.19-.012-.293.083-.388.084-.084.19-.222.285-.332.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.332-.048-.095-.428-1.032-.587-1.413-.156-.37-.313-.32-.428-.326-.111-.006-.238-.006-.365-.006-.127 0-.332.048-.506.238-.174.19-.665.65-.665 1.587 0 .936.681 1.841.776 1.968.095.127 1.341 2.049 3.242 2.868.452.194.805.31 1.08.397.453.144.865.123 1.19.075.364-.054 1.121-.458 1.279-.901.159-.443.159-.822.111-.901-.048-.079-.174-.127-.365-.222z"/>
                  </svg>
                  Agendar por WhatsApp
                </a>
                
                <a href="/especialidades" className="border border-os-dark text-os-dark px-7 py-3.5 rounded-full font-semibold hover:bg-os-dark hover:text-os-beige transition flex items-center justify-center font-sans text-[15px]">
                  Conoce nuestras especialidades
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end lg:pr-8 mt-12 md:mt-0">
              <div className="relative inline-block">
                <img 
                  src="/doctor_principal.jpg" 
                  alt="Dra. Angélica Caycho" 
                  className="w-[90%] md:w-[420px] h-auto object-cover rounded-[2rem] border-[10px] border-white shadow-xl mx-auto md:mx-0"
                />
                
                <div className="absolute -bottom-8 -left-4 sm:-left-12 bg-os-dark text-white p-5 rounded-xl shadow-2xl z-10 min-w-[240px]">
                  <p className="font-serif font-bold text-lg mb-2">Dra. Angélica Caycho</p>
                  <p className="font-sans text-[13px] leading-snug opacity-90">
                    Endocrinóloga ·<br />
                    Fundadora de Orbital<br />
                    Salud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EnfoqueIntegral />

        <TratamientoDestacado contenidos={publicaciones} loading={loading} error={error} />
        
        <div id="especialidades">
          <Especialidades />
        </div>

        <div id="tienda">
          <Planes />
        </div>

        {/* === NUEVO COMPONENTE INBODY === */}
        <InbodySection />
        {/* =============================== */}

        
        
        <Horarios />
        
      </main>
      
      <WhatsAppButton/>
      <Footer />
    </div>
  );
};

export default Home;