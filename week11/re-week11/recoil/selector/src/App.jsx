import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { a, evenSelector } from "./state/atom";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <Button />
        <Counter />
        <IsEven />
      </div>
    </RecoilRoot>
  );
};

function Button() {
  const setCount = useSetRecoilState(a);

  return (
    <div>
      <button onClick={() => setCount(c => c + 2)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(a);
  return <div>Count: {count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App;
