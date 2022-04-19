import React, { PureComponent, Component } from 'react';

class Child1 extends PureComponent {
  state = {};

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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello from getSnapshotBeforeUpdate';
  }

  // Manupulate Dom element
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

  render() {
    console.log('Child 1 Component render');
    const { user } = this.props;

    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Child 1 Component</h2>
      </div>
    );
  }
}

export default Child1;
