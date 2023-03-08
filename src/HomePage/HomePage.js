import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards'
import { useDispatch } from 'react-redux'
import { setPageNumber } from '../Redux/counterSlice'
import { useEffect } from 'react'

export default function HomePage() {

  const dispatch = useDispatch()  
  
  // setting the page number back to the default first page
  useEffect(()=>{
    dispatch(setPageNumber(1));
  },[dispatch])

  
  return (
    <> 
        <HeroSection />
        <Cards />
    </>

    )
}




