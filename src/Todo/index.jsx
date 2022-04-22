import React, { Component, createRef } from 'react';

class Todo extends Component {
  inputRef = createRef(null);

  state = {
    todoList: [],
    filterType: 'all',
  };

  addTodo = event => {
    event.preventDefault();
    const todoText = this.inputRef.current.value;

    this.setState(
      ({ todoList }) => ({
        todoList: [...todoList, { id: new Date().valueOf(), text: todoText, isDone: false }],
      }),
      () => {
        this.inputRef.current.value = '';
      },
    );
  };

  toggleComplete = id => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !todoList[index].isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = id => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  filterTodo = filterType => {
    this.setState({
      filterType,
    });
  };

  render() {
    const { todoList, filterType } = this.state;

    return (
      <div className="flex flex-col items-center h-screen">
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
        <div className="w-full flex-1 overflow-y-auto">
          {todoList.map(item => {
            const todoItem = (
              <div key={item.id} className="flex items-center m-4">
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => this.toggleComplete(item.id)}
                />
                <p className={`flex-1 px-4 truncate ${item.isDone ? 'line-through' : ''}`}>
                  {item.text}
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => this.deleteTodo(item.id)}
                >
                  Delete
                </button>
              </div>
            );
            if (
              filterType === 'all' ||
              (filterType === 'pending' && item.isDone === false) ||
              (filterType === 'completed' && item.isDone === true)
            ) {
              return todoItem;
            }

            return null;
          })}
        </div>
        <div className="flex w-full">
          <button
            type="button"
            className="btn-primary rounded-none flex-1"
            onClick={() => this.filterTodo('all')}
          >
            All
          </button>
          <button
            type="button"
            className="btn-primary rounded-none flex-1"
            onClick={() => this.filterTodo('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn-primary rounded-none flex-1"
            onClick={() => this.filterTodo('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
