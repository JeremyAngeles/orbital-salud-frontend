import { useState, useEffect } from 'react';

export default function PanelPublicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [editingId, setEditingId] = useState(null); 

  // Adaptado a los campos de tu base de datos (image_41295b.png)
  const [formData, setFormData] = useState({
    titulo: '',
    contenido_texto: '',
    tipo_publicacion: 'ARTICULO', // Valores: 'ARTICULO', 'VIDEO'
    url_media: '',
    estado: 'ACTIVO' // Valores: 'ACTIVO', 'OCULTO'
  });
  
  const API_URL = 'http://localhost:3000/api/publicaciones';

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const fetchPublicaciones = async () => {
    try {
      const response = await fetch(API_URL); // Es pública según tus rutas, pero puedes ponerle token si luego lo cambias
      if (response.ok) {
        const data = await response.json();
        setPublicaciones(data);
      }
    } catch (error) {
      console.error('Error al cargar publicaciones:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ titulo: '', contenido_texto: '', tipo_publicacion: 'ARTICULO', url_media: '', estado: 'ACTIVO' });
        setEditingId(null);
        fetchPublicaciones();
      }
    } catch (error) {
      console.error('Error al guardar la publicación:', error);
    }
  };

  const handleEditar = (pub) => {
    setFormData({
      titulo: pub.titulo,
      contenido_texto: pub.contenido_texto || '',
      tipo_publicacion: pub.tipo_publicacion,
      url_media: pub.url_media || '',
      estado: pub.estado
    });
    setEditingId(pub.id);
  };

  const cancelarEdicion = () => {
    setFormData({ titulo: '', contenido_texto: '', tipo_publicacion: 'ARTICULO', url_media: '', estado: 'ACTIVO' });
    setEditingId(null);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta publicación?')) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      if (response.ok) fetchPublicaciones();
    } catch (error) {
      console.error('Error al eliminar publicación:', error);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Formulario */}
      <div className={`p-6 rounded-lg shadow-md mb-8 transition-colors duration-300 ${editingId ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${editingId ? 'text-blue-800' : 'text-gray-800'}`}>
            {editingId ? '✏️ Editando Publicación' : 'Añadir Nueva Publicación'}
          </h2>
          {editingId && (
            <button type="button" onClick={cancelarEdicion} className="text-sm text-gray-500 hover:text-gray-700 underline">
              Cancelar edición
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" name="titulo" placeholder="Título de la publicación" required
            value={formData.titulo} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-2 bg-white"
          />
          
          <select 
            name="tipo_publicacion" value={formData.tipo_publicacion} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          >
            <option value="ARTICULO">Artículo / Blog</option>
            <option value="VIDEO">Video</option>
          </select>

          <select 
            name="estado" value={formData.estado} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          >
            <option value="ACTIVO">Activo (Visible)</option>
            <option value="OCULTO">Oculto (Borrador)</option>
          </select>

          <input 
            type="text" name="url_media" placeholder="URL de la imagen o video de YouTube"
            value={formData.url_media} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-2 bg-white"
          />
          
          <textarea 
            name="contenido_texto" placeholder="Contenido o descripción de la publicación..."
            value={formData.contenido_texto} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-2 bg-white"
            rows="5"
          />
          
          <div className="md:col-span-2 flex gap-4 mt-2">
            <button type="submit" className={`flex-1 text-white font-bold py-2 rounded transition-colors ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}>
              {editingId ? 'Actualizar Publicación' : 'Publicar'}
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de Publicaciones */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600 uppercase text-sm">
              <th className="p-4">Título</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Fecha</th>
              <th className="p-4">Estado</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {publicaciones.map(pub => (
              <tr key={pub.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium max-w-xs truncate" title={pub.titulo}>{pub.titulo}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${pub.tipo_publicacion === 'VIDEO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                    {pub.tipo_publicacion}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {new Date(pub.fecha_publicacion).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${pub.estado === 'ACTIVO' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
                    {pub.estado}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleEditar(pub)} className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 font-medium transition-colors">Editar</button>
                    <button onClick={() => handleEliminar(pub.id)} className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 font-medium transition-colors">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
            {publicaciones.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500">No hay publicaciones registradas.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}