import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        
        // --- AQUÍ ESTÁ EL CAMBIO ---
        // Ahora redirige al panel maestro en lugar del panel suelto
        navigate('/admin/dashboard'); 
        // ---------------------------
        
      } else {
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2EFE6]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acceso Administrativo</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
            <input 
              type="email" value={correo} onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2E4B34]"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <input 
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2E4B34]"
              required 
            />
          </div>
          <button type="submit" className="w-full bg-[#2E4B34] text-white font-bold py-2 px-4 rounded hover:bg-[#1f3323] transition-colors">
            Ingresar al Panel
          </button>
        </form>
      </div>
    </div>
  );
}