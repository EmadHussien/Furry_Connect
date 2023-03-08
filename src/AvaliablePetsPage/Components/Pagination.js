import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { setPageNumber } from '../../Redux/counterSlice'
import Box  from '@mui/material/Box';


function PaginationComp({numOfPages}) {

    const dispatch = useDispatch();
    const pageNumber = useSelector((state) => state.counter.value)



    function handleChange(e,value)
    {
        dispatch(setPageNumber(value));
    }

  return (
    <Box sx={{display:'flex',justifyContent:'center',marginTop:'40px',width:'100%'}}>
        <Pagination count={numOfPages} color="secondary" page={pageNumber} onChange={handleChange} />
    </Box>

  )
}

export default PaginationComp;