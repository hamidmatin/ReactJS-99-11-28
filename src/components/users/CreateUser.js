import React, { Component } from 'react';
import UserForm from './UserForm';

export default class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      showCreateUserForm: false,
    };
  }
  addNewUserHandler = (user) => {
    /* check Validation */
    /*********/

    this.setState({ showCreateUserForm: false });
    this.props.addNewUserHandler(user);
  };

  render() {
    return (
      <div>
        <button
          className='btn btn-success mb-4 d-block ms-auto'
          onClick={() => {
            this.setState({ showCreateUserForm: true });
          }}
        >
          Create User
        </button>

        {this.state.showCreateUserForm ? (
          <UserForm
            isUniqueIdHandler={this.props.isUniqueIdHandler}
            submitHandler={this.addNewUserHandler}
            closeHandler={() => {
              this.setState({ showCreateUserForm: false });
            }}
          />
        ) : null}
      </div>
    );
  }
}
