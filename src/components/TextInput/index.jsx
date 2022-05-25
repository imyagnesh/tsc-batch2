import React from 'react';

function TextInput({ id, className, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {props.placeholder}
      </label>
      <input
        id={id}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
          className || ''
        }`}
        {...props}
      />
    </div>
  );
}

export default TextInput;
