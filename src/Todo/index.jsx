import React, { PureComponent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends PureComponent {
  inputRef = createRef(null);

  state = {
    todoList: [],
    filterType: 'all',
    isLoading: false,
    isAdding: false,
    isUpdating: [],
    error: '',
  };

  async componentDidMount() {
    this.loadTodoList('all');
  }

  loadTodoList = async filterType => {
    try {
      this.setState({ isLoading: true });

      let url = 'http://localhost:3000/todoList';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json, isLoading: false });
    } catch (err) {
      this.setState({ error: err.message, isLoading: false });
    }
  };

  // 1. add async
  // 2. add try/catch

  addTodo = async event => {
    try {
      this.setState({ isAdding: true });
      event.preventDefault();
      const todoText = this.inputRef.current.value;
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({ text: todoText, isDone: false }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();

      if (todoText) {
        this.setState(
          ({ todoList }) => ({
            todoList: [...todoList, json],
            error: '',
          }),
          () => {
            this.inputRef.current.value = '';
          },
        );
      } else {
        this.setState({ error: 'Please enter todotext' });
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isAdding: false });
    }
  };

  toggleComplete = async item => {
    try {
      this.setState(({ isUpdating }) => ({
        isUpdating: [...isUpdating, { loading: true, id: item.id }],
      }));

      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), json, ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {
    } finally {
      this.setState(({ isUpdating }) => ({
        isUpdating: isUpdating.filter(x => x.id !== item.id),
      }));
    }
  };

  deleteTodo = async id => {
    try {
      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {}
  };

  // filterTodo = filterType => {
  //   this.setState({
  //     filterType,
  //   });
  // };

  render() {
    const { todoList, filterType, error, isLoading, isAdding, isUpdating } = this.state;

    return (
      <div className="relative flex flex-col items-center h-screen">
        {isLoading && (
          <div className="absolute inset-0 h-full flex justify-center items-center bg-slate-400 opacity-70">
            <h1 className="text-white text-2xl font-bold">Loading...</h1>
          </div>
        )}

        <h1 className="text-red-500 font-bold my-10 text-xl md:text-2xl lg:text-5xl">Todo App</h1>
        {error && <p className="text-red-500 text-lg text-center">{error}</p>}
        <TodoForm addTodoHandle={this.addTodo} ref={this.inputRef} isAdding={isAdding} />
        <TodoList
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
          todoList={todoList}
          isUpdating={isUpdating}
        />
        <TodoFilter filterTodo={this.loadTodoList} filterType={filterType} />
      </div>
    );
  }
}

export default Todo;
