import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PanelProductos from './PanelProductos';
import PanelPaquetes from './PanelPaquetes';
import PanelPublicaciones from './PanelPublicaciones'; // <--- 1. IMPORTADO AQUÍ

export default function AdminDashboard() {
  const [seccionActiva, setSeccionActiva] = useState('productos');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'productos':
        return <PanelProductos />;
      case 'paquetes':
        return <PanelPaquetes />;
      case 'publicaciones':          // <--- 2. AÑADIDO AL SWITCH
        return <PanelPublicaciones />; 
      // case 'doctores': return <PanelDoctores />;
      default:
        return <PanelProductos />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      
      {/* MENÚ LATERAL (SIDEBAR) */}
      <aside className="w-64 bg-[#2E4B34] text-white flex flex-col shadow-xl">
        <div className="p-6 text-center border-b border-[#3e6345]">
          <h1 className="text-2xl font-serif font-bold tracking-wider">Orbital Admin</h1>
          <p className="text-xs text-[#A3B18A] mt-1">Panel de Control</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <button 
            onClick={() => setSeccionActiva('productos')}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${seccionActiva === 'productos' ? 'bg-[#A3B18A] text-[#2E4B34]' : 'hover:bg-[#3e6345]'}`}
          >
            💊 Productos
          </button>
          
          <button 
            onClick={() => setSeccionActiva('paquetes')}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${seccionActiva === 'paquetes' ? 'bg-[#A3B18A] text-[#2E4B34]' : 'hover:bg-[#3e6345]'}`}
          >
            📋 Planes / Paquetes
          </button>

          {/* <--- 3. NUEVO BOTÓN PARA PUBLICACIONES ---> */}
          <button 
            onClick={() => setSeccionActiva('publicaciones')}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${seccionActiva === 'publicaciones' ? 'bg-[#A3B18A] text-[#2E4B34]' : 'hover:bg-[#3e6345]'}`}
          >
            📝 Blog y Videos
          </button>

          <button 
            onClick={() => alert("Pronto agregaremos este panel")}
            className="w-full text-left px-4 py-3 rounded-lg font-medium hover:bg-[#3e6345] text-gray-300"
          >
            👨‍⚕️ Doctores
          </button>
        </nav>

        <div className="p-4 border-t border-[#3e6345]">
          <button onClick={cerrarSesion} className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition-colors">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO CENTRAL DINÁMICO */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="bg-white shadow-sm p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            Gestión de {seccionActiva}
          </h2>
          <span className="text-sm text-gray-500">Bienvenido, Administrador</span>
        </header>

        <div className="p-8">
          {renderizarSeccion()}
        </div>
      </main>

    </div>
  );
}