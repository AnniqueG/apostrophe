import React, { useEffect, useState } from 'react';

import Home from './pages/Home';

const App = () => {

  let [cart, setCart] = useState([])
  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
  }, [])

   
    return (
    
      <div className="MainDiv">
        <Home />
      </div>
);
}

export default App;