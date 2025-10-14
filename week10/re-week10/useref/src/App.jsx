// import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

//         using dom element

// const App = () => {

//   const inputreference = useRef(null);


//   function refOnInput(){
//       inputreference.current.focus();
//   }

//   useEffect(()=>{
//     refOnInput();
//   },[])
//   return (
//     <div>
//       signUP
//       <input ref={inputreference} type="text" />
//       <input ref={inputreference} type="text" />
//       <button >Submit</button>
//     </div>
//   )
// }


const App = () => {

  const [counter, setCounter] = useState(0)

  const timer = useRef();

      const increase = () =>{
          let value = setInterval(() => {
            setCounter(c => c+1);
          }, 1000);

          timer.current = value;
      }

      const stopincrese = () => {
          clearInterval(timer.current);
          setCounter(0);
      }
  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={increase}>start</button>
      <button onClick={stopincrese}>Stop</button>
      
    </div>
  )
}


export default App
