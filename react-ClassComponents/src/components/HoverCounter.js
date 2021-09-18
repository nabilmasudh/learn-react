import React from 'react'

function HoverCounter({incrementCount, count, theme, swithTheme}) {
    console.log('HoverCounter rendered')
    const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#FFFFFF'} : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hover {count} times</h1>
            <button type='button' onClick={swithTheme}>Change Theme</button>
        </div>
    )
}

export default HoverCounter;
