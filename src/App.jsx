import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { ModalVentanaFormList } from './components/ModalVentanaFormList'
import { useTodo } from './hooks/useTodo'



function App() {

  const [defaultCheck, setDefaultCheck] = useState('seleccione')

  const {
    todos,
    todosContador,
    todosPendientes,
    todosCancelados,
    onListTodos,
    onAddItemList,
    onRemoveItemList,
    onDoneItemList,
    onUpdateItem,
    onCanceladoItem
  } = useTodo();


  const onChangeFilter = (event) => {

    switch (event.target.value) {
      case "todos":
        return todos
      case "completos":
        return todos.filter((todo)=> todo.estado === true)
      case "por_hacer":
        return todos.filter((todo)=> todo.estado === false)
      default:
        return todos
    }
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
            

            <div className="row text-lg-start">
              <div className="col-lg-2">
                <label htmlFor="filter">Filtrar</label>
              </div>
              <div className="col-lg-10">
                <select value={defaultCheck} className="form-control" id="filter" onChange={onChangeFilter}>
                  <option value="seleccione">Seleccione</option>
                  <option value="todos">Todos</option>
                  <option value="por_hacer">Por hacer</option>
                  <option value="completos">Completos</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <ModalVentanaFormList newTodoItem={onAddItemList} />
          </div>
        </div>

      </div>
      <hr></hr>
      <h4 className="text-lg-start">Lista de tareas</h4>
      <TodoList
        listTodos={todos}
        onCancelItem={onRemoveItemList}
        onDoneItem={onDoneItemList}
        onUpdateItem={onUpdateItem}
        onCanceladoItem={onCanceladoItem}
      />
      <hr></hr>
      <div className="row">
        <div className="col-lg-6 text-lg-start">
          <small>Total:{todosContador}</small> | <small>Pendientes: {todosPendientes}</small> | <small> Cancelados:{todosCancelados} </small>
        </div>
      </div>
    </div>
  )
}

export default App
