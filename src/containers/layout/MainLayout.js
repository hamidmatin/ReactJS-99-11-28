import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Posts from '../../components/posts/Posts';
import Users from '../../components/users/Users';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Home from '../../components/home/Home';
import PostForm from '../../components/posts/PostForm';
export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          {/* <Switch> */}
            <Route path='/' exact component={Home} />
            <Route path='/users' component={Users} />
            <Route path='/posts' exact>
              <Posts />
            </Route>
            <Route path='/posts/create_post' component={PostForm} />
          {/* </Switch> */}
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
