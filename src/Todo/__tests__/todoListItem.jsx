import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoListItem from '../todoListItem';

const toggleComplete = jest.fn();

const deleteTodo = jest.fn();

const item = {
  text: 'asdfasdf',
  isDone: false,
  id: 2,
};

const completedItem = {
  text: 'get milk',
  isDone: true,
  id: 3,
};

const setup = data =>
  render(
    <TodoListItem
      item={data}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      isUpdating={undefined}
      isDeleting={undefined}
    />,
  );

test('should render todoListItem Component', () => {
  const { container } = setup(item);

  expect(container.firstChild).toBeDefined();
});

test('should take snapshot of the component', () => {
  const { container } = setup(item);
  expect(container.firstChild).toMatchSnapshot();
});

test('should click delete button', () => {
  const { queryByRole } = setup(item);

  const deleteBtn = queryByRole('button');

  expect(deleteBtn).not.toBeNull();

  fireEvent.click(deleteBtn);
  fireEvent.click(deleteBtn);

  expect(deleteTodo).toBeCalledTimes(2);
  expect(deleteTodo).toBeCalledWith(item.id);
});

test('should change checkbox value', () => {
  const { queryByTestId } = setup(item);

  const isDoneCheckbox = queryByTestId('isDone-checkbox');

  expect(isDoneCheckbox).not.toBeNull();

  fireEvent.click(isDoneCheckbox);

  expect(toggleComplete).toBeCalledTimes(1);
  expect(toggleComplete).toBeCalledWith(item);
});

test('should line-through not available for isdone false', () => {
  const { queryByTestId } = setup(item);
  const todoText = queryByTestId('todo-text');
  expect(todoText).not.toHaveClass('line-through');
});

test('should line-through  available for isdone true', () => {
  const { queryByTestId } = setup(completedItem);
  const todoText = queryByTestId('todo-text');
  expect(todoText).toHaveClass('line-through');
});
