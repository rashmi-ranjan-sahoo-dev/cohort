import React, { useState } from 'react'
import { usePrev } from './hooks/usePrev'
// import { useFetch } from './hooks/useFetch'

const App = () => {

  // const post = useFetch("http://jsonplaceholder.typicode.com/posts/3");
  // return (
  //   <div>
  //     {post.title}
  //   </div>
  // )

  const [state ,setState] = useState(0)
  
    const value = usePrev(state);

  return (
    <div>
       <button onClick={() => setState(state + 1)}>{state}</button>
       <p>previous value{value}</p>
    </div>
  )
}

export default App
