import { useState, useEffect } from 'react';

export default function PanelProductos() {
  const [productos, setProductos] = useState([]);
  const [editingId, setEditingId] = useState(null); 

  const initialState = {
    nombre: '', descripcion: '', precio: '', stock: '', estado: 'ACTIVO', 
    url_imagen_cloudinary: '', categoria: '', especialidad: '', beneficios: ''
  };

  const [formData, setFormData] = useState(initialState);
  const API_URL = 'http://localhost:3000/api/productos';

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
      }
    } catch (error) {
      console.error('Error al cargar productos:', error);
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
        setFormData(initialState);
        setEditingId(null);
        fetchProductos();
      }
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  const handleEditar = (producto) => {
    setFormData({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      estado: producto.estado,
      url_imagen_cloudinary: producto.url_imagen_cloudinary || '',
      categoria: producto.categoria || '',
      especialidad: producto.especialidad || '',
      beneficios: producto.beneficios || ''
    });
    setEditingId(producto.id);
  };

  const cancelarEdicion = () => {
    setFormData(initialState);
    setEditingId(null);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      if (response.ok) {
        fetchProductos();
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Formulario */}
      <div className={`p-6 rounded-lg shadow-md mb-8 transition-colors duration-300 ${editingId ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${editingId ? 'text-blue-800' : 'text-gray-800'}`}>
            {editingId ? '✏️ Editando Producto' : 'Añadir Nuevo Producto'}
          </h2>
          {editingId && (
            <button type="button" onClick={cancelarEdicion} className="text-sm text-gray-500 hover:text-gray-700 underline">
              Cancelar edición
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input 
            type="text" name="nombre" placeholder="Nombre del producto" required
            value={formData.nombre} onChange={handleInputChange}
            className="border p-2 rounded w-full md:col-span-2 bg-white"
          />
          <input 
            type="number" step="0.01" name="precio" placeholder="Precio (ej. 150.50)" required
            value={formData.precio} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />
          
          <input 
            type="number" name="stock" placeholder="Stock (ej. 20)" required
            value={formData.stock} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />

          {/* AHORA SON INPUTS DE TEXTO LIBRE */}
          <input 
            type="text" name="especialidad" placeholder="Especialidad (Ej. Dermatología)"
            value={formData.especialidad} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />
          <input 
            type="text" name="categoria" placeholder="Categoría (Ej. Vitaminas)"
            value={formData.categoria} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />

          <input 
            type="text" name="url_imagen_cloudinary" placeholder="URL de la imagen (Opcional)"
            value={formData.url_imagen_cloudinary} onChange={handleInputChange}
            className="border p-2 rounded w-full bg-white"
          />
          <select name="estado" value={formData.estado} onChange={handleInputChange} className="border p-2 rounded w-full bg-white">
            <option value="ACTIVO">Activo</option>
            <option value="INACTIVO">Inactivo</option>
          </select>
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea 
              name="descripcion" placeholder="Descripción breve" required
              value={formData.descripcion} onChange={handleInputChange}
              className="border p-2 rounded w-full bg-white h-24"
            />
            <textarea 
              name="beneficios" placeholder="Beneficios clave (ej. Mejora la piel, da energía...)"
              value={formData.beneficios} onChange={handleInputChange}
              className="border p-2 rounded w-full bg-white h-24"
            />
          </div>
          
          <div className="md:col-span-3 flex gap-4 mt-2">
            <button type="submit" className={`flex-1 text-white font-bold py-2 rounded transition-colors ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}>
              {editingId ? 'Actualizar Producto' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de Productos */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600 uppercase text-sm">
              <th className="p-4">Imagen</th>
              <th className="p-4">Nombre</th>
              <th className="p-4">Categoría/Esp.</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(prod => (
              <tr key={prod.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  {prod.url_imagen_cloudinary ? (
                    <img src={prod.url_imagen_cloudinary} alt={prod.nombre} className="w-12 h-12 object-cover rounded shadow-sm" />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 text-center">Sin foto</div>
                  )}
                </td>
                <td className="p-4 font-medium text-sm">{prod.nombre}</td>
                <td className="p-4 text-xs text-gray-500">
                  {prod.especialidad && <span className="block text-blue-600 font-bold">{prod.especialidad}</span>}
                  {prod.categoria && <span>{prod.categoria}</span>}
                </td>
                <td className="p-4 text-sm">S/ {Number(prod.precio).toFixed(2)}</td>
                <td className="p-4 text-sm font-semibold text-gray-700">{prod.stock}</td> 
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleEditar(prod)} className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-200 font-medium transition-colors">Editar</button>
                    <button onClick={() => handleEliminar(prod.id)} className="bg-red-100 text-red-600 px-3 py-1 text-sm rounded hover:bg-red-200 font-medium transition-colors">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr><td colSpan="6" className="p-8 text-center text-gray-500">No hay productos registrados aún.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}