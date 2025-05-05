
import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/Fetch_hook';

function App() {
  const [currentPost,setCurrentPost] = useState(1);

  const {fetchData ,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if(loading){
    return <div>Loading...</div>
  }

  return (<div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button  onClick={() => setCurrentPost(2)}>2</button>
      <button  onClick={() => setCurrentPost(3)}>3</button>
      {fetchData}
    </div>
  )
}

export default App
