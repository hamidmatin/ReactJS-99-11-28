import React, { Component } from 'react';
import Student from './Student';
import './Students.css';

export default class Students extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='students-title'>
          <span>Student List</span>
        </h2>
        <div className='student-list'>
          <Student FirstName='Mohammad Mehdi' LastName='Amiri' />
          <Student FirstName='Pejman' LastName='Namdari' />
          <Student FirstName='Mohammad Mehdi' LastName='Moallemi' />
          <Student FirstName='Negin' LastName='Salehi' />
        </div>
      </div>
    );
  }
}
