import React, { useContext } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import charles from './images/charles.jpg';
import { CartContext } from './CartContext';

const Home = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="home">
      <div class="text">
        <h1>Only the good stuff.</h1>
        <ul>
          <li>
            <Link to="/shop">&gt; &gt; &gt; Shop &lt; &lt; &lt;</Link>
          </li>
          <li>
            <Link to="/cart">View my cart ({cartContext.items.length})</Link>
          </li>
        </ul>
      </div>
      <img src={charles} alt="pug" />
    </div>
  );
};

export default Home;
