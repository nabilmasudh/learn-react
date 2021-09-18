import React, { useReducer } from 'react'

function Counter3() {

    const initialState1 = 0
    const initialState2 = 5

    const reducer = (state, action) =>{
        switch(action){
            case 'INCREMENT_ONE':
                return state + 1;
            case 'DECREMENT_ONE':
                return state - 1;
            case 'INCREMENT_TWO':
                return state + 1;
            case 'DECREMENT_TWO':
                return state - 1
            default:
                return state;
        }
    }

    const [counter1, dispatch1] = useReducer(reducer, initialState1)
    const [counter2, dispatch2] = useReducer(reducer, initialState2)
    return (
        <div>
            <div>
                <p>Counter-1: {counter1}</p>
                <button type='button' onClick={()=>dispatch1('INCREMENT_ONE')}>INCREMENT</button>
                <button type='button' onClick={()=>dispatch1('DECREMENT_ONE')}>INCREMENT</button>
            </div>
            <div>
                <p>Counter-2: {counter2}</p>
                <button type='button' onClick={()=>dispatch2('INCREMENT_TWO')}>INCREMENT</button>
                <button type='button' onClick={()=>dispatch2('DECREMENT_TWO')}>DECREMENT</button>
            </div>
        </div>
    )
}

export default Counter3
