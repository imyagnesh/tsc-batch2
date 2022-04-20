import React, { Component } from 'react';

class Todo extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="text-red-500 font-bold text-center mt-10 text-xl md:text-2xl lg:text-5xl">
          Todo App
        </h1>
        <form>
          <input type="text" placeholder="Write your todo here..." />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Todo;
