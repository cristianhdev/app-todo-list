import { useReducer, useEffect } from "react";
import { todoListReducer } from '../reducers/todoListReducer'

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

export const useTodo = (initStateTodo = []) => {

    const init = () => {
        if(localStorage.getItem('todos')){
            return JSON.parse(localStorage.getItem('todos') );
        }else{
            return todoList
        }        
    };

    console.log(init())

    const [todos, dispatch] = useReducer(todoListReducer, initStateTodo, init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onListTodos = (data) => {
        dispatch({
            type: "[TODO] todos",
            payload: data
        })
    }

    const onAddItemList = (data) => {

        dispatch({
            type: "[TODO] create",
            payload: data
        })
    }


    const onRemoveItemList = (data) => {
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

    const onCanceladoItem = (data) => {
        console.log(data)
        dispatch({
            type: "[TODO] cancelado",
            payload: data
        })
    }


    return {
        todos,
        todosContador: todos.length,
        todosPendientes: todos.filter((todo) => !todo.estado).length,
        todosCancelados: todos.filter((todo) => todo.cancelado).length,
        onAddItemList,
        onRemoveItemList,
        onDoneItemList,
        onUpdateItem,
        onCanceladoItem,
        onListTodos
    }
}
