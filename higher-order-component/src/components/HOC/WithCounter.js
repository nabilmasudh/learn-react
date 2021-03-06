import React, { Component } from 'react'

const WithCounter = (OriginalComponents) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState((prevState)=>({
        count: prevState.count + 1
      }));
    };

    render() {
      const { count } = this.state;
      return (
        <OriginalComponents
          count={count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter
