import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Encuentra tus productos favoritos en Kanwee.co"/>
    </>
  );
}

export default App;
