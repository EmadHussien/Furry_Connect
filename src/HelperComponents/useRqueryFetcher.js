import { useQuery } from "react-query";
import { useRef } from "react";
import { useSelector } from 'react-redux'
import axios from 'axios'

function useRqueryFetcher(endpoint,type) {

    const pageNumber = useSelector((state) => state.counter.value)
    endpoint = `${endpoint}${pageNumber}`;
    const apiUrl = `https://mock-server-two.vercel.app/${endpoint}}`
    const numOfItems = useRef(null);
    let numOfPages = null;

    const queryKey = (type==='Dogs')?'getDogs': (type==='Cats')?'getCats': 'getSearch';

    // queryFunction
    function fetchData()
    {
        return axios.get(apiUrl);
    }

    // query gets Data from server
    const { isLoading, data, error, isError } = useQuery(
        [queryKey, pageNumber], fetchData
        );
        
    // calculate number of pages for pagination
    
    numOfItems.current = data?.headers.get('X-Total-Count');
    numOfPages = numOfItems?.current % 12 === 0 ? numOfItems?.current / 12 : Math.floor(numOfItems?.current / 12) + 1;

    if(isNaN(numOfPages))
    {
      numOfPages = 0
    }

    return {
    isLoading , data, error, isError, numOfPages
  };

}

export default useRqueryFetcher;