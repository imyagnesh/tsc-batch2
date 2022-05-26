import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TextInput({ id, className, placeholder, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
          className || ''
        }`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  className: '',
};

export default memo(TextInput);
