import React from 'react'

const App = () => {
  return (
    <div className='bg-blue-900 h-screen flex items-center justify-center' >
       <div className='flex h-[400px] w-2xl flex-col items-center justify-center' >
        <h1 className='mb-12 text-3xl text-white font-bold '>Verify Your Age</h1>
        <p className='p-1'>Plese conform your birth year.this data will not stored</p>
        <Input/>
        <Button />
       </div>
    </div>
  )
}

function Button(){
  return <div>
    <button className='bg-gray-300 w-[200px] mt-8 p-2 rounded-xl cursor-pointer hover:bg-amber-300 active:text-[10px]'>Continue</button>
  </div>
}

function Input() {
    return <div>
      <input className='bg-trans p-2 rounded-xl bg-blue-950' type="text" placeholder='Your birth Year' />
    </div>
}

export default App
