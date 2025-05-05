import React, { useState } from 'react'

const App = () => {
  const [dark,setDark] = useState(true);
  return (
    <div className={`h-screen ${dark ?"bg-white text-black " : "bg-black text-white"}`}>
      <button className='border-2' onClick={() => setDark(!dark)}>hi there</button>
    </div>
  )
}

export default App
