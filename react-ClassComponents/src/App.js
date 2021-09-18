import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import User from "./components/User";
import Section from "./components/Section";
import React from "react";
import themeContext from "./contexts/themeContext";


class App extends React.Component{
    state = {
        theme: 'dark',

            swithTheme: () =>{
            this.setState(({theme})=>{
                if(theme === 'dark'){
                    return {
                        theme: 'light'
                    }
                }return {theme : 'dark'}
            })
        }
    };

    render(){
        return (
            <div>
                <Counter>
                    {(counter, incrementCount)=>(
                        <ClickCounter count={counter} incrementCount={incrementCount}/>
                    )}
                </Counter>
                <themeContext.Provider value={this.state}>
                    <Section/>
                </themeContext.Provider>
                

                <User render={(isComponent)=> isComponent ? 'Component True' : 'Component False'} />

            </div>
        );
    }
}

export default App;