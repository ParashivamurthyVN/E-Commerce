
import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { fetchAPI } from '../utils/fetchAPI';
import { useParams } from 'react-router-dom';
import Items from './Items';

function SearchFeed() {
  const {searchterm} =useParams();

  const[items, setItems]=useState([]);

  useEffect(()=>{
     fetchAPI(`search/${searchterm}`).then((data)=> setItems(data));
   }, [searchterm])

   if(!items?.length) return 'Loading....'

  return (
    <Box sx={{pt:'5px', ml:'25px', zIndex:'-1'} }>
    <Typography  variant='h6' fontWeight='bold' mb='3px' mt='8px' >
          Results for <span style={{color:'#2d79f3'}}>{searchterm}...</span>
    </Typography>
    <Items items={items}/>
    </Box>
    
  )
}

export default SearchFeed