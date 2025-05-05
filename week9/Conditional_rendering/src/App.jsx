import { useState } from 'react'

import './App.css'

function App() {

  return (
    < Conditional_rendering />
  )
}

export function Conditional_rendering(){

  const [isVisble , setIsVisible] = useState(false);

  const ToggleMessage = () =>{
    setIsVisible(!isVisble);
  }

  return (
    <div>
     <button onClick={ToggleMessage}>ToggleMessage</button>
     {isVisble && <p>button clicked</p>}
    </div>
  )
}
export default App
