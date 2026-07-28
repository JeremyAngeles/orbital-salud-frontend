import React from 'react';
import { useCart } from '../context/CartContext';

const CarritoFlotante = () => {
  const { carrito, isCartOpen, setIsCartOpen, eliminarDelCarrito } = useCart();

  const totalCarrito = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) return;
    
    let mensaje = "Hola, me gustaría realizar el siguiente pedido desde la tienda virtual:%0A%0A";
    carrito.forEach(item => {
      mensaje += `- ${item.cantidad}x ${item.nombre} (S/ ${(item.precio * item.cantidad).toFixed(2)})%0A`;
    });
    mensaje += `%0ATotal a pagar: *S/ ${totalCarrito.toFixed(2)}*`;

    // Número de WhatsApp
    const numeroWhatsApp = "51981009863";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-24 right-6 bg-[#2E4B34] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform z-40 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#FFC107] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {totalItems}
          </span>
        )}
      </button>

      {/* PANEL DEL CARRITO (MODAL) */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-fadeInRight">
            
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-[#f8faf7]">
              <h2 className="text-xl font-bold text-[#2E4B34] flex items-center gap-2">
                Tu Carrito ({totalItems})
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {carrito.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                  <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                      <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-contain bg-gray-50 rounded" />
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm text-[#1a1a1a] leading-tight">{item.nombre}</h4>
                        <p className="text-xs text-gray-500">{item.cantidad} x S/ {item.precio.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#2E4B34]">S/ {(item.precio * item.cantidad).toFixed(2)}</p>
                        <button onClick={() => eliminarDelCarrito(item.id)} className="text-xs text-red-500 hover:underline mt-1">Eliminar</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-bold">Total:</span>
                <span className="text-2xl font-black text-[#2E4B34]">S/ {totalCarrito.toFixed(2)}</span>
              </div>
              <button 
                onClick={enviarPedidoWhatsApp}
                disabled={carrito.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-colors ${carrito.length > 0 ? 'bg-[#25D366] hover:bg-[#1ebe57]' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.939 6.937.001 3.826-3.113 6.938-6.939 6.939z"></path>
                </svg>
                Enviar pedido por WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CarritoFlotante;