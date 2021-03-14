import React, { Component } from 'react';
import AdminSideBar from '../../components/admin/AdminSideBar';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default class AdminLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='d-flex'>
          <div style={{width: '15%'}}>
            <AdminSideBar />
          </div>
          <div style={{width: '85%'}}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
