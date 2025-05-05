
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
function App() {

  const [count,setCount] = useState(0);
  const timer = useRef(0);

  function startClock(){
  const value =  setInterval(function(){
      setCount(c => c+1);
    },1000)
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current)
  }
  
  return (
    <>
      <div className="container">
        <div className="clock">{count}</div>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
        </div>
    </>
  )
}

export default App
