import React from 'react';
import EquipoHero from '../components/EquipoHero'; 
import EspecialidadesCarousel from '../components/EspecialidadesCarousel'; 
import ServiciosGaleria from '../components/ServiciosGaleria'; 
import DoctorGrid from '../components/DoctorGrid'; 
import ComoTrabajamos from '../components/ComoTrabajamos'; // <--- NUEVO COMPONENTE IMPORTADO
import Testimonios from '../components/Testimonios';
import Footer from '../components/Footer';

const EquipoPage = ({ equipoData, loading, error }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe8d8] font-raleway relative z-10">
      <main className="flex-grow">
        
        {/* 1. SECCIÓN DE CABECERA */}
        <EquipoHero />

        {/* 2. CARRUSEL DE ESPECIALIDADES */}
        <EspecialidadesCarousel />

        {/* 3. GALERÍA DE FOTOS "Nuestros Servicios" (Fondo Blanco) */}
        <ServiciosGaleria />

        {/* 4. SECCIÓN DE LA GRILLA DE DOCTORES + MODAL (Fondo #efe8d8) */}
        <DoctorGrid 
          equipoData={equipoData} 
          loading={loading} 
          error={error} 
        />

        {/* 5. SECCIÓN "CÓMO TRABAJAMOS" (Fondo Blanco) */}
        <ComoTrabajamos />

      </main>
      
      <Footer />
    </div>
  );
};

export default EquipoPage;