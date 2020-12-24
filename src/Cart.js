import React, { useContext } from 'react';
import { CartContext } from './CartContext'

const Cart = () => {
  const cartContext = useContext(CartContext)
  
  for (const item of cartContext.items) {
    console.log(item)
  }

  return (
    <div className="cart">
      <h1>About us:</h1>
      <p>This is awesome!</p>
    </div>
  );
};

export default Cart;
