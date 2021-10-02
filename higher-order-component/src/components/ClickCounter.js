import React from 'react'
import WithCounter from './HOC/WithCounter'

function ClickCounter(props) {
    const { count, incrementCount } = props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          Click {count} times
        </button>
      </div>
    );
}

export default WithCounter(ClickCounter)
