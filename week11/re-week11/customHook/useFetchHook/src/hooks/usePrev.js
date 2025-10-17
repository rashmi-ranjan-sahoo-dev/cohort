import { useEffect, useRef } from "react"

export const  usePrev = (val) => {
    
    const ref = useRef();

    useEffect(() =>{
      
        ref.current = val;
    },[val])

    return ref.current;
}