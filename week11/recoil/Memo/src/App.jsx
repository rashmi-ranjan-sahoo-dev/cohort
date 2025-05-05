// import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { memo } from "react"
import './App.css'

const App = () => {
  return (
    <div>
     <Parent/>
    </div>
  )
}

const Parent = () =>{
  const [count , setCount] = useState(0);

   useEffect(()=>{
     const interval = setInterval(() => setCount(count+1),3000)

       return ()=> clearInterval (interval);
   },[]) 
  return <>
   <Value count={ count }/>
   <IncreaseMemo />
   <DecreaseMemo />
  </>
}

function Value({ count }){
 return <div>{count}</div>
}

const IncreaseMemo = memo(function Increase(){
  return <div>Increase</div>
})

const DecreaseMemo = memo(function Decrease(){
  return <div>Decrese</div>
})

export default App
