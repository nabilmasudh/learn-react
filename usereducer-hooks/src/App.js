import React from 'react'
import './App.css'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import PostOne from './components/PostOne'
import PostTwo from './components/PostTwo'

function App() {
    return (
        <div className='App'>
            <PostOne/>
            <PostTwo/>
            <Counter1/>
            <Counter2/>
            <Counter3/>
        </div>
    )
}

export default App
