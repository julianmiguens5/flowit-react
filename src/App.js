import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
      <NavBar />
      </header>
      
      <ItemListContainer greeting='Productos' />
      <ItemDetailContainer />
      <Footer /> */}

      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Productos' /> } />
          <Route path='/category/:category' element={<ItemListContainer greeting='Productos' /> } />
          <Route path='/detail/:idProd' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
