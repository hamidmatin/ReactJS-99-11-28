// import object from 'module'
import React, { Component } from 'react';
import Header from './components/header/Header';
import Students from './components/students/Students';
import Lifecycle from './components/lifecycle/Lifecycle';

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = { showLifecycle: true };
  }

  toggleHandler = () =>{
    this.setState({showLifecycle: !this.state.showLifecycle})
  }
  render() {
    return (
      <div>
        <Header />
        <button onClick={this.toggleHandler}>Toggle Lifecycle</button>
        {this.state.showLifecycle ? (
          <Lifecycle message='Lifecycle compnent in react' />
        ) : null}

        <hr />
        <Students />
      </div>
    );
  }
}
export default App;
