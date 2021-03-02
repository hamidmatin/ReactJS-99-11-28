import React, { Component } from 'react';
import Student from './Student';
import StudentForm from './StudentForm';
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
      studentFormShow: '',
    };
  }

  showStudentForm = () => {
    this.setState({ ...this.state, studentFormShow: 'student-form-show' });
  };

  hideStudentForm = () => {
    this.setState({ ...this.state, studentFormShow: '' });
  };
  render() {
    return (
      <div className='container'>
        <h2 className='students-title'>
          <span>Student List</span>
        </h2>
        <button onClick={this.showStudentForm}>Add New student</button>

        <StudentForm
          className={this.state.studentFormShow}
          hideStudentFormHandler={this.hideStudentForm}
        />

        <div className='student-list'>
          {this.state.studentList.map((student, index) => (
            <Student
              key={index}
              firstName={student.firstName}
              lastName={student.lastName}
            />
          ))}
        </div>
      </div>
    );
  }
}
