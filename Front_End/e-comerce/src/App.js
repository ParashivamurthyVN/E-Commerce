import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
import Cart from './components/cart';


const App =() =>{
  const [categorySelected, setcategorySelected] = useState('NEW');
  const [cartItem, setCartItem] = useState([]);
  const addItemToCart = (newItem) => {
    setCartItem((prevItems) => [...prevItems, newItem]);
  };

  return (
<BrowserRouter>
<Box className='app' >
<Navbar categorySelected={categorySelected} 
      setcategorySelected={setcategorySelected} />
<Routes>
  <Route path="/" exact element={<Feed categorySelected={categorySelected} addItemToCart={addItemToCart}/>}/>
  <Route path='/items/:id' element={<ItemDetail />}/>
  <Route path='/search/:searchterm' element={<SearchFeed addItemToCart={addItemToCart}/>}/>
  <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>
</Routes>
</Box>
</BrowserRouter>
)};

export default App;
