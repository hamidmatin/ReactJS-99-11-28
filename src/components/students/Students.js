import React, { Component } from 'react';
import Student from './Student';
import './Students.css';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        {
          firstName: 'Mohammad Mehdi',
          lastName: 'Amiri',
        },
        {
          firstName: 'Pejman',
          lastName: 'Namdari',
        },
        {
          firstName: 'Mohammad Mehdi',
          lastName: 'Moallemi',
        },
        {
          firstName: 'Negin',
          lastName: 'Salehi',
        },
      ],
    };
  }
  render() {
    return (
      <div className='container'>
        <h2 className='students-title'>
          <span>Student List</span>
        </h2>
        <div className='student-list'>
          {this.state.studentList.map((student, index) => (
            <Student
              key={index}
              FirstName={student.firstName}
              LastName={student.lastName}
            />
          ))}
        </div>
      </div>
    );
  }
}
