import React from 'react'
import './App.css'
import { FormTodoList } from './components/FormTodoList'
import TodoList from './components/TodoList'

const todoList = [
  {
    id:"001",
    descripcion:"Task 1",
    estado:false,
    fecha_creacion:"",
    fecha_culminacion:""
  },
  {
    id:"002",
    descripcion:"Task 2",
    estado:false,
    fecha_creacion:"",
    fecha_culminacion:""
  }
]


function App() {


  return (
    <div className="App">
      <FormTodoList />
      <TodoList listTodos={todoList}/>
    </div>
  )
}

export default App
