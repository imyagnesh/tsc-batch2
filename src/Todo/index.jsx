import React, { PureComponent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends PureComponent {
  inputRef = createRef(null);

  state = {
    todoList: [],
    filterType: 'all',
    error: '',
  };

  addTodo = event => {
    event.preventDefault();
    const todoText = this.inputRef.current.value;
    if (todoText) {
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, { id: new Date().valueOf(), text: todoText, isDone: false }],
          error: '',
        }),
        () => {
          this.inputRef.current.value = '';
        },
      );
    } else {
      this.setState({ error: 'Please enter todotext' });
    }
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
    const { todoList, filterType, error } = this.state;

    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-red-500 font-bold my-10 text-xl md:text-2xl lg:text-5xl">Todo App</h1>
        {error && <p className="text-red-500 text-lg text-center">{error}</p>}
        <TodoForm addTodoHandle={this.addTodo} ref={this.inputRef} />
        <TodoList
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
          filterType={filterType}
          todoList={todoList}
        />
        <TodoFilter filterTodo={this.filterTodo} filterType={filterType} />
      </div>
    );
  }
}

export default Todo;
