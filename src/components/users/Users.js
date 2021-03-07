import React, { Component } from 'react';
import axios from 'axios';

import User from './User';
import './Users.css';
import CreateUser from './CreateUser';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      // .then(response => {
      //   console.log(response)
      //   console.log(response.data)
      // })
      .then((response) => response.data)
      .then((userList) => {
        console.log(userList);

        this.setState({ ...this.state, users: userList });
      });
  }

  deleteUser = (id) => {
    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then((response) => {
        console.log(response);
      });

    console.log(id);
    console.log(this.state.users.filter((user) => user.id !== id));

    this.setState({
      ...this.state,
      users: this.state.users.filter((user) => user.id !== id),
    });
  };
  render() {
    return (
      <div className={['container', 'mt-5'].join(' ')}>
        <h3 className='title'>
          <span>Users</span>
        </h3>
        
        <CreateUser />
        
        <div className='row'>
          {this.state.users.length > 0 ? (
            this.state.users.map((user) => (
              <div className='col-md-6 col-lg-3' key={user.id}>
                <User
                  name={user.name}
                  userName={user.username}
                  email={user.email}
                  website={user.website}
                  deleteUserHandler={() => {
                    this.deleteUser(user.id);
                  }}
                />
              </div>
            ))
          ) : (
            <p>Empty User List</p>
          )}
        </div>
      </div>
    );
  }
}
