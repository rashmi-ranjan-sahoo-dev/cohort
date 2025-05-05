import React from 'react'
import { useContext } from 'react';
import { Children } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
 
const createContaxt = createContext();

function CreateContaxtProvider({children}) {
  
  const [bulbOn,setBulbOn] = useState(true);

  return <createContaxt.Provider value={{bulbOn,setBulbOn}} >
       {children}
       </createContaxt.Provider>
}
const App = () => {
  return (<div>
   <CreateContaxtProvider>
      <Light />
   </CreateContaxtProvider>
   </div> 
  )
}

const Light = () =>{
    return <div>
      <LightBulb/>
      <LightSwitch/>
    </div>
}

const LightBulb = ()=>{
  const {bulbOn} = useContext(createContaxt);
  return <div>
    {bulbOn ? "bulbOn" : "bulboff"}
  </div>
}

const LightSwitch = () =>{
  const {setBulbOn} = useContext(createContaxt);
  return <div>
    <button onClick={() => setBulbOn(cur => !cur )}>Toggle</button>
  </div>
}

export default App
