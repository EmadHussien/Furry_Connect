import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PetsIcon from '@mui/icons-material/Pets';

function PetOwner({info}) {
  return (

    <Box id='pet-owner-container'>
         <Box id='pet-circle'>
            <PetsIcon id='pet-icon'/>
         </Box>

        <h1>{info.User.fname} {info.User.lname}</h1>

        <hr />
        
        <List>
          <ListItem disablePadding>
             <ListItemIcon>
                <LocationOnIcon />
             </ListItemIcon>
             <ListItemText primary={<>{info.country}<br/>{info.city}, {info.District}</>} />
          </ListItem>

          <hr />
          
          <ListItem disablePadding>
             <ListItemIcon>
                <EmailIcon />
             </ListItemIcon>
             <ListItemText primary={info.User.email} />
          </ListItem>
          
          <hr />
          
          <ListItem disablePadding>
             <ListItemIcon>
                <PhoneIcon />
             </ListItemIcon>
             <ListItemText primary={`(+2) ${info.User.phoneNumber}`} />
          </ListItem>
        </List>

    </Box>

    )
}

export default PetOwner