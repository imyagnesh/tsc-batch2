import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ item, toggleComplete, deleteTodo, isUpdating }) {
  return (
    <div className="flex items-center m-4">
      <input
        type="checkbox"
        disabled={!!isUpdating}
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
        className="disabled:text-gray-400 disabled:border-gray-200"
      />
      <p className={`flex-1 px-4 truncate ${item.isDone ? 'line-through' : ''}`}>{item.text}</p>
      <button type="button" className="btn-primary" onClick={() => deleteTodo(item.id)}>
        Delete
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  item: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  isUpdating: PropTypes.exact({
    id: PropTypes.number,
    loading: PropTypes.bool,
  }),
};

TodoListItem.defaultProps = {
  isUpdating: undefined,
};

export default memo(TodoListItem);
