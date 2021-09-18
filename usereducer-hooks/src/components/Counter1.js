import React, { useReducer } from 'react'

function Counter1() {

    const initialState = 0;

    const reducer = (state, action) => {
        switch(action){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state -1;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <p>{count}</p>
            <button type='button' onClick={()=>dispatch('INCREMENT')}>increment</button>
            <button type='button' onClick={()=>dispatch('DECREMENT')}>decrement</button>
        </div>
    )
}

export default Counter1
