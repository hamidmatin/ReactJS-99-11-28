import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className={['container', 'mt-5'].join(' ')}>
        <h3 className='title'>
          <span>Home</span>
        </h3>
        <p>This is a react case study project.</p>
      </div>
    )
  }
}
