import React, {useState} from 'react'

function Objects() {
    const [todo, setTodo] = useState({
        title:'',
        description: '',
    })



    
    const {title, description} = todo;
    return (
        <div>
            <p>{title}</p>
            <input type='text' value={title} onChange={(e)=>setTodo({
                ...todo,
                title: e.target.value,
            })}/>
            <br/>
            <br/>
            <textarea name='todo' value={description} onChange={(e)=> setTodo({
                ...todo,
                description: e.target.value,
            })}/>
        </div>
    )
}

export default Objects;
