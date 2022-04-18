import React, { Component } from 'react';

class Child1 extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.counter !== nextProps.counter) {
      return true;
    }
    return false;
  }

  render() {
    console.log('Child 1 Component render');
    const { counter } = this.props;

    return (
      <div>
        <h1>{counter}</h1>
        <h2>Child 1 Component</h2>
      </div>
    );
  }
}

export default Child1;
