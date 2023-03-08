import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import PetCard from './Components/PetCard';
import ScrollToTop from '../HelperComponents/ScrollToTop'
import Box  from '@mui/material/Box';
import { useLocation , useNavigate} from 'react-router-dom';
import Pagination from './Components/Pagination';
import useRqueryFetcher from "../HelperComponents/useRqueryFetcher";
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function AvailablePets() {

   const location = useLocation();
   const navigate = useNavigate();
   const pageNumber = useSelector((state) => state.counter.value)
   const searchedKeyword = location.state?.queryParams ;
   const category = location.state?.name;
   const type = category==='cats'?'Cats' : category === 'dogs'?'Dogs':'Any';

   // define the api endpoint
   const endpoint = (type==='Dogs' )?`Pets?petType=Dog&_expand=User&_limit=12&_page=`:(type==='Cats')?`Pets?petType=Cat&_expand=User&_limit=12&_page=`: searchedKeyword;
   
   // fetching data from the API 
   const {isLoading , data, error, isError, numOfPages} = useRqueryFetcher(endpoint,type);

   // navigate user to error page if there is an error
   if(isError) {
      navigate('/error', { state: { errMessage: error.message } });
   }

   // update the route with the page number
   useEffect(()=>{
      if(type ==='Any')
      {
         navigate(`/pets_page/${pageNumber}`, { state: { queryParams: searchedKeyword },replace: true });
      }
      else{
         navigate(`/pets_page/${pageNumber}`, { state: { name: category },replace:true });
      }


  },[pageNumber, navigate,type, searchedKeyword, category])


   // navigate user to home page if accessed search via direct url
   
   if(!searchedKeyword && type==='Any')
   {
      navigate('/');
   }
   
   // rendering cards list
   const petsCards = data?.data.map((pet) => 
      {
         return (
            <Grid item xs={6} sm={4} md={3} key={pet.id}>
               <PetCard petID={pet.id} petImage={pet.petImage} petName={pet.petName} apiArgs={{endpoint,type}} /> 
            </Grid>
         )
      }
   )

  return (
   <>
      <ScrollToTop />

      <Container maxWidth="lg" sx={{marginTop:'50px',marginBottom: '50px',minHeight:'445px'}}>
            {
               type ==='Any'?
                  <h1 id='available-title'>Search Results</h1>  
               : 
                  <h1 id='available-title'>{type} Available for Adoption</h1>   
            }
            
         {
            isLoading? 
            
               <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center',minHeight:'300px'}}>
                     <CircularProgress color="secondary" />
               </Box>
            :
            data?.data.length === 0 ?
               <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center',minHeight:'300px'}}>
                  <h4 id='available-title'>No results found. Please refine your search or try a different location.</h4>   
               </Box>
            :
               <Grid
               container
               rowSpacing={{xs: 2, md: 3 }}
               columnSpacing={{ xs: 2,md:3}}
               >
               {
                   petsCards
               }
               </Grid>
         }

         <Pagination numOfPages={numOfPages}/>
      
      </Container>
   </>

  )
}

export default AvailablePets