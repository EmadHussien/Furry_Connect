import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import useFormValidator from './Components/useFormValidator';

function SignUp() {

    const {

      handleInputChange , formData ,
      isValidEmail,isValidPassword,isValidFirstName,isValidLastName,
      isValidPhoneNumber,isValidCountry,isValidCity,isValidDistrict
      
    } = useFormValidator();


    function handleSignUp(e)
    {
        e.preventDefault();
        console.log(formData);
    }


  return (
    <Box id='signup-modal' >
        <Box  id='signup-container'  sx={{width:{xs:'100%',sm:'640px'} ,height:{xs:'100%',md:'80% !important'} , borderRadius:{xs:'0px',sm:'10px'}}}>
          <form id='signup-form' onSubmit={handleSignUp}>

                <h2>Sign Up</h2>
              
              <Stack sx={{flexDirection:{xs:'column' ,md:'row'},width:'100%',justifyContent:'center' , alignItems:{xs:'center',md:'stretch'}, marginBottom:{xs:'20px',md:'0px'}}}>
                <TextField 
                  label= "Email"
                  name='email'
                  error={isValidEmail === null? false :(isValidEmail===false? true : false)}
                  variant="outlined"
                  type="email"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  value = {formData.email}
                  helperText= {isValidEmail === null? null : (isValidEmail===false?"Not valid email address" : null)}
                  sx={{width:{xs:'80%',md:'42%'}}}
                  />

          
                <TextField
                  label="Password"
                  name='password'
                  type="password"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  value={formData.password}
                  helperText= {isValidPassword === null? null : (isValidPassword===false?<>Password must contain the following : <li>At least 8 characters long.</li><li>At least one special character.</li><li>At least an uppercase letter.</li></> : null)}
                  error={isValidPassword === null? false :(isValidPassword===false? true : false)}    
                  sx={{width:{xs:'80%',md:'42%'},margin:{xs:'0px !important',md:'0px 0px 20px 16px !important'}}}
                  />
                </Stack>

        
              <Stack sx={{flexDirection:{xs:'column' ,md:'row'},width:'100%',justifyContent:'center' , alignItems:{xs:'center',md:'stretch'}, marginBottom:{xs:'20px',md:'0px'}}}>

                <TextField 
                  label= "First name" 
                  name='firstName'
                  error={isValidFirstName === null? false :(isValidFirstName===false? true : false)}
                  variant="outlined"
                  type="text"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  value={formData.firstName}
                  helperText= {isValidFirstName === null? null : (isValidFirstName===false?"First name cannot be empty" : null)}
                  sx={{width:{xs:'80%',md:'42%'}}}
                  />
                  
                <TextField 
                  label= "Last name" 
                  name='lastName'
                  error={isValidLastName === null? false :(isValidLastName===false? true : false)}
                  variant="outlined"
                  type="text"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  value={formData.lastName}
                  helperText= {isValidLastName === null? null : (isValidLastName===false?"Last name cannot be empty" : null)}
                  sx={{width:{xs:'80%',md:'42%'},margin:{xs:'0px !important',md:'0px 0px 20px 16px !important'}}}
                  />
                </Stack>

              <Stack sx={{flexDirection:{xs:'column' ,md:'row'},width:'100%',justifyContent:'center' ,  alignItems:{xs:'center',md:'stretch'},marginBottom:{xs:'20px',md:'0px'}}}>

                <TextField 
                  label="Phone number"
                  name='phoneNumber'
                  variant="outlined"
                  type="number"
                  value = {formData.phoneNumber}
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  error={isValidPhoneNumber === null? false :(isValidPhoneNumber===false? true : false)}                  
                  helperText= {isValidPhoneNumber === null? null : (isValidPhoneNumber===false?"Not Valid Egyptian Phone Number" : null)}
                  
                  sx={{width:{xs:'80%',md:'42%'}}}
                  />
        

                <TextField 
                  label="Country"
                  name='country'
                  onChange={handleInputChange}
                  value={formData.country}
                  helperText= {isValidCountry === null? null : (isValidCountry===false?"Country cannot be empty" : null)}
                  error={isValidCountry === null? false :(isValidCountry===false? true : false)}                  
                  variant="outlined"
                  type="text"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  sx={{width:{xs:'80%',md:'42%'},margin:{xs:'0px !important',md:'0px 0px 20px 16px !important'}}}
                  />
                </Stack>

              <Stack sx={{flexDirection:{xs:'column' ,md:'row'},width:'100%',justifyContent:'center' ,  alignItems:{xs:'center',md:'stretch'}, marginBottom:{xs:'20px',md:'0px'}}}>

                <TextField 
                  label="City"
                  name='city'
                  variant="outlined"
                  type="text"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  onChange={handleInputChange}
                  value={formData.city}
                  helperText= {isValidCity === null? null : (isValidCity===false?"City cannot be empty" : null)}
                  error={isValidCity === null? false :(isValidCity===false? true : false)}    
                  sx={{width:{xs:'80%',md:'42%'}}}
                  />

                <TextField 
                  id="outlined-basic" 
                  label="District"
                  variant="outlined"
                  type="text"
                  className='txt-field'
                  size='small'
                  color='secondary'
                  name='district'
                  onChange={handleInputChange}
                  value={formData.district}
                  helperText= {isValidDistrict === null? null : (isValidDistrict===false?"District cannot be empty" : null)}
                  error={isValidDistrict === null? false :(isValidDistrict===false? true : false)}    
                  sx={{width:{xs:'80%',md:'42%'},margin:{xs:'0px !important',md:'0px 0px 20px 16px !important'}}}
                  />
                </Stack>


                <Button variant="contained" type='submit' color='secondary'
                 disabled={isValidEmail && isValidPhoneNumber && isValidFirstName
                    && isValidLastName && isValidCountry && isValidCity &&isValidDistrict && isValidPassword ? false : true}
                >Sign Up</Button>
            </form>
        </ Box>
    </Box>
  )
}

export default SignUp