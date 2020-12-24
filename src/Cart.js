import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import items from './items';
import { Link } from 'react-router-dom';

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

  const ShowCart = () => {
    return (
      <ul className="cart-list">
        {Object.keys(cartItems).map((itemid) => {
          let cartItem = items.find(({ id }) => id === itemid);
          return (
            <li key={itemid} className="cart-item">
              <figure>
                <img src={cartItem.src} alt="" />
                <figcaption>
                  <p>Cost: {cartItem.price}</p>
                  <p>Number in cart: {cartItems[itemid]}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
        <li>Total cost: A whole lotta love</li>
      </ul>
    );
  };

  return (
    <div className="cart">
      <nav className="cart-nav">
        <ul>
          <li>
            <Link to="/">Take me home</Link>
          </li>
          <li><Link to="/shop">Back to shop</Link></li>
        </ul>
      </nav>
      <h1>My Cart</h1>
      {Object.keys(cartItems).length > 0 ? <ShowCart /> : 'Your cart is empty'}
    </div>
  );
};

export default Cart;
