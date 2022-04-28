import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorItem extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      const { item, clearError } = this.props;
      clearError(item.id);
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { index, item, clearError } = this.props;
    return (
      <div
        className="bg-red-100 w-1/3 fixed right-4 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
        role="alert"
        style={{
          top: index * 80 + 4,
        }}
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-red-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-bold">{item.type.replaceAll('_', ' ')}</p>
            <p className="text-sm">{item.errorMessage}</p>
          </div>
          <svg
            role="button"
            onClick={() => clearError(item.id)}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current h-10 w-10 text-red-500 mr-4"
            viewBox="0 0 48 48"
          >
            <path d="M16.5 33.6 24 26.1 31.5 33.6 33.6 31.5 26.1 24 33.6 16.5 31.5 14.4 24 21.9 16.5 14.4 14.4 16.5 21.9 24 14.4 31.5ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z" />
          </svg>
        </div>
      </div>
    );
  }
}

ErrorItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    errorMessage: PropTypes.string,
  }).isRequired,
  clearError: PropTypes.func.isRequired,
};

export default ErrorItem;
