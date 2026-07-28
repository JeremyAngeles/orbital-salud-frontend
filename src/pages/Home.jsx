import { useEffect, useState } from 'react';
import axios from 'axios';
import EnfoqueIntegral from '../components/EnfoqueIntegral';
import TratamientoDestacado from '../components/TratamientoDestacado';
import Especialidades from '../components/Especialidades';
import SuplementosPreview from '../components/SuplementosPreview';
import Planes from '../components/Planes';
import Horarios from '../components/Horarios';
import Footer from '../components/Footer';

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // === NUEVOS ESTADOS SOLO PARA PLANES ===
  const [planes, setPlanes] = useState([]);
  const [loadingPlanes, setLoadingPlanes] = useState(true);
  const [errorPlanes, setErrorPlanes] = useState('');

  // Nombres exactos de las imágenes de tus aliados (ubicadas en public/)
  const aliados = [
    "adium.png",
    "expert (1).png",
    "imaginesmedicas.png",
    "integral.png",
    "intermedica.png",
    "novo.png",
    "saludTools.png",
    "sermed.png",
    "vanttive.png"
  ];

  // Efecto original para publicaciones
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

  // === NUEVO EFECTO SOLO PARA TRAER LOS PLANES ===
  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/paquetes');
        const activos = response.data.filter(plan => plan.estado === 'ACTIVO');
        setPlanes(activos);
        setLoadingPlanes(false);
      } catch (err) {
        console.error(err);
        setErrorPlanes('Error al cargar los planes');
        setLoadingPlanes(false);
      }
    };

    fetchPlanes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      
      {/* === ESTILOS PARA LA ANIMACIÓN DEL CARRUSEL === */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-slide {
            /* Cambia el '40s' si quieres que vaya más rápido o más lento */
            animation: slide 40s linear infinite; 
          }
          .carousel-container:hover .animate-slide {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Fondo con brillo sutil */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none w-full max-w-[780px] h-[640px] bg-[radial-gradient(circle_at_74%_34%,_#EFE8D8_0%,_rgba(239,232,216,0.55)_36%,_rgba(239,232,216,0)_70%)]"></div>

      <main className="flex-grow relative z-10">
        
        {/* === SECCIÓN HERO === */}
        <section id="inicio" className="pt-16 pb-24 overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            
            {/* Columna Izquierda: Textos y Botones */}
            <div className="max-w-xl">
              <span className="text-[#8a9096] font-bold text-[13px] tracking-[0.14em] uppercase mb-4 block font-sans">
                Centro de Metabolismo y Obesidad · Pueblo Libre, Lima
              </span>
              
              <h1 className="text-[40px] lg:text-[46px] leading-[1.1] mb-4 font-serif font-semibold text-os-ink">
                Bajar de peso empieza<br /> por entender <span className="text-[#256b3c] italic">tu metabolismo</span>
              </h1>
              
              <p className="text-os-ink-soft text-[17.5px] leading-[1.55] mb-8 max-w-[480px] font-sans">
                Primero encontramos <b>por qué</b> tu cuerpo sube de peso — tiroides, resistencia a la insulina, hormonas — y recién ahí armamos tu tratamiento. No damos la receta a ciegas.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contacto" className="bg-[#256b3c] text-white px-7 py-[14px] rounded-full font-bold hover:bg-[#1f5a33] transition-all shadow-[0_12px_24px_-10px_rgba(37,107,60,0.5)] flex items-center justify-center gap-2.5 font-sans text-[15px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.399A7.968 7.968 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.121 4.094L.133 15.867l3.905-1.02A7.95 7.95 0 0 0 8 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.601zM8 14.653a6.59 6.59 0 0 1-3.364-1.22l-.241-.143-2.502.655.666-2.438-.157-.25A6.574 6.574 0 0 1 1.408 8c0-3.626 2.951-6.577 6.592-6.577 3.626 0 6.577 2.951 6.577 6.577 0 3.626-2.951 6.577-6.577 6.577zm3.46-4.736c-.19-.095-1.121-.553-1.295-.616-.174-.063-.301-.095-.428.095-.127.19-.489.616-.599.742-.111.127-.222.143-.413.048-.19-.095-.8-.295-1.523-.935-.562-.498-.941-1.111-1.052-1.302-.111-.19-.012-.293.083-.388.084-.084.19-.222.285-.332.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.332-.048-.095-.428-1.032-.587-1.413-.156-.37-.313-.32-.428-.326-.111-.006-.238-.006-.365-.006-.127 0-.332.048-.506.238-.174.19-.665.65-.665 1.587 0 .936.681 1.841.776 1.968.095.127 1.341 2.049 3.242 2.868.452.194.805.31 1.08.397.453.144.865.123 1.19.075.364-.054 1.121-.458 1.279-.901.159-.443.159-.822.111-.901-.048-.079-.174-.127-.365-.222z"/>
                  </svg>
                  Agendar por WhatsApp
                </a>
                
                <a href="/especialidades" className="border-[1.5px] border-os-dark text-os-dark px-7 py-[14px] rounded-full font-bold hover:bg-os-dark hover:text-white transition-colors flex items-center justify-center font-sans text-[15px]">
                  Conoce nuestras especialidades
                </a>
              </div>
            </div>

            {/* Columna Derecha: Imagen Horizontal */}
            <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 w-full">
              <div className="relative inline-block w-full max-w-[560px]">
                <div className="absolute top-5 left-5 w-[88%] h-[92%] bg-[#F1F2F3] rounded-[32px] z-0"></div>
                
                <img 
                  src="/doctora_principal.jpg" 
                  alt="Dra. Angélica Caycho en Orbital Salud" 
                  className="relative z-10 w-full h-auto object-cover rounded-[28px] border-[8px] border-white shadow-[0_30px_60px_-20px_rgba(31,51,35,0.35)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === NUEVA SECCIÓN: ALIADOS ESTRATÉGICOS === */}
        <section className="py-12 border-y border-black/5 bg-white overflow-hidden flex flex-col items-center">
          <h3 className="text-[#8a9096] font-bold text-[12px] tracking-[0.2em] uppercase mb-10 font-sans text-center">
            Nuestros aliados estratégicos
          </h3>
          
          {/* El contenedor general que pausa la animación al hacer hover */}
          <div className="carousel-container relative w-full flex overflow-hidden">
            
            {/* Primer bloque de imágenes */}
            <div className="flex animate-slide whitespace-nowrap items-center shrink-0">
              {aliados.map((logo, index) => (
                <img 
                  key={`logo-1-${index}`} 
                  src={`/${logo}`} 
                  alt={`Logo Aliado ${index}`} 
                  className="h-10 md:h-12 w-auto object-contain mx-10 transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

            {/* Segundo bloque idéntico para crear el efecto de bucle infinito */}
            <div className="flex animate-slide whitespace-nowrap items-center shrink-0">
              {aliados.map((logo, index) => (
                <img 
                  key={`logo-2-${index}`} 
                  src={`/${logo}`} 
                  alt={`Logo Aliado duplicado ${index}`} 
                  className="h-10 md:h-12 w-auto object-contain mx-10 transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

          </div>
        </section>

        {/* RESTO DE COMPONENTES */}
        <EnfoqueIntegral />
        <TratamientoDestacado contenidos={publicaciones} loading={loading} error={error} />
              
        <div id="especialidades">
          <Especialidades />
        </div>
        <SuplementosPreview />
        
        <div id="tienda">
          {/* === AHORA PLANES RECIBE SU PROPIA DATA === */}
          <Planes planesData={planes} loading={loadingPlanes} error={errorPlanes} />
        </div>

        <Horarios />
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;