import React, { useEffect, useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0);

  function incresecount(){
    setCount(prev => prev + 1);
  }

  useEffect(()=>{
    setInterval(() => {
      incresecount();
    }, 1000);
    console.log("under useEffect");
  },[])


  return (
    <div>
      count = {count}
    </div>
  )
}

export default App
