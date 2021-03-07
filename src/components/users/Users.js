import React, { Component } from 'react';
import axios from 'axios'

import User from './User';
import Styles from './Users.css';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(response => {
    //   console.log(response)
    //   console.log(response.data)
    // })
    .then(response => response.data)
    .then(userList=>{
      console.log(userList)

      this.setState({...this.state, users: userList})
    })
  }
  render() {
    return (
      <div className={['container', 'mt-5', Styles.title].join(' ')}>
        <h3 className='title'>
          <span>Users</span>
        </h3>
        <div className='row'>
          {
            this.state.users.length > 0 ?
            this.state.users.map(user => (
              <div className='col-md-6 col-lg-3' key={user.id}>
                <User
                  name={user.name}
                  userName={user.username}
                  email={user.email}
                  website={user.website}
                />
              </div>
            ))
            :
            <p>Empty User List</p>
          }
          
        </div>
      </div>
    );
  }
}
