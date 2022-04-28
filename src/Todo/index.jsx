import React, { PureComponent, createRef } from 'react';
import Error from './error';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends PureComponent {
  inputRef = createRef(null);

  state = {
    todoList: [],
    filterType: 'all',
    appStatus: [],
  };

  async componentDidMount() {
    this.loadTodoList('all');
  }

  loadingState = (type, id) => {
    this.setState(({ appStatus }) => ({
      appStatus: [
        ...appStatus,
        {
          type,
          id,
          status: 'LOADING',
          errorMessage: '',
        },
      ],
    }));
  };

  successState = (type, id) => {
    this.setState(({ appStatus }) => ({
      appStatus: appStatus.filter(x => !(x.type === type && x.id === id)),
    }));
  };

  errorState = (type, err, id) => {
    this.setState(({ appStatus }) => ({
      appStatus: appStatus.map(x =>
        x.type === type && x.id === id ? { ...x, status: 'ERROR', errorMessage: err.message } : x,
      ),
    }));
  };

  loadTodoList = async filterType => {
    const type = 'LOAD_TODO';
    try {
      this.loadingState(type);
      let url = 'http://localhost:3000/todoList';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json });
      this.successState(type);
    } catch (err) {
      this.errorState(type, err);
    }
  };

  // 1. add async
  // 2. add try/catch

  addTodo = async event => {
    const type = 'ADD_TODO';
    try {
      this.loadingState(type);
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
          }),
          () => {
            this.inputRef.current.value = '';
          },
        );
        this.successState(type);
      } else {
        this.errorState(type, new Error('Please enter todo text'));
      }
    } catch (err) {
      this.errorState(type, err);
    }
  };

  toggleComplete = async item => {
    const type = 'UPDATE_TODO';
    try {
      this.loadingState(type, item.id);

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
      this.successState(type, item.id);
    } catch (error) {
      this.errorState(type, error, item.id);
    }
  };

  deleteTodo = async id => {
    const type = 'DELETE_TODO';
    try {
      this.loadingState(type, id);

      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
      this.successState(type, id);
    } catch (error) {
      this.errorState(type, error, id);
    }
  };

  // filterTodo = filterType => {
  //   this.setState({
  //     filterType,
  //   });
  // };

  clearError = id => {
    this.setState(({ appStatus }) => ({
      appStatus: appStatus.filter(x => x.id !== id),
    }));
  };

  render() {
    const { todoList, filterType, appStatus } = this.state;

    const isLoading = appStatus.some(x => x.type === 'LOAD_TODO' && x.status === 'LOADING');
    const errorList = appStatus.filter(x => x.status === 'ERROR');

    return (
      <div className="relative flex flex-col items-center h-screen">
        {isLoading && (
          <div className="absolute inset-0 h-full flex justify-center items-center bg-slate-400 opacity-70">
            <h1 className="text-white text-2xl font-bold">Loading...</h1>
          </div>
        )}

        <h1 className="text-red-500 font-bold my-10 text-xl md:text-2xl lg:text-5xl">Todo App</h1>
        <TodoForm
          addTodoHandle={this.addTodo}
          ref={this.inputRef}
          isAdding={appStatus.some(x => x.type === 'ADD_TODO' && x.status === 'LOADING')}
        />
        <TodoList
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
          todoList={todoList}
          isUpdating={appStatus.filter(x => x.type === 'UPDATE_TODO' && x.status === 'LOADING')}
          isDeleting={appStatus.filter(x => x.type === 'DELETE_TODO' && x.status === 'LOADING')}
        />
        <TodoFilter filterTodo={this.loadTodoList} filterType={filterType} />
        {errorList.length > 0 && <Error errorList={errorList} clearError={this.clearError} />}
      </div>
    );
  }
}

export default Todo;
