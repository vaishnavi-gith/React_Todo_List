import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
  return (
    <>
<h3 style={{ textAlign: "center", width: "100%" }}>Todos List</h3>
    <div className="todos-container my-3">
        {props.todos.length===0? "No todos today!":
        props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
    }
    </div>
    </>
  )
}
