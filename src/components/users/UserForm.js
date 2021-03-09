import React, { Component } from 'react';
import './Users.css';
export default class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        id: '',
        name: '',
        username: '',
        email: '',
        website: '',
      },
      idErrorMessage: '',
      isValid: true,
    };
  }

  onIdChangeHandler = (e) => {
    console.log(e.target.value);

    const newState = {
      ...this.state,
    };
    newState.user.id = parseInt(e.target.value);

    const isUnique = this.props.isUniqueIdHandler(newState.user.id);
    if (isUnique) {
      newState.idErrorMessage = '';
      newState.isValid = true;
    } else {
      newState.idErrorMessage = 'Id is not unique';
      newState.isValid = false;
    }

    this.setState(newState);
  };

  onNameChangeHandler = (e) => {
    console.log(e.target.value);

    const newState = {
      ...this.state,
    };
    newState.user.name = e.target.value;

    this.setState(newState);
  };

  onUserNameChangeHandler = (e) => {
    const newState = {
      ...this.state,
    };
    newState.user.username = e.target.value;

    this.setState(newState);
  };

  onEmailChangeHandler = (e) => {
    const newState = {
      ...this.state,
    };
    newState.user.email = e.target.value;

    this.setState(newState);
  };

  onWebsiteChangeHandler = (e) => {
    const newState = {
      ...this.state,
    };
    newState.user.website = e.target.value;

    this.setState(newState);
  };
  render() {
    return (
      <div className='user-form-modal'>
        <div className='user-form'>
          <h3 className='text-center mb-4'>User Information</h3>
          <hr />
          <div className='mb-3 row'>
            <label className='col-sm-3 col-form-label'>Id :</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                onChange={this.onIdChangeHandler}
                value={this.state.user.id}
              />
              <div className='text-danger'>{this.state.idErrorMessage}</div>
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-3 col-form-label'>Name :</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                onChange={this.onNameChangeHandler}
                value={this.state.user.name}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-3 col-form-label'>User Name :</label>
            <div className='col-sm-9'>
              <input
                type='text'
                className='form-control'
                onChange={this.onUserNameChangeHandler}
                value={this.state.user.username}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-3 col-form-label'>E-Mail :</label>
            <div className='col-sm-9'>
              <input
                type='email'
                className='form-control'
                onChange={this.onEmailChangeHandler}
                value={this.state.user.email}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-3 col-form-label'>Website :</label>
            <div className='col-sm-9'>
              <input type='text' className='form-control' />
            </div>
          </div>
          <hr />
          <button
            className='btn btn-success'
            disabled={!this.state.isValid}
            onClick={()=>{
              this.props.submitHandler(this.state.user)
            }}
          >
            Save
          </button>
          <button className='btn btn-danger' onClick={this.props.closeHandler}>Close</button>
        </div>
      </div>
    );
  }
}
