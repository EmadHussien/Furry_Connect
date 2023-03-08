import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchForm({width}) {
    
    const navigate = useNavigate();
    const [searchedLocation,setSearchedLocation] = useState('');
    const queryParams = `Pets?_expand=User&q=${searchedLocation}&_limit=12&_page=`;
   
    function handleSearch (e)
    {
        e.preventDefault();
        navigate('/pets_page/1', { state: { queryParams: queryParams } });
    }

  return (

    <Box id='search-container'>
        <form onSubmit={handleSearch} id='search-form' style={{width:`${width}px`}}>
          <input type="text" 
            onChange={e=>setSearchedLocation(e.target.value)}
            value={searchedLocation}
            id="search-field" 
            placeholder="Search By Country, City, District" 
            required
          />

          <IconButton aria-label="delete" type="submit">
              <SearchIcon />
          </IconButton>
        </form>
      </Box>

    )
}

export default SearchForm