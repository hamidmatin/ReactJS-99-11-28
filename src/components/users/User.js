import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className='card mb-3'>
        <div className='card-body'>
          <h3 className='card-title'>{this.props.name}</h3>
          <p className='card-text'>{this.props.userName}</p>
          <p className='card-text'>{this.props.email}</p>
          <a className='card-link' 
            href={'http://' + this.props.website}>
            {this.props.website}
          </a>
        </div>
      </div>
    );
  }
}
