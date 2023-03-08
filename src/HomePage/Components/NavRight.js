import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';

function NavRight() {
    
    const [Logged,setLogged] = useState(false);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const notLogged = ['Sign Up', 'Log In']

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = (e) => {
        /*
        const { myValue } = e.currentTarget.dataset;
        if (myValue==="Log In")
        {
            setLogged(true);
        }
        console.log(myValue)
        */
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = (e) => {
        /*
        const { myValue } = e.currentTarget.dataset;
        if(myValue === "Logout")
        {
            setLogged(false);
        }
        console.log(myValue)
        */
        //setAnchorElUser(null);
      };
    
  return (
    <>
        {Logged?
        (
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography 
                    variant='h5'
                    fontFamily="monospace"
                    color='white'
                    fontWeight={700}
                    fontSize={20}
                >Mohamed
                </Typography>
                <ArrowDropDownIcon sx={{color:"white",fontSize:'1.5rem'}} />
                </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' ,
                     top:{xs:'-5px',sm:'0px',md:'1px'},
                     left:{xs:'12px',sm:'22px', md:'20px'}
                    }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
              {settings.map((item) => (
                  <MenuItem key={item} onClick={handleCloseUserMenu}  data-my-value={item}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

            ) 
            :
        (
        <>
            <Stack direction="row" spacing={2} sx={{display:{xs:'none',md:'flex'}}} >
              <NavLink
                style={{textDecoration:'none'}}
                to="signup"
              >
                  <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        Sign Up
                  </Button>
              </NavLink>
                

                <NavLink
                  style={{textDecoration:'none'}}
                  to="login"
                >
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        Log In
                    </Button>
              </NavLink>

                
            </Stack>

            <Box sx={{ flexGrow: 0 , display:{md:'none'}}}>
                    
                <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                    <MenuIcon sx={{color:"white",fontSize:'1.5rem'}} />
                </IconButton>

                <Menu
                sx={{ mt: '45px' ,
                        top:{xs:'-5px',sm:'0px',md:'1px'},
                        left:{xs:'12px',sm:'22px', md:'20px'}
                        }}

                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    >
                {notLogged.map((item) => (
                    <MenuItem key={item} onClick={handleCloseNavMenu} data-my-value={item}>
                    <Typography 
                      textAlign="center"
                      component={NavLink} 
                      to= {item === 'Sign Up' ? '/signup' : '/login'}
                      id='nav-menu-btns'
                      >
                        {item}
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </>
        )
        }
    </>
  )
}

export default NavRight