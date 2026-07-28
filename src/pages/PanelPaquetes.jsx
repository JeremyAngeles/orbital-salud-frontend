import { useState, useEffect } from 'react';

// Fíjate que le quitamos el useNavigate y el botón de cerrar sesión, 
// porque eso ahora lo manejará el "Panel Padre".
export default function PanelPaquetes() {
  const [paquetes, setPaquetes] = useState([]);
  const [editingId, setEditingId] = useState(null); 

  // Agregamos los nuevos campos al estado inicial
  const [formData, setFormData] = useState({
    nombre_paquete: '',
    descripcion: '',
    cantidad_sesiones: '',
    precio_total: '',
    url_imagen: '',
    estado: 'ACTIVO',
    categoria: '',
    mas_elegido: false
  });
  
  const API_URL = 'http://localhost:3000/api/paquetes';

  useEffect(() => {
    fetchPaquetes();
  }, []);

  const fetchPaquetes = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      if (response.ok) {
        const data = await response.json();
        setPaquetes(data);
      }
    } catch (error) {
      console.error('Error al cargar paquetes:', error);
    }
  };

  const handleInputChange = (e) => {
    // Manejo especial para el checkbox
    if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      // Transformamos el booleano a 1 o 0 para MySQL antes de enviar
      const dataToSend = {
        ...formData,
        mas_elegido: formData.mas_elegido ? 1 : 0
      };

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setFormData({ 
          nombre_paquete: '', descripcion: '', cantidad_sesiones: '', precio_total: '', 
          url_imagen: '', estado: 'ACTIVO', categoria: '', mas_elegido: false 
        });
        setEditingId(null);
        fetchPaquetes();
      }
    } catch (error) {
      console.error('Error al guardar el paquete:', error);
    }
  };

  const handleEditar = (paquete) => {
    setFormData({
      nombre_paquete: paquete.nombre_paquete,
      descripcion: paquete.descripcion,
      cantidad_sesiones: paquete.cantidad_sesiones || '', // Por si viene null de BD
      precio_total: paquete.precio_total,
      url_imagen: paquete.url_imagen || '',
      estado: paquete.estado,
      categoria: paquete.categoria || '',
      // Validamos cómo viene el booleano de la base de datos (1, true, etc)
      mas_elegido: paquete.mas_elegido === 1 || paquete.mas_elegido === true || paquete.mas_elegido === "1"
    });
    setEditingId(paquete.id);
  };

  const cancelarEdicion = () => {
    setFormData({ 
      nombre_paquete: '', descripcion: '', cantidad_sesiones: '', precio_total: '', 
      url_imagen: '', estado: 'ACTIVO', categoria: '', mas_elegido: false 
    });
    setEditingId(null);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este paquete/plan?')) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      if (response.ok) fetchPaquetes();
    } catch (error) {
      console.error('Error al eliminar paquete:', error);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Formulario */}
      <div className={`p-6 rounded-lg shadow-md mb-8 transition-colors duration-300 ${editingId ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${editingId ? 'text-blue-800' : 'text-gray-800'}`}>
            {editingId ? '✏️ Editando Plan/Paquete' : 'Añadir Nuevo Plan'}
          </h2>
          {editingId && (
            <button type="button" onClick={cancelarEdicion} className="text-sm text-gray-500 hover:text-gray-700 underline">
              Cancelar edición
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <input 
            type="text" name="nombre_paquete" placeholder="Nombre del plan (Ej. Plan Metabólico)" required
            value={formData.nombre_paquete} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-2 bg-white"
          />
          
          <input 
            type="number" step="0.01" name="precio_total" placeholder="Precio Total (S/)" required
            value={formData.precio_total} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />
          
          {/* Categoría Nueva */}
          <input 
            type="text" name="categoria" placeholder="Categoría (Ej. PLAN COMBINADO)"
            value={formData.categoria} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />
          
          {/* Se quitó el "required" */}
          <input 
            type="number" name="cantidad_sesiones" placeholder="Cant. de Sesiones (Opcional)" 
            value={formData.cantidad_sesiones} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />

          <select 
            name="estado" value={formData.estado} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          >
            <option value="ACTIVO">Activo</option>
            <option value="INACTIVO">Inactivo</option>
          </select>
          
          {/* Fila inferior para URL y Checkbox */}
          <div className="md:col-span-3 flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="text" name="url_imagen" placeholder="URL de la imagen (Opcional)"
              value={formData.url_imagen} onChange={handleInputChange}
              className="border p-2 rounded w-full md:flex-grow bg-white"
            />
            
            <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer w-full md:w-auto shrink-0 p-2 bg-gray-50 border rounded hover:bg-gray-100 transition-colors">
              <input 
                type="checkbox" 
                name="mas_elegido" 
                checked={formData.mas_elegido} 
                onChange={handleInputChange}
                className="w-5 h-5 accent-green-600 cursor-pointer"
              />
              ⭐ ¿Destacar como Más Elegido?
            </label>
          </div>
          
          <textarea 
            name="descripcion" placeholder="Descripción completa del plan" required
            value={formData.descripcion} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-3 bg-white"
            rows="3"
          />
          
          <div className="md:col-span-3 flex gap-4">
            <button type="submit" className={`flex-1 text-white font-bold py-2 rounded transition-colors ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}>
              {editingId ? 'Actualizar Plan' : 'Guardar Plan'}
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de Paquetes */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600 uppercase text-sm">
              <th className="p-4">Plan / Categoría</th>
              <th className="p-4">Sesiones</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Estado</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paquetes.map(paquete => (
              <tr key={paquete.id} className={`border-b hover:bg-gray-50 ${paquete.mas_elegido ? 'bg-yellow-50/30' : ''}`}>
                <td className="p-4">
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    {paquete.nombre_paquete}
                    {(paquete.mas_elegido === 1 || paquete.mas_elegido === true) && (
                      <span title="Más Elegido">⭐</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{paquete.categoria || 'Sin categoría'}</div>
                </td>
                <td className="p-4 text-gray-600">{paquete.cantidad_sesiones || '-'}</td>
                <td className="p-4 font-semibold text-gray-700">S/ {Number(paquete.precio_total).toFixed(2)}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${paquete.estado === 'ACTIVO' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {paquete.estado}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleEditar(paquete)} className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 font-medium transition-colors">Editar</button>
                    <button onClick={() => handleEliminar(paquete.id)} className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 font-medium transition-colors">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}