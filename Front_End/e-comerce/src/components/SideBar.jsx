import React from 'react'
import { Stack} from '@mui/material';
import { categories } from '../utils/constants';
import {useNavigate} from 'react-router-dom';


const SideBar = ({categorySelected, setcategorySelected}) => {
  const navigate=useNavigate();
  
  return (
    <Stack sx={{ overflowX:"auto", flexDirection:"row", gap:'2px', ml:'10px'}}>
        {categories.map((category)=>(
            <button className='category-btn' 
            onClick={()=>{setcategorySelected(category.name);  navigate('/');} } 
            style={{color: category.name===categorySelected ? '#2d79f3' : '#151717'}}
             key={category.name}>
                <span style={{opecity:category.name===categorySelected ? '1':'0.8', fontSize:'14px',
    letterSpacing:'.3px'}} >{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar