import React from 'react'
import withCounter from './HOC/withCounter'

function HOCHoverCounter  ({count, incrementCount}) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}> Hovered {count} times</h1>
        </div>
    )
}

export default withCounter(HOCHoverCounter)
