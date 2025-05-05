/* eslint-disable react/prop-types */
import { useState } from "react"

function App() {

  return (
    <>
      <div>
       <LightBulb/>
      </div>
    </>
  )
}

function LightBulb(){

  const [bulbon,setBulbon] = useState(true);
  return <div>
    <BulbState bulbon = {bulbon}/>
    <ToggleBulbState bulbon = {bulbon} setBulbon= {setBulbon}/>
  </div>
}

function BulbState({bulbon}){
  return <div>
     {bulbon ? "bulb on" : "bulb off"}
  </div>
}

function ToggleBulbState({bulbon,setBulbon}){

  function toggle(){
    setBulbon(!bulbon)
  }

  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>
}

export default App
