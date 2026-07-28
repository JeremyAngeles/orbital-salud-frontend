import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import EspecialidadesPage from './pages/EspecialidadesPage'; 
import EquipoPage from './pages/EquipoPage';
import ContactoPage from './pages/ContactoPage';
import ReservarCitaPage from './pages/ReservarCitaPage'; 
import ProductosPage from './pages/ProductosPage'; 
import ProductoDetalle from './pages/ProductoDetalle'; 
import InBodyPage from "./pages/InbodyPage";
import Footer from './components/Footer'; 

// Componentes del Panel de Administración
import LoginAdmin from './pages/LoginAdmin'; 
import AdminDashboard from './pages/AdminDashboard'; 

// === IMPORTAMOS EL CONTEXTO Y LOS BOTONES ===
import { CartProvider } from './context/CartContext';
import BotonesFlotantes from './components/BotonesFlotantes';

function AppContent() {
  const location = useLocation();
  
  // Verificamos si la ruta actual empieza con "/admin"
  const esRutaAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="font-sans antialiased bg-os-beige min-h-screen flex flex-col relative">
      
      {/* Si NO es ruta de admin, muestra el Navbar y los botones globales */}
      {!esRutaAdmin && (
        <>
          <Navbar />
          <BotonesFlotantes /> {/* <--- AQUÍ VIVEN TUS BOTONES AHORA */}
        </>
      )}
      
      <main className="flex-grow">
        <Routes>
          {/* --- Rutas Públicas de la Clínica --- */}
          <Route path="/" element={<Home />} />
          <Route path="/inbody" element={<InBodyPage />} /> 
          <Route path="/especialidades" element={<EspecialidadesPage />} />
          <Route path="/equipo" element={<EquipoPage />} />
          <Route path="/contacto" element={<ContactoPage />} /> 
          <Route path="/reservar-cita" element={<ReservarCitaPage />} /> 
          <Route path="/productos" element={<ProductosPage />} /> 
          <Route path="/producto/:id" element={<ProductoDetalle />} /> 
          
          {/* --- Rutas del Panel de Administración --- */}
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      
    </div>
  );
}

// Componente Principal envuelto en el CartProvider
function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;