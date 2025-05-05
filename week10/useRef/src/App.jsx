import { useRef } from "react";

function App() {

  const inputRef = useRef();
  const focus = () =>{
    inputRef.current.focus();
  }
  
  return (
    <>
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name"/>
      <input type="text" placeholder="Enter your password"/>
      <button onClick={focus}>Focus the input</button>
    </div>
    </>
  )
}

export default App
