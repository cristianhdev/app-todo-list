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
    onListTodos,
    onAddItemList,
    onRemoveItemList,
    onDoneItemList,
    onUpdateItem,
    onFilterDone,
    onFilterNotDone
  } = useTodo();


  const onChangeFilter = (event) => {

    switch (event.target.value) {
      case "todos":
        onListTodos(todos)
        break;
      case "completos":
        onFilterDone(todos)
        break;
      case "por_hacer":
        onFilterNotDone(todos)
        break;
      default:
        break;
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
            <h4>Lista de tareas</h4>

            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="filter">Filtrar</label>
              </div>
              <div className="col-lg-6">
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

      <TodoList
        listTodos={todos}
        onCancelItem={onRemoveItemList}
        onDoneItem={onDoneItemList}
        onUpdateItem={onUpdateItem}
      />
      <hr></hr>
      <div className="row">
        <div className="col-lg-6 text-lg-start">
          <small>Pendientes: {todosPendientes}</small> | <small>Total:{todosContador}</small>
        </div>
      </div>
    </div>
  )
}

export default App
