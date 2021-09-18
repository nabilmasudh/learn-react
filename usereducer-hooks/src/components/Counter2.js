import React, { useReducer } from 'react'

function Counter2() {

    const initialState = {
        count1: 0,
        count2: 0
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'INCREMENT_ONE':
                return{
                    ...state, count1: state.count1 + action.value
                };
            case 'DECREMENT_ONE':
                return{
                    ...state, count1: state.count1 - action.value
                };
            case 'INCREMENT_TWO':
                return{
                    ...state, count2: state.count2 + action.value
                };
            case 'DECREMENT_TWO':
                return{
                    ...state, count2: state.count2 - action.value
                };
            case 'RESET':
                return{
                    ...state, count2: 0,
                }
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                <p>count 1</p>
                <p>Increment 1: {count.count1}</p>
                <button type='button' onClick={()=>dispatch({
                    type:'INCREMENT_ONE', value: 1,
                })}>increment</button>
                <button type='button' onClick={()=> dispatch({
                    type:'DECREMENT_ONE', value: 1,
                })}>decrement</button>
            </div>
            <div>
                <p>count 2</p>
                <p>Increment 5: {count.count2}</p>
                <button type='button' onClick={()=>dispatch({
                    type:'INCREMENT_TWO', value: 5,
                })}>increment</button>
                <button type='button' onClick={()=>dispatch({
                    type:'RESET',
                })}>reset</button>
                <button type='button' onClick={()=>dispatch({
                    type:'DECREMENT_TWO', value: 1,
                })}>decrement</button>
            </div>
            
        </div>
    )
}

export default Counter2;
