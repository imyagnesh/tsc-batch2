import React, { Component, createRef } from 'react';

class Todo extends Component {
  inputRef = createRef(null);

  state = {
    todoList: [],
  };

  addTodo = event => {
    event.preventDefault();

    const todoText = this.inputRef.current.value;
    this.setState(
      ({ todoList }) => ({
        todoList: [...todoList, todoText],
      }),
      () => {
        this.inputRef.current.value = '';
      },
    );
  };

  render() {
    console.log('render');

    const { todoList } = this.state;

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-red-500 font-bold my-10 text-xl md:text-2xl lg:text-5xl">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input
            ref={this.inputRef}
            id="txtTodoText"
            type="text"
            placeholder="Write your todo here..."
            className="rounded-l-md"
          />
          <button type="submit" className="btn-primary rounded-l-none">
            Add Todo
          </button>
        </form>
        <div>
          {todoList.map(item => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
