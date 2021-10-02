import React, {Component} from "react";


export default class Clock2 extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), locale: 'en-US'}
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.cloclTimer = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.cloclTimer)
    }
    handleClick(){
        this.setState({
            locale:'bn-BD'
        })
    }
    tick(){
        this.setState({
            date: new Date(),
        });
    }
    render(){
        const {date, locale} = this.state;
        return (
            <div>
                <span>
                    <h1>Time-1:- {date.toLocaleTimeString(locale)}</h1>
                </span>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        );
    }
}
