import React, { Component } from 'react'
import User from './User';

export default class UserList extends Component {
  render() {
    return (
      <div className='row'>
          {this.props.users.length > 0 ? (
            this.props.users.map((user) => (
              <div className='col-md-6 col-lg-3' key={user.id}>
                <User
                  name={user.name}
                  userName={user.username}
                  email={user.email}
                  website={user.website}
                  deleteUserHandler={() => {
                    this.props.deleteUser(user.id);
                  }}
                />
              </div>
            ))
          ) : (
            <p>Empty User List</p>
          )}
        </div>
    )
  }
}
