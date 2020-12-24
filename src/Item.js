import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import items from './items';
import Cart from './Cart';
import { CartContext } from './CartContext';

const Item = ({ match }) => {
  const cartContext = useContext(CartContext);
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    for (const item of items) {
      if (item.id === match.params.id) {
        setItem(item);
      }
    }
  };

  const handleClick = () => {
    cartContext.addToCart(item);
  };

  return (
    <div>
      <Link to="/cart">View cart ({cartContext.items.length})</Link>
      <img src={item.src} alt="" />
      <p>Cost: {item.price}</p>
      <p onClick={handleClick}>Add to cart</p>
      <p>
        <Link to="/shop">Back to shop</Link>
      </p>
      <p>
        <Link to="/">Take me home</Link>
      </p>
    </div>
  );
};

export default Item;
