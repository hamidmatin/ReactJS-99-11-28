// import object from 'module'
import React, { Component } from 'react';
import Header from './components/header/Header';
import Students from './components/students/Students';
import Lifecycle from './components/lifecycle/Lifecycle';

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = { 
      showLifecycle: true ,
      toggleButtonBackground: 'red'
    };
  }

  toggleHandler = () =>{

    this.setState({
      showLifecycle: !this.state.showLifecycle,
      toggleButtonBackground: this.state.toggleButtonBackground === 'red'? 'green': 'red'
    })
  }
  render() {
    const inlineStyle = {
      backgroundColor: this.state.toggleButtonBackground,
      color: 'white',
      padding: '.5em 1em',
      fontSize: '20px',
      border: 'None',
      cursor: 'pointer',
      display: 'block',
      margin: '20px auto'
    }
    return (
      <div >
        <Header />
        <button onClick={this.toggleHandler} style={inlineStyle}>Toggle Lifecycle</button>
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
