/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';

// App.getDerivedStateFromProps = (props, state) => {
//   console.log('getDerivedStateFromProps');
//   return {
//     greetUser: `Hello ${props.name}`,
//   };
// };

const root = createRoot(document.getElementById('root'));
root.render(<App name="Yagnesh Modh" caption="react trainer" />);
