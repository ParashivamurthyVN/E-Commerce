
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';


const SearchBar = () => {

  const navigate=useNavigate();
  const [searchterm, setsearchTerm]=useState('');

  const handleClick = (e)=>{
    e.preventDefault()

    if(searchterm){
      navigate(`/search/${searchterm}`);
     setsearchTerm('');
    }
  }

  return (
    <Paper component='form'
    onSubmit={handleClick}
    sx={{borderRadius:'10px', border:'1px solid #e3e3e3', pl:2, mr:{sm:5}, boxShadow:"none"}}>
    <input className='search-bar' placeholder='search...' onChange={(e)=>setsearchTerm(e.target.value)} value={searchterm}/>
    <IconButton type='submit' sx={{color:'#2d79f3', p:'10px'}}>
        <Search/>
    </IconButton>

    </Paper>
  )
}

export default SearchBar