import React from 'react'
import { Stack, Box} from '@mui/material';
import ItemCard from './ItemCard';


const Items = ({items, addItemToCart}) => {

  if(!items?.length) return 'Loading....'
  return (
   <Stack flexDirection='row' flexWrap='wrap' justifyContent='start' gap='25px' >
    {items.map((item, idx)=>(
        <Box key={idx}>
        <ItemCard addItemToCart={addItemToCart} item={item}/>
        </Box>
    ))}
   </Stack>
  )
}

export default Items
