import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home.jsx"
import Products from "../src/components/Products.jsx"
import Clients from "../src/components/Clients.jsx"
import Navbar from './components/Navbar.jsx';

function App() {
    

  return(
    <div className='App'>
<Navbar/>
     
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/clients" element={<Clients/>}/>
            <Route path="products" element={<Products/>}/>
      </Routes>
     
      
    </div>
  )
}

export default App;
