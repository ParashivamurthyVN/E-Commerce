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
 

  return (
<BrowserRouter>
<Box className='app' >
<Navbar categorySelected={categorySelected} 
      setcategorySelected={setcategorySelected} />
<Routes>
  <Route path="/" exact element={<Feed categorySelected={categorySelected}/>}/>
  <Route path='/items/:id' element={<ItemDetail />}/>
  <Route path='/search/:searchterm' element={<SearchFeed/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
</Box>
</BrowserRouter>
)};

export default App;
