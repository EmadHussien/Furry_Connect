import { useState } from "react"
import { useNavigate } from "react-router-dom";

function useApi() {

  const navigate = useNavigate();
  const baseApiUrl = 'http://localhost:5000/' ; 
  //const baseApiUrl = 'https://mock-server-two.vercel.app/'; 
  const [resData,setResData] = useState(null);

  async function getPets(queryParams) {

    const apiUrl =`${baseApiUrl}${queryParams}`;

    try{
        
        const res = await fetch(
            apiUrl,
            {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            }
          );

          const data = await res.json();
          setResData(data);
    }
    catch(err){
        navigate('/error', { state: { errMessage: err.message } });
        // TODO Later error Page problem with server 
    }
   }
  
   return {resData, getPets};

}

export default useApi

