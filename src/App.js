// import object from 'module'
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import AppRoute from './containers/appRoute/AppRoute';
import AdminLayout from './containers/layout/AdminLayout';
import MainLayout from './containers/layout/MainLayout';
import Todos from './components/todos/Todos';
import ProductDetail from './components/products/ProductDetail';
import ProductIndex from './components/products/ProductIndex';
import ReduxClassBase from './components/redux/ReduxClassBase';
import ReduxFunctionBase from './components/redux/ReduxFunctionBase';
import AlbumsIndex from './components/albums/AlbumsIndex';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <Switch>
          <AppRoute 
            path='/' 
            exact 
            component={Home} 
            layout={MainLayout} />
          <AppRoute 
            path='/users' 
            component={Users} 
            layout={MainLayout} />
          <AppRoute 
            path='/posts' 
            component={Posts} 
            layout={MainLayout} />
          <AppRoute 
            path='/todos' 
            component={Todos} 
            layout={MainLayout} />
          <AppRoute 
            path='/products' exact
            component={ProductIndex} 
            layout={MainLayout} />
          <AppRoute 
            path='/products/:id' 
            component={ProductDetail} 
            layout={MainLayout} />
          <AppRoute 
            path='/reduxclassbase' 
            component={ReduxClassBase} 
            layout={MainLayout} />
          <AppRoute 
            path='/reduxfunctionbase' 
            component={ReduxFunctionBase} 
            layout={MainLayout} />
          <AppRoute 
            path='/albums' 
            component={AlbumsIndex} 
            layout={MainLayout} />
          <AppRoute
            path='/admin/'
            exact
            component={Admin}
            layout={AdminLayout}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
