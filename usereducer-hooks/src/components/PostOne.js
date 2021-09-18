import React, { useEffect, useState } from 'react'

function PostOne() {
    const [loading, setLoadin] = useState(false)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            setLoadin(false);
            setPost(data);
            setError('')
        })
        .catch(()=>{
            setLoadin(false)
            setPost({})
            setError('There wase Problem')
        })
    })
    const {title, body} = post;
    return (
        
        <div>
            <p>This is Post 1 Component</p>
            {loading ? 'Loading....' :
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            }
            {error || null}
        </div>
    )
}

export default PostOne
