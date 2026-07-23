import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import EspecialidadesPage from './pages/EspecialidadesPage'; 
import EquipoPage from './pages/EquipoPage';
import ContactoPage from './pages/ContactoPage';
import ReservarCitaPage from './pages/ReservarCitaPage'; 
import ProductosPage from './pages/ProductosPage'; // <- Agregado para la tienda

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-os-beige min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/especialidades" element={<EspecialidadesPage />} />
            <Route path="/equipo" element={<EquipoPage />} />
            <Route path="/contacto" element={<ContactoPage />} /> 
            <Route path="/reservar-cita" element={<ReservarCitaPage />} /> 
            <Route path="/productos" element={<ProductosPage />} /> {/* <- Ruta agregada */}
          </Routes>
        </main>
        
        {/* Aquí puedes poner tu <Footer /> más adelante */}
      </div>
    </Router>
  );
}

export default App;