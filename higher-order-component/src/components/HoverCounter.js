import React from 'react'
import WithCounter from './HOC/WithCounter';
function HoverCounter({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  );
}

export default WithCounter(HoverCounter)
