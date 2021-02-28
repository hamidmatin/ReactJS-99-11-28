// import object from 'module'
import React, { Component } from 'react';
import Header from './components/header/Header';
import Students from './components/students/Students';

import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Students />
      </div>
    );
  }
}
export default App;
