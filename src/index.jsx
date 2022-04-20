import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './Todo';
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Todo />);
