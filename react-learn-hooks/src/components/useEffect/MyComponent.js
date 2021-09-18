import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())

    const tick = () =>{
        console.log('Clock ticking')
        setDate(new Date())
    }

    const addClick = () =>{
        setCount((prevCount)=> prevCount + 1)
    }

    useEffect(()=>{
        document.title = `Click ${count} times`
    },[count])

    useEffect(() => {
       const intervel =setInterval(tick, 1000)

        return () => {
            clearInterval(intervel)
        }
    },[])

    
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type='button' onClick={addClick}>Click</button>
            </p>
        </div>
    )
}

export default MyComponent;
