/*
import React from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import ProductList from './components/Product/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category/:categoryId" element={<ProductList />} />
        
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App*/

import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Header/NavBar'
import ProductList from './components/Product/ItemListContainer'
import ItemDetailContainer from './components/Product/ItemDetailContainer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />  
        <Route path="/category/:categoryId" element={<ProductList />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App

