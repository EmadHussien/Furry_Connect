import Box from '@mui/material/Box';
import PetImage from "./Components/PetImage"
import PetInfo from "./Components/PetInfo"
import PetOwner from "./Components/PetOwner"
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation , useNavigate} from 'react-router-dom';
import useRqueryFetcher from "../HelperComponents/useRqueryFetcher";


function Pet() {

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {endpoint,type} = location.state?.apiArgs ;

  const {isLoading , data, error, isError} = useRqueryFetcher(endpoint,type);

  
   // navigate user to error page if there is an error
   if(isError) {
    navigate('/error', { state: { errMessage: error.message } });
  }

  const thisPet = data?.data.find(element => element.id === parseInt(id));


  return (
    <>
        
        { 
          isLoading? 
            
          <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center',minHeight:'545px'}}>
                <CircularProgress color="secondary" />
          </Box>

        :
          <>
            <PetImage image={thisPet.petImage} />

            <Box sx={{
              
              margin:'65px 0px' , display:'flex',justifyContent:'center' ,
              alignItems: {xs:'center',lg:'unset'},
              flexDirection:{xs:'column',lg:'row'},
            
            }}>

              <Box sx={{width:{xs:'90%',lg:'65%'}}}>
                <PetInfo details = {thisPet} />
              </Box>

              <Box sx={{width:{xs:'90%',lg:'30%'}, margin:{xs:'60px 0 0 0',lg:'0 0 0 20px'}}}>
                <PetOwner info={thisPet} />
              </Box>

            </Box>
          </>
          }
        

    </>
  )
}

export default Pet