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

class App extends Component {
  render() {
    const { name, caption } = this.props;

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
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App name="Yagnesh Sharma" caption="react trainer" />);
