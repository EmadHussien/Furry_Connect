import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ScrollToTop from '../../HelperComponents/ScrollToTop'

function PetInfo({details}) {

  return (
    <>
      <ScrollToTop />
    
      <Box id='pet-info-container'>
          <Box id='pet-name'>
            <h1>{details.petName}</h1>
            <Box sx={{display:{xs:'none',md:'block'}}}>
              <p>Upload Date: {details.uploadDate}</p>
            </Box>
          </Box>

          <hr/>

          <List id='info-list' sx={{flexDirection:{xs:'column',sm:'row'},width:{xs:'100%',sm:'75%',md:'50%'}}}>
              <li>{details.petAge}</li>
              <li>{details.petGender}</li>
              <li>{details.petSize}</li>
              <li>{details.petBreed}</li>
          </List>
    
          <hr />
    
        <h2>About</h2>

        <List id='about-list'>
          <Box>
              <li className='about-questions'>POTTY-TRAINED</li>
              <li>{details.pottyTrained}</li>
          </Box>
          <Box>
              <li className='about-questions'>HEALTH</li>
              <li>{details.Vaccinated?'Vaccinations up to date':'Not Vaccinated' } , {details.spayed ?'Spayed':'Not spayed'}.</li>
          </Box>
          <Box>
              <li className='about-questions'>MEDICAL NEEDS</li>
              <li>{details.medicalNeeds}</li>
          </Box>
          <Box sx={{display:{xs:'block',md:'none'}}}>
              <li className='about-questions'>UPLOAD DATE</li>
              <li>{details.uploadDate}</li>
          </Box>
        </List>

      </Box>
    </>
  )
}

export default PetInfo