import React from 'react';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Logo from '../utils/Logo.png';


const Navbar = ({categorySelected, setcategorySelected}) => (
  <Stack direction='row' alignItems='center'
  p={1} 
  sx={{position:"sticky", top:0, justifyContent:'space-between', boxShadow: '2px 2px 8px #bebebe,-2px -2px 8px #ffffff', background:'white', zIndex:'10'}}>
  <Box style={ {display:'flex', alignItems:'center'} }>
  <Link to='/' style={ {display:'flex', alignItems:'center'} }>
  <img src={Logo} alt='Logo' style={{height:'60px', width:'160px'}}/>
  </Link>
   </Box>
   <SideBar 
      categorySelected={categorySelected} 
      setcategorySelected={setcategorySelected} />
  <SearchBar />
  </Stack>
)

export default Navbar