import React from 'react';
import PropTypes from 'prop-types';
import ErrorItem from './errorItem';

function Error({ errorList, clearError }) {
  return (
    <>
      {errorList.map((item, index) => (
        <ErrorItem key={item.id} index={index} item={item} clearError={clearError} />
      ))}
    </>
  );
}

Error.propTypes = {
  errorList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      errorMessage: PropTypes.string,
    }),
  ).isRequired,
  clearError: PropTypes.func.isRequired,
};

export default Error;
