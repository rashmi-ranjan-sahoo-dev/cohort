import  { useState } from 'react'

const App = () => {

  const [bulbOn ,setBulbOn] = useState(true);

  return (
    <div>
      <Light bulbOn = { bulbOn } setBulbOn = { setBulbOn } />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Light =( { bulbOn , setBulbOn } )=>{
  return <div>
    <LightBulb bulbOn = {bulbOn}/>
    <LightSwitch setBulbOn = {setBulbOn}/>
  </div>
}

// eslint-disable-next-line react/prop-types
const LightBulb = ( {bulbOn} ) =>{
  return <div>
    {bulbOn ? "bulb on" : "bulb off"}
  </div>
}

const LightSwitch = ({setBulbOn}) => {
  return <div>
    <button onClick={() => setBulbOn(cur => !cur)}>Toggle</button>
  </div>
}

export default App
