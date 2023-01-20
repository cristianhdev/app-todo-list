import React,{useReducer} from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { FormTodoList } from './components/FormTodoList'
import { todoListReducer }  from './reducers/todoListReducer'

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

  const [todos,dispatch] = useReducer(todoListReducer,todoList);

  const onCancelItemList = (data) => {
    dispatch({
      type:"[TODO] remove",
      payload:data
    })
  }

  const onDoneItemList = (data) => {
    console.log(data)
    dispatch({
      type:"[TODO] done",
      payload:data
    })
  }

  const onUpdateItem = (data) => {
    const itemUpdata={
      id:data.id,
      description:""
    }
    dispatch({
      type:"[TODO] update",
      payload:itemUpdata
    })
  }


  return (
    <div className="App">
      <FormTodoList />
      <TodoList
        listTodos={todos}
        onCancelItem={onCancelItemList}
        onDoneItem={ onDoneItemList}
        onUpdateItem={onUpdateItem}
      />
    </div>
  )
}

export default App
