import React from 'react'

// export default function Post(props) {
export default function Post({title, body}) {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      
    </div>
  )
}
