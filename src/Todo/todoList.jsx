import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

function TodoList({ toggleComplete, deleteTodo, todoList, isUpdating }) {
  return (
    <div className="w-full flex-1 overflow-y-auto">
      {todoList.map(item => (
        <TodoListItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          isUpdating={isUpdating.find(x => x.id === item.id)}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  isUpdating: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      loading: PropTypes.bool,
    }),
  ).isRequired,
};

export default memo(TodoList);
