import React, { useState } from 'react'


function useCouter(){
  const [counter, setcounter] = useState(0);

  function increaseCount(){
    setcounter(counter +1);
  }

  return {
    counter: counter,
    increaseCount:increaseCount
  }
}

const App = () => {
  return (
    <div>
      <Count />
      <Count />
      <Count />
      <Count />
    </div>
  )
}


function Count(){

const {counter,increaseCount} = useCouter();
  return (
    <div>
      <button onClick={increaseCount}>Increase {counter}</button>
    </div>
  )
}

export default App

