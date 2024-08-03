import React from 'react'
import {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title | !desc){
            alert("Title or about cannot be empty!");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="col-sm-7">
    <label htmlFor="title" className="form-label" for="autoSizingInput">Todo title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
      </div>
  <div className="col-sm-7">
    <label htmlFor="desc" className="form-label" for="autoSizingInput">About</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc"/>
  </div>
    <button type="submit" className="my-3 btn btn-success rounded-pill">Submit</button>
</form>
    </div>
  )
}

