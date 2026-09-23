import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ResultadosReales from '../components/ResultadosReales';
import CalculadoraIMC from '../components/CalculadoraIMC';
import MetodoOrbital from '../components/MetodoOrbital';
import EnfoqueIntegral from '../components/EnfoqueIntegral';
import Testimonios from '../components/Testimonios';
import DiferenciaOrbital from '../components/DiferenciaOrbital';
import Planes from '../components/Planes';
import FAQ from '../components/FAQ';
import HorarioAtencion from '../components/HorarioAtencion'; // NUEVO NOMBRE IMPORTADO
import Footer from '../components/Footer';

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [planes, setPlanes] = useState([]);
  const [loadingPlanes, setLoadingPlanes] = useState(true);
  const [errorPlanes, setErrorPlanes] = useState('');

  const aliados = [
    "adium.png", "expert (1).png", "imaginesmedicas.png", "integral.png",
    "intermedica.png", "novo.png", "saludTools.png", "sermed.png", "vanttive.png"
  ];

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
    <div className="font-raleway min-h-screen flex flex-col bg-white relative">
      
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-slide {
            animation: slide 40s linear infinite; 
          }
          .carousel-container:hover .animate-slide {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Fondo con brillo sutil */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none w-full max-w-[780px] h-[640px] bg-[radial-gradient(circle_at_74%_34%,_#EFE8D8_0%,_rgba(239,232,216,0.55)_36%,_rgba(239,232,216,0)_70%)]"></div>

      <main className="flex-grow relative z-10 font-raleway">
        
        {/* === ORDEN DE COMPONENTES === */}
        <Hero />
        <Stats />
        <ResultadosReales />
        <CalculadoraIMC />
        <MetodoOrbital />
        <EnfoqueIntegral />
        <Testimonios />
        <DiferenciaOrbital />
        <Planes />

        {/* Sección de Aliados Estratégicos */}
        <section className="py-12 border-y border-black/5 bg-white overflow-hidden flex flex-col items-center">
          <h3 className="text-[#8a9096] font-bold text-[12px] tracking-[0.2em] uppercase mb-10 font-sans text-center">
            Nuestros aliados estratégicos
          </h3>
          
          <div className="carousel-container relative w-full flex overflow-hidden">
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

        {/* Sección de Preguntas Frecuentes (Acordeón) */}
        <FAQ />

        {/* Sección de Horarios de Atención */}
        <HorarioAtencion />

      </main>
      <Footer />
    </div>
  );
};

export default Home;