
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link ,useLocation} from 'react-router-dom';

export default function Error() {
    const location = useLocation();
    const errMessage = location.state?.errMessage ;
  console.log(errMessage)

    return (
  
      
        <Box sx={{display:'flex' ,flexDirection:'column', alignItems:'center' , justifyContent:'center',minHeight:'545px'}}>
                
            <Typography variant="h4" sx={{color:'#4d4751',textAlign:'center'}}>
                {errMessage}.
            </Typography>
        
            <Link to='/' style={{textDecoration:'none' , marginTop:'30px'}}>
                <Button variant="contained"  style={{backgroundColor:'#8D3982'}}>Back to home page</Button>
            </Link>
        </Box>
  );
}