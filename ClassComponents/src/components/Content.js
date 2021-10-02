import { useContext } from "react";
import themeContext from "../contexts/themeContext";
import Counter from './Counter'
import HoverCounter from './HoverCounter'

function Content(){
    const context = useContext(themeContext)
    const {theme, swithTheme} = context;
    console.log('content rendered')
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

export default Content;
