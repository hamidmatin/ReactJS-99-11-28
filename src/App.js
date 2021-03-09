// import object from 'module'
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import AdminLayout from './containers/layout/AdminLayout';
import MainLayout from './containers/layout/MainLayout';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={MainLayout} />
        <Route path='/admin'  component={AdminLayout} />
      </BrowserRouter>
    );
  }
}
export default App;
