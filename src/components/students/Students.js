import React, { Component } from 'react';
import Student from './Student';
import './Students.css';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        {
          FirstName: 'Mohammad Mehdi',
          lastName: 'Amiri',
        },
        {
          FirstName: 'Pejman',
          lastName: 'Namdari',
        },
        {
          FirstName: 'Mohammad Mehdi',
          lastName: 'Moallemi',
        },
        {
          FirstName: 'Negin',
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
          <Student
            FirstName={this.state.studentList[0].FirstName}
            LastName={this.state.studentList[0].lastName}
          />
          <Student
            FirstName={this.state.studentList[1].FirstName}
            LastName={this.state.studentList[1].lastName}
          />
          <Student
            FirstName={this.state.studentList[2].FirstName}
            LastName={this.state.studentList[2].lastName}
          />
          <Student
            FirstName={this.state.studentList[3].FirstName}
            LastName={this.state.studentList[3].lastName}
          />
        </div>
      </div>
    );
  }
}
