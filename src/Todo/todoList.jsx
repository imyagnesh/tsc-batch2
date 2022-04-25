import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

function TodoList({ toggleComplete, deleteTodo, filterType, todoList }) {
  return (
    <div className="w-full flex-1 overflow-y-auto">
      {todoList.map(item => {
        if (
          filterType === 'all' ||
          (filterType === 'pending' && item.isDone === false) ||
          (filterType === 'completed' && item.isDone === true)
        ) {
          return (
            <TodoListItem
              key={item.id}
              item={item}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        }

        return null;
      })}
    </div>
  );
}

TodoList.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
};

export default memo(TodoList);
