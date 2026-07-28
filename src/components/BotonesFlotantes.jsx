import React from 'react';
import { useCart } from '../context/CartContext';

const BotonesFlotantes = () => {
  const { carrito, isCartOpen, setIsCartOpen, eliminarDelCarrito } = useCart();
  const numeroWhatsApp = "51981009863"; // Tu número configurado con código de país

  const totalCarrito = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) return;
    
    let mensaje = "Hola, me gustaría realizar el siguiente pedido desde la tienda virtual:%0A%0A";
    carrito.forEach(item => {
      mensaje += `- ${item.cantidad}x ${item.nombre} (S/ ${(item.precio * item.cantidad).toFixed(2)})%0A`;
    });
    mensaje += `%0ATotal a pagar: *S/ ${totalCarrito.toFixed(2)}*`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  return (
    <>
      {/* ========================================= */}
      {/* 1. BOTÓN GENERAL DE WHATSAPP CON MENSAJE */}
      {/* ========================================= */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
        
        {/* Burbuja de mensaje animada (se oculta en celulares muy pequeños para no estorbar) */}
        <div className="hidden sm:flex bg-white px-4 py-2.5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 items-center gap-2 animate-bounce relative">
          <span className="text-sm font-bold text-[#2E4B34]">¿Necesitas ayuda?</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          {/* Triangulito apuntando al botón */}
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
        </div>

        {/* Botón Circular */}
        <a 
          href={`https://wa.me/${numeroWhatsApp}?text=Hola,%20me%20gustaría%20solicitar%20información`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center relative"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.939 6.937.001 3.826-3.113 6.938-6.939 6.939z"></path>
          </svg>
        </a>
      </div>

      {/* ========================================= */}
      {/* 2. BOTÓN FLOTANTE DEL CARRITO */}
      {/* ========================================= */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-[104px] right-6 bg-[#2E4B34] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(46,75,52,0.4)] hover:scale-110 hover:bg-[#1a2c1e] transition-all duration-300 z-40 flex items-center justify-center"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#FFC107] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            {totalItems}
          </span>
        )}
      </button>

      {/* ========================================= */}
      {/* 3. PANEL DEL CARRITO (CON ANIMACIONES Y CIERRE AL CLIC FUERA) */}
      {/* ========================================= */}
      
      {/* Fondo oscuro (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 transition-all duration-300 ease-in-out ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsCartOpen(false)} // Cierra al clicar en lo negro
      >
        
        {/* Contenedor posicionado a la derecha */}
        <div className="absolute inset-y-0 right-0 w-full max-w-md flex">
          
          {/* El Panel blanco que se desliza */}
          <div 
            className={`bg-white w-full h-full shadow-2xl flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()} // Evita que el clic aquí dentro cierre el modal
          >
            
            {/* Header del carrito */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-[#f8faf7]">
              <h2 className="text-xl font-bold text-[#2E4B34] flex items-center gap-2">
                Tu Carrito ({totalItems})
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-white rounded-full hover:bg-red-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Cuerpo del carrito */}
            <div className="flex-grow overflow-y-auto p-6">
              {carrito.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                  <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  <p className="font-medium text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4 group">
                      <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-contain bg-gray-50 rounded-lg border border-gray-100" />
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm text-[#1a1a1a] leading-tight">{item.nombre}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.cantidad} und. x S/ {item.precio.toFixed(2)}</p>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <p className="font-bold text-[#2E4B34]">S/ {(item.precio * item.cantidad).toFixed(2)}</p>
                        <button 
                          onClick={() => eliminarDelCarrito(item.id)} 
                          className="text-xs text-red-500 hover:text-red-700 hover:underline mt-1 opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer del carrito */}
            <div className="p-6 border-t border-gray-200 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-bold uppercase tracking-wider text-sm">Total a pagar:</span>
                <span className="text-2xl font-black text-[#2E4B34]">S/ {totalCarrito.toFixed(2)}</span>
              </div>
              <button 
                onClick={enviarPedidoWhatsApp}
                disabled={carrito.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${carrito.length > 0 ? 'bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.939 6.937.001 3.826-3.113 6.938-6.939 6.939z"></path>
                </svg>
                Enviar pedido por WhatsApp
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BotonesFlotantes;