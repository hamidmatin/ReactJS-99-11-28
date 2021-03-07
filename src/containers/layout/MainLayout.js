import React, { Component } from 'react'
import Users from '../../components/users/Users'
import Header from '../header/Header'
export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Users />
      </React.Fragment>
    )
  }
}
