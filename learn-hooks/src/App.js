import React, { useState } from 'react'
import Todo from './Todo'
import Objects from './Objects'
import Count from './Count'
import MyComponent from './components/useEffect/MyComponent'




function App() {
  const [show, setShow] = useState(true)

  return (
    <div className='container'>
      <Todo/>
      <Objects/>
      <Count/>

      <div>{show && <MyComponent/>}</div>
      <p>
        <button onClick={()=>setShow((prevShow)=> !prevShow)}>{show? 'Hide post' : 'Show post'}</button>
      </p>
    </div>
  )
}

export default App

