/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// 1. Component Name should start with capital letter
// 2. return only single element from component
// 3. inline css will be as object
const backgroundColor = 'green';
const color = 'white';
// Props are immutable

// Function Component
// function App({ name, caption }) {
//   return (
//     <div className="container">
//       <h1
//         style={{
//           backgroundColor,
//           color,
//         }}
//       >
//         {name}
//       </h1>
//       <h2>{caption}</h2>
//       <input type="checkbox" />
//     </div>
//   );
// }

// React JS Component Will re-render only when props and state value change

// let counter = 0;
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  //   // this.incrementCounter = this.incrementCounter.bind(this);
  // }

  state = {
    counter: 0,
  };

  incrementCounter = () => {
    // const { counter } = this.state; // cs
    // // sst
    // this.setState({
    //   counter: counter + 1,
    // });

    // ssf
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    const { name, caption } = this.props;
    const { counter } = this.state;

    console.log('new Counter value is', counter);

    console.log('called render method');

    return (
      <div className="container">
        <h1
          style={{
            backgroundColor,
            color,
          }}
        >
          {`Hello, ${name}`}
        </h1>
        <h2>{caption}</h2>
        <input type="checkbox" />
        <p>=============================================</p>
        <h1>Counter Example</h1>
        <h2>{counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App name="Yagnesh Sharma" caption="react trainer" />);
