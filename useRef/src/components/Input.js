import React from 'react'

function Input({type, placeholder}, ref) {

    return (
        <input ref={ref} typ={type} placeholder={placeholder}/>
    )
}

const forwardedInput  = React.forwardRef(Input)

export default forwardedInput;