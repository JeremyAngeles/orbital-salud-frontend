import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const agregarAlCarrito = (producto, cantidadAgregada = 1) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        if (existe.cantidad + cantidadAgregada <= producto.stock) {
          return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidadAgregada } : item);
        }
        return prev; // Si pasa del stock, no hace nada
      }
      return [...prev, { ...producto, cantidad: cantidadAgregada }];
    });
    setIsCartOpen(true);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, isCartOpen, setIsCartOpen, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
};