// CartProvider.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Retrieve cart data from local storage when the component mounts
    const storedCartData = JSON.parse(localStorage.getItem('CartZ-cart')) || [];
    setCartData(storedCartData);
  }, []);

  const addItemToCart = (item) => {
    // Add the item to cartData and update local storage
    const updatedCartData = [...cartData, item];
    setCartData(updatedCartData);
    localStorage.setItem('CartZ-cart', JSON.stringify(updatedCartData));
  };

  const removeItemFromCart = (itemId) => {
    // Remove the item from cartData and update local storage
    const updatedCartData = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
    localStorage.setItem('CartZ-cart', JSON.stringify(updatedCartData));
  };

  const cartCount = cartData.length;

  return (
    <CartContext.Provider value={{ cartData, addItemToCart, removeItemFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
