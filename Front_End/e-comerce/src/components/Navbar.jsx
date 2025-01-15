import React from 'react';
import { Stack, Box, IconButton } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Logo from '../utils/Logo.png';


function Navbar({categorySelected, setcategorySelected}) {
    const location = useLocation();
    const navigate=useNavigate();
  
    return (
  <Stack direction='row' alignItems='center'
  p={1} 
  sx={{position:"sticky", top:0,justifyContent:'space-between', boxShadow: '2px 2px 8px #bebebe,-2px -2px 8px #ffffff', background:'white', zIndex:'10'}}>
  <Box style={ {display:'flex', alignItems:'center'} }>
  <Link to='/' style={ {display:'flex', alignItems:'center'} }>
  <img src={Logo} alt='Logo' style={{height:'60px', width:'160px'}}/>
  </Link>
   </Box>
   <SideBar 
      categorySelected={categorySelected} 
      setcategorySelected={setcategorySelected} />
  <SearchBar />

  <span className={location.pathname === '/cart' ? 'active' : ''} 
            onClick={()=>{navigate('/cart');} } style={{marginRight:'5px'}}>
            <IconButton >
        <ShoppingCartRoundedIcon sx={{p:'5px', color:location.pathname === '/cart' ? '#2d79f3' : '#151717'}}/>
    </IconButton>
  </span>
  </Stack>
)}

export default Navbar