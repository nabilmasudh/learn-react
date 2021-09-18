import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    state = {
        count: 0,
        date: new Date()
    }

    componentDidMount(){
        document.title = `Click ${this.state.count} times`
       this.interval = setInterval(this.tick, 1000)
    }
    componentDidUpdate(){
        document.title = `Click ${this.state.count} times`
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    addClick = () =>{
        this.setState(({count})=>({
            count: count + 1
        }))
    }
    tick = () =>{
        console.log('Clock ticking')
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        const {date} = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type='button' onClick={this.addClick}>Click</button>
                </p>
            </div>
        )
    }
}
