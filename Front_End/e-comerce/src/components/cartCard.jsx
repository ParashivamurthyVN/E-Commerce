import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {  Typography, CardMedia, CardContent, Stack, IconButton } from '@mui/material';

function CartCard({item, handleDelete}) {


  return (
      <CardContent className='cardItem' sx={{ p:'4px !important', ml:'10%', width:'80%' }}>
        <Stack direction='row' gap='5px' justifyContent='space-between' alignItems='center' >
           <CardMedia 
               image={item.content?.url}
               alt={item?.content?.title}
               sx={{  
                width:'30px', height:'30px'
               }}
           />
           <Typography variant='subtitle2' className='cardtitle' sx={{fontWeight:'600', px:'4px'}}>
           {item?.content?.Title}
           </Typography>
               <Typography variant='subtitle1' sx={ {fontWeight:'bold'}}>
                <span >Rs. {parseInt(item?.content?.Price).toLocaleString()}</span> 
               </Typography>
               <IconButton  onClick={()=>{handleDelete(item._id)}} >
                <DeleteIcon sx={{ color:'#2d79f3'}}/>
               </IconButton>
        </Stack>
      </CardContent>
  
  )
}

export default CartCard
