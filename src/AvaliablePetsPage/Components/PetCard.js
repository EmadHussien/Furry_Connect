import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PetCard({petID,petName,petImage,apiArgs}) {
    
    const location = useLocation();
    const prevRoute = location.pathname;
  

    return (
        <Link to={ `${prevRoute}/pet_id/${petID}` }  
        state=  {{apiArgs :apiArgs}}
        id='petCard-container' >
            <Box id='top-petcard'>
                <img src={petImage} alt='pet' />
            </Box>

            <Box id='bottom-petcard'>
                <p>{petName}</p>
            </Box>
        </Link>  
    )
}

export default PetCard
