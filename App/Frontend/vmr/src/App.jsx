import React from 'react';
import './App.css';
import './index.css';
import Productlist from './components/Productlist';
import Productsimp from './components/Productsimp';
import AdminComponent from './components/Admin';
import Productsupdate from './components/ProductUpdate';
import Productsdel from './components/ProductDelete';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  // In a React component

return (
  <>
  <div>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/about" element={<About />}></Route>
    <Route path="/admin/products" element={<Productlist/>}></Route>
    <Route path="/admin/" element={<AdminComponent/>}></Route>
    <Route path="/admin/ProductsImport" element={<Productsimp/>}></Route>
    <Route path="/admin/ProductsUpdate" element={<Productsupdate/>}></Route>
    <Route path="/admin/ProductsDelete" element={<Productsdel/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  </>
);
 }

export default App
