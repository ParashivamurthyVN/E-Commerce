import React, { useState, useEffect } from 'react'
import CartCard from './cartCard';
import { Typography, Box, Stack, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Cart({cartItem, setCartItem}) {
const [total, setTotal]=useState()
const navigate=useNavigate();
const [cartOrder, setCartOrder] = useState({
  Name:"",
  Address:"",
  ContactNumber:"",
  PIN:"",
  Items:cartItem
});

useEffect(()=>{
  setTotal( cartItem.reduce((accumulator, item) => accumulator + item.content.Price, 0)
);
}, [cartItem])

const addorder= async (url, newItem)=>{
  await fetch(url, {
    method:"POST",
    headers:{
      'content-type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({
      content:newItem
    })
  }).then(res=>res.json());
}


async function  handleSubmit(event){
  event.preventDefault();

  await addorder('/orders', cartOrder); 
  //order confirmation
  alert("your order has been placed... please continue shopping");
  setCartItem([]);
  navigate('/');
}

function handleDelete(idToDelete){
  setCartItem(cartItem.filter((item)=>item._id !== idToDelete))
};

function handleChange(event){
  const { name, value } = event.target;

  setCartOrder((prevValue) => {
    return {
      ...prevValue,
      [name]: value,
    };
  });
}

if(cartItem.length===0) return 'Cart is empty'
  return (
      <Stack direction='row' >
         <Box  flexBasis='50%' sx={{display:'flex', 
          alignItems:'flex-start',
          justifyContent:'center'}}>
<Box sx={{width:'100%', ml:'10px'}}>
<Typography  variant='h6' fontWeight='bold' my='10px'>
CART
</Typography>
 {cartItem.map((item, idx)=>(
        <Box key={idx}>
        <CartCard item={item} handleDelete={handleDelete}/>
        </Box>
    ))}
<Box sx={ {ml:'30px', mt:'30px' }}>
<Typography  variant='h6' fontWeight='bold' my='4px'>
Total: <span style={{color:'#2d79f3'}}>{total}</span>
</Typography>
<Typography variant='caption' sx={{ opecity:0.8, color:'#ff3e6c'}}>inclusive of all taxes</Typography>
    <Typography variant='subtitle1' sx={{opacity:0.8}} >
      <span >100% Original Products</span>
    </Typography>
    <Typography variant='subtitle1' sx={{opacity:0.8}}  >
    <span>Pay on delivery might be available</span>
    </Typography>
    <Typography variant='subtitle1' sx={{opacity:0.8}} >
    <span>Easy 14 days returns and exchanges</span>
    </Typography>
  </Box>  
 </Box>
</Box>
<Box flexBasis='50%'>
    <form className="form" onSubmit={handleSubmit}>
    <Typography variant='h6' sx={ {fontWeight:'bold'}}>Delivery Address... </Typography>
    <label>
      <span >Name</span>
        <input name="Name" onChange={handleChange} placeholder="Enter your Name...." required/>
    </label>    
    <label>
    <span >Address</span>
    <textarea rows="4" name="Address" placeholder="Enter your Address...." onChange={handleChange} style={{width:'400px'}} required/>
    </label>    
    <label>
    <span >Contact Number</span>
        <input  type="number"  name="ContactNumber" placeholder="+91..." onChange={handleChange} required />
    </label>    
    <label>
     <span>PIN Code</span>
        <input type="number" name="PIN" placeholder="PIN" onChange={handleChange} style={{width:'60px'}} required/>
    </label>
    <Button variant="contained" type="submit" sx={{width:'150px', mt:'8px', background:'#2d79f3'}} >Confirm Order</Button>
    </form>
</Box>
</Stack>

  )}

export default Cart
