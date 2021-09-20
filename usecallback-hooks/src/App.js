import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementByOne = useCallback(() =>{
    setCount1((prevCount)=> prevCount + 1)
  },[])

  const incrementByTwo = useCallback(()=>{
    setCount2((prevCount)=> prevCount + 2)
  },[])

  const isEvenOdd = useMemo(() =>{
    return count1%2 === 1
  },[count1])

  return (
    <div className="App">
      <ShowCount count={count1} title='Count 1 is increment by one:'/>
      <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
      <Button handleIncrement={incrementByOne}>increment by one</Button>
      <br/>
      <br/>
      <ShowCount count={count2} title='Count 2 is increment by Two:'/>
      <Button handleIncrement={incrementByTwo}>increment by two</Button>
    </div>
  );
}

export default App;
