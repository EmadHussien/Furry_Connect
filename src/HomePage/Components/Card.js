import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Card({image, title,description,imgCircle,type}) {

   

  return (

    <Box sx={{display:"flex" , flexDirection:'column'}}>
            <Box id='Card-top'>
                <img src={image} alt={title} id="imgCard" />
                <Box className="circle-container" 
                    sx={{
                        width:{xs:"75px",md:"85px"},
                        height:{xs:"75px",md:"85px"},
                        top:{xs:"250px",md:"250px"}
                        
                    }}>
                        <img src={imgCircle} alt={title} />
                </Box>
            </Box>

            <Box
                sx={{
                    margin:{xs:'30px 0 0 0'},
                    height:'50px',
                    width:'100%'
                    }}
            >

                <p id='Card-txt'>{title}</p>
                <span id='Card-span'>{description}</span>
            </Box>

            <Link 
            to= '/pets_page/1'
            state=  {{name :type }}
            style={{textDecoration:'none',height:'100px',width:'100%'}}>
                <Button variant="contained" id='btn-seeMore'>Click To See More</Button>
            </Link>
        </Box>
            
  )
}

export default Card;