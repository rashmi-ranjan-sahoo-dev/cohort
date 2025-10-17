import { useEffect, useState } from "react";

export function useFetch(url){
    const [post, setPost] = useState({});


  async function getData(){

    const response = await fetch(url);

    const json = await response.json();

    setPost(json)
   }

    useEffect(() =>{
        getData();
    },[])

    return post;
}