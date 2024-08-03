import './App.css';
import Headers from './MyComponents/Headers';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React,{useEffect, useState} from 'react';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete=(todo)=>{
    console.log("Deleting..",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    console.log("Adding to Todo List", title,desc)
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }

  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));},[todos])
  return (
    <>
    <Router>
      <Headers title="My Todos List" searchBar={false}/>
      <Routes>
      <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<About />} />
          </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
