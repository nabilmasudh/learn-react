import React, { useEffect } from 'react'
import { useRef } from 'react'
import Input from './Input'


function Form() {
const inputRef = useRef(null)

useEffect(()=>{
    inputRef.current.focus()
}, [])
    return (
        <div>
            <Input ref={inputRef} type='text' placeholder='enter value'/>
        </div>
    )
}

export default Form
