import React from 'react'
import {  Typography, CardMedia, CardContent, Box, Stack, Button } from '@mui/material';

function ItemCard({item}) {

 

  
  return (
    <Box className='cardItem' sx={{display:'flex',
      alignItems:'center',
      justifyContent:'center'}}>
      <CardContent sx={{display:'flex', flexDirection:'column', p:'8px !important',
      justifyContent:'center', textAlign:'center'}}>
         <CardMedia 
             image={item.content?.url}
             alt={item?.content?.title}
             sx={{ mb:2,  
              width:'210px', height:'280px'
             }}
         />
         <Box sx={{display:'flex', flexDirection:'column', alignItems:'start' }}>
         <Typography variant='subtitle2' className='cardtitle' sx={{fontWeight:'600', px:'4px'}}>
         {item?.content?.Title}
         </Typography>
         <Typography variant='subtitle4' sx={{ px:'4px', opecity:'0.8'}}>{item?.content?.Brand}</Typography>
         <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%' my='5px' >
             <Typography variant='subtitle1' sx={ {fontWeight:'bold'}}>
              <span >Rs. {parseInt(item?.content?.Price).toLocaleString()}</span> 
             </Typography>
             <Button variant="contained" href={`/items/${item?._id}`} sx={{background:'#2d79f3'}}>Buy Now</Button>
             </Stack>
         </Box>
      </CardContent>
 </Box>
  )
}

export default ItemCard
