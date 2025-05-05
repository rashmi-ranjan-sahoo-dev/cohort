import React, { useState } from 'react'

const App = () => {

  const [arr,setArr] = useState([]);
  
  function addArr(){
    setArr([...arr,1])
  }
  return (

    <div>
      <button onClick={addArr}>Add arr</button>
      {arr}
    </div>
  )
}

export default App
