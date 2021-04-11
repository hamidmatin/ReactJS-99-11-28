import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Todo from './Todo';

export default function Todos() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      setTodoList(res.data)
    })
  }, [])

  return (
    <div className={['container', 'mt-5'].join(' ')}>
      <h3 className='title'>
        <span>Todos</span>
      </h3>
      <div className='row'>
        {todoList.length !== 0 ? (
          todoList.map(todo => <Todo 
                                  key={todo.id}
                                  title={todo.title}
                                  completed={todo.completed} />)
        ):(
          <p className='text-center'>List is Empty</p>
        )}
      </div>
    </div>
  )
}
