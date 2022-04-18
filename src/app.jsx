import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// Four Stages of Lifecycle Method
// 1. Mounting
// 2. Updating
// 3. Unmounting
// 4. Error

// Lifecycle methods are possible only in class component

// Why we have to use class component over function component
// 1. If I want to use State then we have to use class component
// 2. if I want to use Life cycle method then we have to use class component
// 3. To Manipulate data

// Mounting Stage

// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// Updating Stage (whenever props or state change Updating Stage will fire)
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render

class App extends Component {
  // Use of the constructor
  // 1. declare state value(alternative is available)
  // 2. Base on prop value set state value
  // 3. Bind methods
  // 4. Analytics

  // Note: we can call API to send data to database
  // We cant use response of API to set State value
  // Async we cant set state value in Constructor

  // Note: call only once
  constructor(props) {
    super(props);
    console.log('Render constructor');
    this.state = {
      counter: 0,
      user: [],
      greetUser: `Hello ${props.name}`,
    };
    console.log(document.getElementById('name'));
    // API Call
  }

  // To derive state value base on Old Props value or state value

  // Note: this will call everytime whenever state or prop value change
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps');
  //   console.log(document.getElementById('name'));
  //   return {
  //     greetUser: `Hello ${props.name}`,
  //   };
  // }

  // 1. Manipulate DOM element
  // 2. define event listeners
  // 3. Display Data on Page Load

  // Note: Call Only once
  componentDidMount() {
    console.log('componentDidMount');

    const h1Name = document.getElementById('name');
    h1Name.style = 'color:yellow';

    document.addEventListener('copy', () => {
      console.log('text copied');
    });

    // User api call -> users
    // this.setState({ user: data})

    // Mek Api call get data
    // set the state
  }

  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  };

  changeGreetUser = () => {
    this.setState((undefine, { name }) => ({
      greetUser: `Bonjour ${name}`,
    }));
  };

  // to map html to DOM(Document Object Model)
  render() {
    console.log(this.state);
    console.log('Render App Component');
    const { counter, greetUser } = this.state;

    return (
      <div>
        <h1 id="name">{greetUser}</h1>
        <h1>{counter}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
        <button type="button" onClick={this.changeGreetUser}>
          Change Greet user
        </button>

        <Child1 counter={counter} />
        <Child2 />
      </div>
    );
  }
}

export default App;
