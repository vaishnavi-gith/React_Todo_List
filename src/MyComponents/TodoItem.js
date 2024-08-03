import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    
    <div className="todo-item" >
      <h4 className="card-title" >{todo.title}</h4>
        <p className='card-text'>{todo.desc}</p>
        <button className="rounded-pill" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

