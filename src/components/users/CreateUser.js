import React, { Component } from 'react'
import UserForm from './UserForm'

export default class CreateUser extends Component {

  createUserHandler = ()=>{

  }
  render() {
    return (
      <div>
        <button className='btn btn-success mb-4 d-block ms-auto'>Create User</button>

        <UserForm />
      </div>
    )
  }
}
