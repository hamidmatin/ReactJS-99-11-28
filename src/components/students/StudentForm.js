import React, { Component } from 'react'
const style = {
  width: '500px',
  height: '350px',
  backgroundColor: 'lightgreen',
  position: 'fixed',
  left: '50%',
  top: '-400px',
  transform: 'translate(-50%, -50%)',
  transition: '300ms all '
}
export default class StudentForm extends Component {
  render() {
    return (
      <div style={style} className={this.props.className}>
        
        <button onClick={this.props.hideStudentFormHandler}>Hide</button>
        <button onClick={()=>{this.props.hideStudentFormHandler()}}>Hide</button>
      </div>
    )
  }
}
