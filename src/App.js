import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext } from './CartContext';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Item from './Item';

const App = () => {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {
    setItems((items) => items.concat(item));
  };

  const removeFromCart = (item) => {
    setItems((items) => items.splice(item, 1));
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/shop/:id" component={Item} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
