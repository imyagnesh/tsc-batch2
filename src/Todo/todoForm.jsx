import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodoHandle }, ref) => (
  <form onSubmit={addTodoHandle}>
    <input
      ref={ref}
      id="txtTodoText"
      type="text"
      placeholder="Write your todo here..."
      className="rounded-l-md"
    />
    <button type="submit" className="btn-primary rounded-l-none">
      Add Todo
    </button>
  </form>
));

TodoForm.propTypes = {
  addTodoHandle: PropTypes.func.isRequired,
};

export default memo(TodoForm);
