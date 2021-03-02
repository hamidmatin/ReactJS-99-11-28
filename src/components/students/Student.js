import React, { Component } from 'react';

export default class Student extends Component {
  constructor() {
    super();
    this.state = { visible: true };
    
    // This binding is necessary to make `this` work in the callback
    this.hideMethodStudent = this.hideMethodStudent.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  hideStudent = () => {
    console.log('Hide');
    console.log(this);
    this.setState({ visible: false });
  };

  hideMethodStudent () {
    console.log('Hide');
    console.log(this);
    this.setState({ visible: false });
  };

  showStudent() {
    console.log('Hide');
    console.log(this)
    this.setState({ visible: true });
  }

  setVisibleStudent = (visible)=>{
    this.setState({ visible: visible });
  }
  render() {
    return this.state.visible ? (
      <div className='student'>
        <div>
          <span className='label'>First Name :</span>
          <span className='vlaue'>{this.props.firstName}</span>
        </div>
        <div>
          <span className='label'>Last Name :</span>
          <span className='vlaue'>{this.props.lastName}</span>
        </div>
        <button onClick={this.hideStudent}>Hide with Arrow</button>
        <button onClick={this.hideMethodStudent}>Hide with Method</button>
        <button onClick={this.setVisibleStudent.bind(this, false)}>Hide</button>
      </div>
    ) : (
      // <button onClick={this.showStudent}>Show</button>
      <button onClick={ ()=>{ this.setVisibleStudent(true) } }>Show</button>
    );
  }
}
