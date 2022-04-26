import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ item, toggleComplete, deleteTodo }) {
  return (
    <div className="flex items-center m-4">
      <input type="checkbox" checked={item.isDone} onChange={() => toggleComplete(item)} />
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
};

export default memo(TodoListItem);
