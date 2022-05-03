import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ item, toggleComplete, deleteTodo, isUpdating, isDeleting }) {
  return (
    <div className="flex items-center m-4">
      <input
        data-testid="isDone-checkbox"
        type="checkbox"
        disabled={!!isUpdating}
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
        className="disabled:text-gray-400 disabled:border-gray-200"
      />
      <p
        data-testid="todo-text"
        className={`flex-1 px-4 truncate ${item.isDone ? 'line-through' : ''}`}
      >
        {item.text}
      </p>
      <button
        type="button"
        disabled={!!isDeleting}
        className="btn-primary disabled:bg-gray-400"
        onClick={() => deleteTodo(item.id)}
      >
        Delete Item
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
  isDeleting: PropTypes.exact({
    id: PropTypes.number,
    loading: PropTypes.bool,
  }),
};

TodoListItem.defaultProps = {
  isUpdating: undefined,
  isDeleting: undefined,
};

export default memo(TodoListItem);
