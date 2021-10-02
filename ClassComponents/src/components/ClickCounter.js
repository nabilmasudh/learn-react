import React from 'react'

function ClickCounter({incrementCount, count}) {
    return (
        <div>
           <button onClick={incrementCount}>Click {count} times</button> 
        </div>
    )
}

export default ClickCounter
