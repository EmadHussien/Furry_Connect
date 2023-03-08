import HeroLg from "../../Assets/ImgHeroLGG.jpg";
import HeroMd from "../../Assets/ImgHeroMD.jpg";
import HeroSM from "../../Assets/ImgHeroSM.jpg";
import HeroXS from "../../Assets/ImgHeroXS.jpg";
import Box from '@mui/material/Box';
import SearchForm from "./SearchForm";

function HeroSection() {

  

  return (
    <section>
      <Box sx={{position:"relative" , display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>
        <img src={HeroLg} alt="dog and cat" id="HeroLG" />
        <SearchForm />
      </Box>

      <Box sx={{position:"relative" , display:{xs:"none",sm:"none",md:"block",lg:"none"}}}>
        <img src={HeroMd} alt="dog and cat" id="HeroMD" />
        <SearchForm />
      </Box>

      <Box sx={{position:"relative" , display:{xs:"none",sm:"block",md:"none",lg:"none"}}}>
        <img src={HeroSM} alt="dog and cat" id="HeroSM" />
        <SearchForm />
      </Box>

      <Box sx={{position:"relative" , display:{xs:"block",sm:"none",md:"none",lg:"none"}}}>
        <img src={HeroXS} alt="dog and cat" id="HeroXS" />
        <SearchForm width={300}/>
      </Box>  
    </section>
  )
}

export default HeroSection