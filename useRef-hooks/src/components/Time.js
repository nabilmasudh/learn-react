import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Time() {
    const [date, setDate] = useState(new Date())
    const buttonRef = useRef()

    const tick = () =>{
        setDate(new Date())
    }

    useEffect(()=>{
        buttonRef.current = setInterval(tick, 1000)

        return () => {
            clearInterval(buttonRef.current)
        }
    },[])
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type='button' onClick={()=> clearInterval(buttonRef.current)}>cleanup</button>
        </div>
    )
}

export default Time
