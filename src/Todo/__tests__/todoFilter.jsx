import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoFilter from '../todoFilter';

const filterTodo = jest.fn();

const setup = filterType => render(<TodoFilter filterTodo={filterTodo} filterType={filterType} />);

const checkFilterType = filterType => {
  const { queryAllByRole } = setup(filterType);
  const btns = queryAllByRole('button');
  if (filterType === 'all') {
    expect(btns[0]).toHaveClass('bg-blue-700');
  }
  if (filterType === 'pending') {
    expect(btns[1]).toHaveClass('bg-blue-700');
  }
  if (filterType === 'completed') {
    expect(btns[2]).toHaveClass('bg-blue-700');
  }
};

test('should render TodoFilter Component', () => {
  const { container } = setup('all');

  expect(container.firstChild).toBeDefined();
});

test('should take snapshot of the component', () => {
  const { container } = setup('all');
  expect(container.firstChild).toMatchSnapshot();
});

test('should have 3 buttons', () => {
  const { queryAllByRole } = setup('all');
  const btns = queryAllByRole('button');
  expect(btns.length).toBe(3);
  expect(btns[0].innerHTML).toBe('All');
  expect(btns[1].innerHTML).toBe('Pending');
  expect(btns[2].innerHTML).toBe('Completed');
});

test('should apply different color if filter type all', () => {
  checkFilterType('all');
});

test('should apply different color if filter type pending ', () => {
  checkFilterType('pending');
});

test('should apply different color if filter type completed', () => {
  checkFilterType('completed');
});

test('should click buttons', () => {
  const { queryAllByRole } = setup('all');
  const btns = queryAllByRole('button');
  fireEvent.click(btns[0]);
  expect(filterTodo).toBeCalledTimes(1);
  expect(filterTodo).toBeCalledWith('all');
  fireEvent.click(btns[1]);
  expect(filterTodo).toBeCalledTimes(2);
  expect(filterTodo).toBeCalledWith('pending');
  fireEvent.click(btns[2]);
  expect(filterTodo).toBeCalledTimes(3);
  expect(filterTodo).toBeCalledWith('completed');
});
