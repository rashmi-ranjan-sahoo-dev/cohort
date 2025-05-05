/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import './App.css'

//custom hook
function useCount()
{
  const [count , setCount] = useState(0);
  function increse(){
    setCount(c => c+1);
  }
  return {
    count:count,
    increse:increse
  }
}
const App = () => {
  return (
    <div>
   <Count/>
   <Count/>
   <Count/>
   </div>
  )
}

function Count()
{
  const {count,increse} = useCount();
  return <div>
  <button onClick={increse}> increse{count}</button>
</div>
}

export default App
