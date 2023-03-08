import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoIcon from "../../Assets/pets.png";
import NavRight from './NavRight';
import { NavLink } from 'react-router-dom';


function ResponsiveAppBar() {
  
  const pages = ['About', 'Pricing'];

  return (
    <AppBar position="static" id='nav-header'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Box sx={{
                width:{xs:'35px',md:'40px'},mr:'6px'}
            }>
                <img src={LogoIcon} style={{width:"100%" , marginRight: "10px" }} alt="logo" />
          </Box>
          
          
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to='/'
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: {xs:1,md:0},
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize:20,
              letterSpacing: {md:'.3rem'},

            }}
          >
                Furry Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <NavRight />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
