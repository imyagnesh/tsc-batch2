import React, { memo } from 'react';
import PropTypes from 'prop-types';

function IconButton({ label, children, className, ...props }) {
  return (
    <button
      type="button"
      className={`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
        className || ''
      }`}
      {...props}
    >
      <span className="sr-only">{label}</span>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
};

export default memo(IconButton);
