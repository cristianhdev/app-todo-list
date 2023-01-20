import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { ModalVentanaFormList } from './components/ModalVentanaFormList'
import { useTodo } from './hooks/useTodo'



function App() {

 

  const {
    todos,
    todosContador,
    todosPendientes,
    onAddItemList,
    onRemoveItemList,
    onDoneItemList,
    onUpdateItem
  } = useTodo();



 

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
            <small>Pendientes: {todosPendientes}</small>|<small>Total:{todosContador}</small>
        
          </div>
          <div className="col-lg-4">
            <ModalVentanaFormList newTodoItem={onAddItemList} />
          </div>
        </div>
      </div>
      <hr></hr>
      
      <TodoList
        listTodos={todos}
        onCancelItem={onRemoveItemList}
        onDoneItem={onDoneItemList}
        onUpdateItem={onUpdateItem}
      />
    </div>
  )
}

export default App
