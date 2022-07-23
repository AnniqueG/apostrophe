import React, { useEffect, useState } from 'react';

import Home from './pages/Home';

const App = () => {

  let [cart, setCart] = useState([])
  let localCart = localStorage.getItem("cart");

  const add = (item) => {
    let cartCopy = [...cart];
    let {id} = item;
    
    let exists = cartCopy.find(cartItem => cartItem.id == id);
    if(exists){
        exists.quantity += item.quantity
    } 
    else{
        cartCopy.push(item)
    }

    setCart(cartCopy)

    let string = JSON.stringify(cartCopy);
    localStorage.setItem("cart", string)
  }

  const edit = (id, amount) => {
    let cartCopy = [...cart]
    
    let exists = cartCopy.find(item => item.id == id);
    
    if (!exists) return
    
    exists.quantity += amount;
    
    if (exists.quantity <= 0) {
      cartCopy = cartCopy.filter(item => item.id != id)
    }
    

    setCart(cartCopy);
    
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  }

  const removeItem = (id) => {
    let cartCopy = [...cart]
    
    cartCopy = cartCopy.filter(item => item.id != id);
    
    setCart(cartCopy);
    
    let cartString = JSON.stringify(cartCopy)
    localStorage.setItem('cart', cartString)
  }
  
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