import React from 'react';
import { createRoot } from 'react-dom/client';

// 1. Component Name should start with capital letter
// 2. return only single element from component
// 3. inlinse will be as object
const backgroundColor = 'green';
const color = 'white';

function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor,
          color,
        }}
      >
        Hello from component
      </h1>
      <input />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
