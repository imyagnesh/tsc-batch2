import React from 'react';

function LinkUI({ ...props }) {
  return <a {...props} className="font-medium text-indigo-600 hover:text-indigo-500" />;
}

export default LinkUI;
