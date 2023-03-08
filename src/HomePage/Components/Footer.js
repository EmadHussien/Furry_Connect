import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';



function Footer() {
  return (
    
    <Box id="footer-container" sx={{height:{xs:'200px',md:'180px'}}}>
        <Box sx={{height:{xs:'50%',md:'55%'},display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{width:"40%" , display:{xs:'flex' , justifyContent:'center',alignItems:'center',md:'block'}}} id='footer-LeftTop'>
                <ul>
                    <li>
                        <a href='About' >
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href='PRICING' >
                            PRICING
                        </a>
                    </li>
                </ul>
            </Box> 
            <Box sx={{width:"40%" , display:{xs:'none',md:'block'}}}>
            </Box>
        </Box>


        <Box id='footer-btm-container' sx={{height:{xs:'50%',md:'45%'}}}>
            <ul id="icons-container">
                <li>
                    <a href="https://www.linkedin.com/in/emadhussien98" target="_blank"  rel="noopener noreferrer">
                        <span>
                            <LinkedInIcon className='icons-style' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/EmadHussien" target="_blank"  rel="noopener noreferrer">
                        <span >
                            <GitHubIcon className='icons-style' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="tel:0111-644-6214" target="_blank"  rel="noopener noreferrer">
                        <span >
                            <LocalPhoneIcon className='icons-style' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="mailto:emadhussien.fcis@gmail.com" target="_blank"  rel="noopener noreferrer">
                        <span >
                            <EmailIcon className='icons-style' />
                        </span>
                    </a>
                </li>
            </ul>
            <span id="copyright">© 2023 Emad Hussien</span>
        </Box>
    </Box>
  )
}

export default Footer