import React, { useReducer } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { todoListReducer } from './reducers/todoListReducer'
import { ModalVentanaFormList } from './components/ModalVentanaFormList'

const todoList = [
  {
    id: "001",
    descripcion: "Task 1",
    estado: false,
    fecha_creacion: "",
    fecha_culminacion: ""
  },
  {
    id: "002",
    descripcion: "Task 2",
    estado: false,
    fecha_creacion: "",
    fecha_culminacion: ""
  }
]


function App() {

  const [todos, dispatch] = useReducer(todoListReducer, todoList);

  const onAddItemList = (data) => {
    console.log(data)
    dispatch({
      type: "[TODO] create",
      payload: data
    })
  }


  const onCancelItemList = (data) => {
    dispatch({
      type: "[TODO] remove",
      payload: data
    })
  }

  const onDoneItemList = (data) => {
    console.log(data)
    dispatch({
      type: "[TODO] done",
      payload: data
    })
  }

  const onUpdateItem = (data) => {
    dispatch({
      type: "[TODO] update",
      payload: data
    })
  }


  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>To-do List</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 text-right">
            <h4>Lista de tareas</h4>
        
          </div>
          <div className="col-lg-4">
            <ModalVentanaFormList newTodoItem={onAddItemList} />
          </div>
        </div>
      </div>
      <hr></hr>
      <TodoList
        listTodos={todos}
        onCancelItem={onCancelItemList}
        onDoneItem={onDoneItemList}
        onUpdateItem={onUpdateItem}
      />
    </div>
  )
}

export default App
