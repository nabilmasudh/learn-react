import React, { useContext } from 'react'
import {AppContext} from '../AppTwo'

function ComponentB() {
    const counterContext = useContext(AppContext)
    return (
        <div>
            <p>ComponentB</p>
            <button type='button' onClick={()=> counterContext.counterDispatch('INCREMENT')}>increment</button>
            <button type='button' onClick={()=> counterContext.counterDispatch('DECREMENT')}>decrement</button>
        </div>
    )
}

export default ComponentB;
