import React from "react";
import themeContext from "../contexts/themeContext";
import Counter from './Counter'
import HoverCounter from './HoverCounter'

export default class Content extends React.Component {
    
    render() {
        const {theme, swithTheme} = this.context;
        return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) =>(
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        swithTheme={swithTheme}
                    />
                )}
            </Counter>
        </div>
    )
    }
}

Content.contextType = themeContext;
