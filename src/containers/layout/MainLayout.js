import React, { Component } from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Header';
export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        
          <Header />

          {this.props.children}

          <Footer />
      </React.Fragment>
    );
  }
}
