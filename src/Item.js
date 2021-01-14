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
    <div className="item-page">
      <nav className="item-nav">
        <ul>
          <li>
            <Link to="/shopping-cart">Take me home</Link>
          </li>
          <li><Link to="/shop">Back to shop</Link></li>
          <li>
            <Link to="/cart">View cart ({cartContext.items.length})</Link>
          </li>
        </ul>
      </nav>
      <figure>
        <img src={item.src} alt="" />
        <figcaption>
          <p>Cost: {item.price}</p>
          <button className="add-to-cart" onClick={handleClick}>Add to cart</button>
        </figcaption>
      </figure>
    </div>
  );
};

export default Item;
