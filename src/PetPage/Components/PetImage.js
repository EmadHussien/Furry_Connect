import Box from '@mui/material/Box';

function PetImage({image}) {
  return (
    <>
        <Box id='pet-img-container'>
            <img  src={image} alt='cat' />
        </Box>
    </>
  )
}

export default PetImage