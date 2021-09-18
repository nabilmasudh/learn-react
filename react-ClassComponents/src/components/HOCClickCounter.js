import React from 'react'
import withCounter from "./HOC/withCounter";

function  HOCClickCounter  (props){
    const {count, incrementCount} = props;
    return (
        <div>
            <button type='button' onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default withCounter(HOCClickCounter)
