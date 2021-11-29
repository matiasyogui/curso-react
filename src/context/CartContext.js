import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarACart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const precioTotalItem = (id) => {
    const item = cart.find((i) => i.id === id);

    return item.cantidad * item.precio;
  };

  const cantItems = () => {
    return cart.reduce((acum, item) => acum + item.cantidad, 0);
  };

  const totalComprado = () => {
    return cart.reduce((acum, item) => acum + precioTotalItem(item.id), 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarACart,
        isInCart,
        cantItems,
        precioTotalItem,
        totalComprado,
        vaciarCarrito,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
