import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";


import Vinyls from "./pages/Vinyls";
import Merch from "./pages/Merch";
import Cassettes from "./pages/Cassettes";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import ShoppingCart from "./pages/ShoppingCart";



ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/vinyls" element={<Vinyls/>}/>

  <Route path="/merch" element={<Merch/>}/>
  <Route path="/cassettes" element={<Cassettes/>}/>
  <Route path="/events" element={<Events/>}/>
  <Route path="/cart" element={<ShoppingCart/>}/>

  </Routes>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
 );

