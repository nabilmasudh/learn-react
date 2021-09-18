import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error:'',
    post: {},
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return{
                loading: false,
                post: action.result,
                error: '',
            }
        case 'REMOVE':
        return{
            loading: false,
            post: {},
            error: 'There was a problem fetching',
        }
        default: return state;
    }
}

function PostTwo() {
    const [state, dispach] = useReducer(reducer, initialState)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((date)=>{
            dispach({type:'SUCCESS', result: date})
        })
        .catch(()=>{
            dispach({type: 'REMOVE'})
        })
    })

    const {title, body} = state.post;
    return (
        <div>
            <p>This is Post 2 Component</p>
            {state.loading ? 'Loading....' :
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            }
            {state.error || null}
        </div>
    )
}

export default PostTwo;
