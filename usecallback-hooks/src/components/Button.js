import React from 'react'

function Button({handleIncrement, children}) {
    console.log(`increment by ${children}`)
    return (
        <div>
            <button type='button' onClick={handleIncrement}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
