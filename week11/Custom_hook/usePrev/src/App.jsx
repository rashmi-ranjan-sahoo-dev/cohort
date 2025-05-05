import { useState } from 'react'
import './App.css';
import { usePrev } from './hooks/usePrev';

function App() {
  const [count, setCount] = useState(0)
  const prev = usePrev(count);

  return (
    <><div>
        {count} <br />
        <button onClick={() => setCount(count+1)}>clicl me</button>
        <p>The Previous value was {prev}</p>
    </div>
    </>
  )
}

export default App
