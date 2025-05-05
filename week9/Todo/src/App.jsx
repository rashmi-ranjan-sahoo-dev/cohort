import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [currentTodo ,setCurrentTodo] = useState(1);
  const [TabData ,setTabData] = useState({});
  const [loading , SetLoading] = useState(true);


  useEffect(()=>{
    SetLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTodo).then(async res => {
      const json = await res.json();
      setTabData(json);
      SetLoading(false);
    })
  },[currentTodo])   



  return (
    <div>
      <button onClick={() => setCurrentTodo(1)} style={{color : currentTodo == 1 ? "red" : "black"}}>Todo #1</button>
      <button onClick={() => setCurrentTodo(2)} style={{color : currentTodo == 2 ? "red" : "black"}}>Todo #2</button>
      <button onClick={() => setCurrentTodo(3)} style={{color : currentTodo == 3 ? "red" : "black"}}>Todo #3</button>
      <button onClick={() => setCurrentTodo(4)} style={{color : currentTodo == 4 ? "red" : "black"}}>Todo #4</button>
      <br />
      {loading ? "loading..." : TabData.title}
      <br />
      {loading ? "loading..." : TabData.id}
    </div>
  )
}

export default App
