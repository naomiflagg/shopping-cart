import React, { useContext } from 'react';
import items from './items';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Shop = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="shop">
      <nav className="shop-nav">
        <ul>
          <li>
            <Link to="/shopping-cart">Take me home</Link>
          </li>
          <li>
            <Link to="/cart">View my cart ({cartContext.items.length})</Link>
          </li>
        </ul>
      </nav>
      <h1>Shop</h1>
      <ul className="items">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`shop/${item.id}`}>
              <img src={item.src} alt="" />
            </Link>
            <p>Cost: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
