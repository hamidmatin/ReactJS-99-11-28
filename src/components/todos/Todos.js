import React, {useState, useEffect} from 'react'

export default function Todos() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={['container', 'mt-5'].join(' ')}>
      <h3 className='title'>
        <span>Todos</span>
      </h3>
      <div className='row'>
        
      </div>
    </div>
  )
}
