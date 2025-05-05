import { useEffect, useState } from "react";

export function useFetch(url)
{
    const [fetchData , setFetchData] = useState({})
    const [loading,setLoading] = useState(true);
    console.log(url);

   async function getFetchData()
    {
      setLoading(true);
       const response = await fetch(url);
       const json = await response.json();
       setFetchData(json)
       setLoading(false); 
    }

    useEffect(()=>{
      getFetchData();
    },[url])

    return{
        fetchData,
        loading
    } 
        
}