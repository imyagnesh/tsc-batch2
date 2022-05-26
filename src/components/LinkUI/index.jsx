import React, { memo } from 'react';
import PropTypes from 'prop-types';

function LinkUI({ children, ...props }) {
  return (
    <a className="font-medium text-indigo-600 hover:text-indigo-500" {...props}>
      {children}
    </a>
  );
}

LinkUI.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(LinkUI);
