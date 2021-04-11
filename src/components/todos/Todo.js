import React from 'react'

const Todo = (props) => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h3>{props.title}</h3>
        <p>Completed <input type='checkbox' checked={props.completed} readOnly/> </p>
      </div>
    </div>
  )
}

export default Todo
