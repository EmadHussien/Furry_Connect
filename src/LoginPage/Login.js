import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "./../firebase";


function Login() {
  
  const [loginForm, setLoginFrom] = useState({});
  
  function handleLoginChange(e)
  {
    const{name,value} = e.target;
    setLoginFrom({...loginForm,[name]:value});
  }


  function handleLogin(e)
  {
    e.preventDefault();
    console.log(loginForm.email);
    console.log(loginForm.password);
    // TODO API REQUest
  }
  return (

    <Box id='login-modal' >
        <Box  id='login-container'  sx={{width:{xs:'100%',sm:'350px'} ,
         borderRadius:{xs:'0px',sm:'10px'},
         display:'flex',flexDirection:'column',alignItems:'center'
         }}>
          <form id='form-child' onSubmit={handleLogin}>

                <h2>Log In</h2>
            
                <TextField 
                  id="outlined-basic" 
                  name='email'
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleLoginChange}
                  sx={{width:{xs:'80%'}}}
                  />
                  
                <TextField
                  id="outlined-password-input"
                  name='password'
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleLoginChange}
                  sx={{width:{xs:'80%'}}}
                />

                <Button variant="contained" type='submit' color='secondary'>Log In</Button>
            </form>
            
            <span id="login-span">Need an account? <Link to='/signup'>Sign up</Link></span>


        </ Box>
    </Box>
  )
}

export default Login