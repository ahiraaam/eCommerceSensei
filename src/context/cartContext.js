import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext();

function CartProvider(props) {
  const [cart, setCart] = useState({ products: [], total: 0 });

  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value} {...props} />;
}

const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCartContext };
