/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App name="Yagnesh Sharma" caption="react trainer" />);
