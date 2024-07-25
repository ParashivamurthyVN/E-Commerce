import React, { useState, useEffect } from 'react'
import Items from './Items';
import { Box, Stack, Typography } from '@mui/material';
import { fetchAPI } from '../utils/fetchAPI';


const Feed =({categorySelected}) =>{
 
  const[items, setItems]=useState([]);

   useEffect(()=>{
      fetchAPI(`search/${categorySelected}`).then((data)=> setItems(data));
    }, [categorySelected])
    console.log(items)

     if(!items?.length) return 'Loading....'
 
   
return(
<Stack flexDirection='column' gap='25px' sx={{pt:'5px', ml:'25px', zIndex:'-1'} }>
<Box>
<Typography  variant='h6' fontWeight='bold' mb='3px' mt='8px'>
        CATEGORY:  <span style={{color:'#2d79f3'}}>{categorySelected} </span>
</Typography>
   <Items items={items}/>
</Box>

</Stack>

)};

export default Feed