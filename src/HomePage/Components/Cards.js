import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from './Card';
import kitten from "../../Assets/kitten.jpg";
import Dog from "../../Assets/dog.jpeg";
import DogCircle from "../../Assets/dogCircle.jpeg";
import CatCircle from "../../Assets/kittenCircle.jpg";



function Cards() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#F5F4F1',
        ...theme.typography.body2,
        textAlign: 'center',
        color: 'black'  ,
        height:'450px'
      }));
    
 
    return (
        <Container maxWidth="lg" sx={{marginTop:'20px',marginBottom: '50px'}}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Item>
                        <Card 
                            image={Dog}  
                            title="Dog Adoption"
                            description="Take a tour and see Dogs."
                            imgCircle = {DogCircle}
                            type='dogs'
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Item>
                        <Card 
                            image={kitten}  
                            title="Cat Adoption"
                            description="Take a tour and see Cats."
                            imgCircle={CatCircle}
                            type='cats'
                        />
                    </Item>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Cards