import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
  render() {
    return (
      <div className={['container', 'mt-5'].join(' ')}>
        <h3 className='title'>
          <span>Posts</span>
        </h3>
          <Link to='/posts/create_post' className='btn btn-warning'>Create Post</Link>
      </div>
    )
  }
}
