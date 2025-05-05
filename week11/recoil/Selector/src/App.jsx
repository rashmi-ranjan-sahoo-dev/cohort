import { counterAtom ,evenSelector } from './atoms/counter.js'
import { useRecoilValue, useSetRecoilState , RecoilRoot } from 'recoil'
import './App.css'

function App() {

  return (
    <>
    <RecoilRoot>
     <Button />
     <Counter />
     <IsEven/>
     </RecoilRoot>
    </>
  )
}

function Button(){
  const setCount = useSetRecoilState(counterAtom)
  function increase(){
    setCount(c => c+2);
  }
  function decrease(){
    setCount(c => c-1);
  }

  return <div>
   <button onClick={increase}>Increase</button>
   <button onClick={decrease}>Decrease</button>
  </div>

}

function Counter(){
  const count = useRecoilValue(counterAtom)
    return <div>{count}</div>
}

function IsEven(){
  const even = useRecoilValue(evenSelector 
  )
  return <div>
    {even ? "even" : "odd"}
  </div>
}

export default App
