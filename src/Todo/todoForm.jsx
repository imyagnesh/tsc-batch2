import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodoHandle, isAdding }, ref) => (
  <form onSubmit={addTodoHandle}>
    <input
      ref={ref}
      id="txtTodoText"
      type="text"
      placeholder="Write your todo here..."
      className="rounded-l-md"
    />
    <button
      type="submit"
      disabled={isAdding}
      className="btn-primary rounded-l-none disabled:bg-slate-400"
    >
      Add Todo
    </button>
  </form>
));

TodoForm.propTypes = {
  addTodoHandle: PropTypes.func.isRequired,
  isAdding: PropTypes.bool.isRequired,
};

export default memo(TodoForm);
