import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import items from './items';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    iterateCart();
  }, []);

  const iterateCart = () => {
    let tempCart = {};
    for (const item of cartContext.items) {
      tempCart[item.id] = tempCart[item.id] + 1 || 1;
    }
    setCartItems(tempCart);
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <ul>
        {Object.keys(cartItems).map((itemid) => {
          let cartItem = items.find(({ id }) => id === itemid);
          return (
            <li key={itemid}>
              <img src={cartItem.src} alt='' />
              <p>{cartItem.price}</p>
              <p>{cartItems[itemid]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
