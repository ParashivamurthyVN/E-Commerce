import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../utils/fetchAPI';
import { useParams } from 'react-router-dom';
import { Typography, CardMedia, CardContent, Box, Stack, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function ItemDetail() {
  const {id} =useParams();
  const navigate=useNavigate();
  const[item, setItem]=useState();

useEffect(()=>{
  fetchAPI(`items/${id}`).then((data)=> setItem(data));
}, [id])


const [Order, setOrder] = useState({
  Name:"",
  Address:"",
  ContactNumber:"",
  PIN:"",
  Item:id,
  Size:''
});


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
  //page refresh
}


async function  handleSubmit(event){
    event.preventDefault();
    await addorder('/orders', Order); 
    //order confirmation
    alert("your order has been placed... please continue shopping");
    navigate('/');
}

function handleChange(event){
    const { name, value } = event.target;
  
    setOrder((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
}


 if(!item) return 'Loading....'

  return (
    <Stack direction='row' >
     <Box  flexBasis='50%' sx={{display:'flex', 
      alignItems:'center',
      justifyContent:'center'}}>
      <CardContent sx={{display:'flex', flexDirection:'column', p:'8px !important',
      justifyContent:'center', textAlign:'center'}}>
         <CardMedia 
             image={item.content?.url}
             alt={item?.content?.title}
             sx={{ mb:1,  
              width:'210px', height:'280px'
             }}
         />
         <Box sx={{display:'flex', flexDirection:'column', alignItems:"start" }}>
         <Typography variant='h5' className='cardtitle' sx={{fontWeight:'600', ml:'10px'}}>
         {item?.content?.Title}
         </Typography>
         <Typography variant='subtitle1' sx={{  opecity:'0.8', ml:'10px'}}>{item?.content?.Brand}</Typography>
         <Typography variant='caption' sx={{ opecity:'0.5', ml:'10px'}}>Please Select Size</Typography>
         <Stack direction='row' sx={{my:'10px', ml:'10px'}}>
         {item.content.Size.map((s, idx)=>(
         <Box key={idx}>
         <span style={{padding:'6px', border:'1.5px solid #d9d9d9', marginRight:'5px', borderRadius:'2px', fontWeight:"500", cursor:'pointer', 
         background: Order.Size === s ? '#2d79f3' : '#ffffff' }} onClick={()=>{setOrder((prevValue) => {
      return {
        ...prevValue,
        Size: s,
      };});  }} >{s}</span>
         </Box>
           ))}
        </Stack>
        <Typography variant='h5' sx={ {fontWeight:'bold', mt:'8px', ml:'10px'}}>
        Rs.<span style={{}}> {parseInt(item?.content?.Price).toLocaleString()}</span> 
             </Typography>
             <Typography variant='caption' sx={{ opecity:'0.5', ml:'10px', color:'#ff3e6c'}}>inclusive of all taxes</Typography>
         </Box>
      </CardContent>
     </Box>
    <Box flexBasis='50%'>
    <form className="form" onSubmit={handleSubmit}>
    <Typography variant='h6' sx={ {fontWeight:'bold'}}>Delivery Address... </Typography>
    <label>
      <span >Name</span>
        <input   name="Name" onChange={handleChange} placeholder="Enter your Name...." />
    </label>    
    <label>
    <span >Address</span>
    <textarea rows="4" name="Address" placeholder="Enter your Address...." onChange={handleChange} style={{width:'400px'}} />
    </label>    
    <label>
    <span >Contact Number</span>
        <input  type="number"  name="ContactNumber" placeholder="+91..." onChange={handleChange}  />
    </label>    
    <label>
     <span>PIN Code</span>
        <input type="number" name="PIN" placeholder="PIN" onChange={handleChange} style={{width:'60px'}} />
    </label>
    <Button variant="contained" type="submit" sx={{width:'150px', mt:'8px', background:'#2d79f3'}} >Confirm Order</Button>
    </form>
    <Box sx={ {ml:'30px', pb:'10px', opacity:0.8 }}>
    <Typography variant='subtitle1' >
      <span >100% Original Products</span>
    </Typography>
    <Typography variant='subtitle1' >
    <span>Pay on delivery might be available</span>
    </Typography>
    <Typography variant='subtitle1'>
    <span>Easy 14 days returns and exchanges</span>
    </Typography>
</Box>
      
    </Box>
    </Stack>
  )
}

export default ItemDetail