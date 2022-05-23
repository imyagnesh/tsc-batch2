import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useAppState from '../hooks/useAppState';
import Error from './error';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const { appStatus, loadingState, successState, errorState, clearError } = useAppState();
  const inputRef = useRef(null);
  const textRef = useRef(null);
  const isMounted = useRef(false);

  const loadTodoList = useCallback(async ft => {
    const type = 'LOAD_TODO';
    try {
      loadingState(type);
      let url = 'http://localhost:3000/todoList';
      if (ft !== 'all') {
        url = `${url}?isDone=${ft === 'completed'}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      setTodoList(json);
      setFilterType(ft);
      successState(type);
    } catch (err) {
      errorState(type, err);
    }
  }, []);

  const addTodo = useCallback(async event => {
    const type = 'ADD_TODO';
    try {
      loadingState(type);
      event.preventDefault();
      const todoText = inputRef.current.value;
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
        setTodoList(prev => [...prev, json]);
        inputRef.current.value = '';
        successState(type);
      } else {
        errorState(type, new Error('Please enter todo text'));
      }
    } catch (err) {
      errorState(type, err);
    }
  }, []);

  const toggleComplete = useCallback(async item => {
    const type = 'UPDATE_TODO';
    try {
      loadingState(type, item.id);

      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();
      setTodoList(prev => {
        const index = prev.findIndex(x => x.id === item.id);
        return [...prev.slice(0, index), json, ...prev.slice(index + 1)];
      });

      successState(type, item.id);
    } catch (error) {
      errorState(type, error, item.id);
    }
  }, []);

  const deleteTodo = useCallback(async id => {
    const type = 'DELETE_TODO';
    try {
      loadingState(type, id);

      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      setTodoList(prev => {
        const index = prev.findIndex(x => x.id === id);
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      });

      successState(type, id);
    } catch (error) {
      errorState(type, error, id);
    }
  }, []);

  // memorize the function
  useEffect(() => {
    loadTodoList('all');
    isMounted.current = true;
  }, []);

  const isLoading = appStatus.some(x => x.type === 'LOAD_TODO' && x.status === 'LOADING');
  const isAdding = appStatus.some(x => x.type === 'ADD_TODO' && x.status === 'LOADING');

  const errorList = useMemo(() => appStatus.filter(x => x.status === 'ERROR'), [appStatus]);

  const isUpdating = useMemo(
    () => appStatus.filter(x => x.type === 'UPDATE_TODO' && x.status === 'LOADING'),
    [appStatus],
  );

  const isDeleting = useMemo(
    () => appStatus.filter(x => x.type === 'DELETE_TODO' && x.status === 'LOADING'),
    [appStatus],
  );

  const getTextBoxValue = () => {
    // O(logN)
    // const text = document.getElementById('xyz').value;

    // O(1)
    const text = textRef.current.value;
    console.log(text);
  };

  return (
    <div className="relative flex flex-col items-center h-screen">
      <input ref={textRef} type="text" id="xyz" />
      <button type="button" onClick={getTextBoxValue}>
        Get Textbox value
      </button>
      {isLoading && (
        <div className="absolute inset-0 h-full flex justify-center items-center bg-slate-400 opacity-70">
          <h1 className="text-white text-2xl font-bold">Loading...</h1>
        </div>
      )}
      <h1 className="text-red-500 font-bold my-10 text-xl md:text-2xl lg:text-5xl">Todo App</h1>
      <TodoForm addTodoHandle={addTodo} ref={inputRef} isAdding={isAdding} />
      <TodoList
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        todoList={todoList}
        isUpdating={isUpdating}
        isDeleting={isDeleting}
      />
      <TodoFilter filterTodo={loadTodoList} filterType={filterType} />
      {errorList.length > 0 && <Error errorList={errorList} clearError={clearError} />}
    </div>
  );
}

export default memo(Todo);
