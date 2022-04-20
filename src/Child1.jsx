import React, { PureComponent, Component } from 'react';

class Child1 extends PureComponent {
  state = {
    count: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return shallowCompare(this, nextProps, nextState);
  //   if (this.props.counter !== nextProps.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    this.interval = setInterval(() => {
      console.log('inverval');
    }, 1000);
  }

  // calculate current possition
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello from getSnapshotBeforeUpdate';
  }

  // Manupulate Dom element
  // < 60FPS
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(this.props);
    console.log(prevProps);

    console.log(snapShot);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('mouse moved');
  };

  incrementCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    console.log('Child 1 Component render');
    const { user } = this.props;
    const { count } = this.state;

    if (count > 5) {
      throw new Error('something went wrong...');
    }

    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Child 1 Component</h2>
        <h3>{count}</h3>
        <button type="button" onClick={this.incrementCount}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default Child1;
