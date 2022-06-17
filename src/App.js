import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
    <CartProvider> 
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Productos' /> } />
          <Route path='/category/:category' element={<ItemListContainer greeting='Productos' /> } />
          <Route path='/detail/:idProd' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>CARRITO</h1>} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider> 
    <Footer />
    </div>
  );
}

export default App;
