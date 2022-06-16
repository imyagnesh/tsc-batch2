import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Button({ disabled, className, ...props }) {
  return (
    <button
      type="button"
      disabled={!!disabled}
      className={cn(
        'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400',
        {
          [className]: !!className,
        },
      )}
      {...props}
    />
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default memo(Button);
