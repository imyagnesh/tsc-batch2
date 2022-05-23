import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './Todo';
import './style.css';

// all hook Name start with keyword "use"

// class App extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   changeCounter = value => {
//     this.setState(({ counter }) => ({
//       counter: counter + value,
//     }));
//   };

//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         <h1 className="text-4xl font-bold">{counter}</h1>
//         <button type="button" onClick={() => this.changeCounter(1)}>
//           Increment
//         </button>
//         <button type="button" onClick={() => this.changeCounter(-1)}>
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

// 3 life cycle method is not possible
// 2 life cycle method from error state
// 1 getSnapShotBeforeUpdate

// function Child() {
//   const [counter, setCounter] = useState(0);

//   const changeCounter = value => {
//     setCounter(val => val + value);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('counter started');
//     }, 2000);

//     // componentWillUnmount
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <h1 id="header" className="text-4xl font-bold">
//         {counter}
//       </h1>
//       <button type="button" onClick={() => changeCounter(1)}>
//         Increment
//       </button>
//       <button type="button" onClick={() => changeCounter(-1)}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// function App({ data }) {
//   const [oddNumbers, setOddNumbers] = useState(1);

//   const isLoaded = useRef(false);

//   const changeOddNumbers = value => {
//     setOddNumbers(val => val + value);
//   };

//   useEffect(() => {
//     if (isLoaded.current === true) {
//       console.log('called from second useEffect');
//     }
//   }, [oddNumbers]);

//   // 1. componentDidMount
//   useEffect(() => {
//     setInterval(() => {
//       console.log('oddNumbers', oddNumbers);
//       setOddNumbers(val => val + 1);
//     }, 1000);
//   }, []);

//   // 1. componentDidMount
//   // 1. componentDidUpdate
//   // useEffect(() => {
//   //   console.log(document.getElementById('header'));
//   // });

//   return (
//     <div>
//       <div>
//         <h1 id="header" className="text-4xl font-bold">
//           {oddNumbers}
//         </h1>
//         <button type="button" onClick={() => changeOddNumbers(2)}>
//           Increment
//         </button>
//         <button type="button" onClick={() => changeOddNumbers(-2)}>
//           Decrement
//         </button>
//       </div>
//       {oddNumbers < 10 && <Child />}
//     </div>
//   );
// }

const root = createRoot(document.getElementById('root'));
root.render(<Todo />);
