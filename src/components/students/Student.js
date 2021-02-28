import React, { Component } from 'react';

export default class Student extends Component {
  render() {
    return (
      <div className='student'>
        <div>
          <span className='label'>First Name :</span>
          <span className='vlaue'>{this.props.FirstName}</span>
        </div>
        <div>
          <span className='label'>Last Name :</span>
          <span className='vlaue'>{this.props.LastName}</span>
        </div>
      </div>
    );
  }
}
