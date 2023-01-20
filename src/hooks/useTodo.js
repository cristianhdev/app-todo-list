import { useReducer,useEffect } from "react";
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
        return JSON.parse(localStorage.getItem('todos') || []);
      };

    const [todos, dispatch] = useReducer(todoListReducer, initStateTodo,init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

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

    const onFilterDone = (data) => {
        dispatch({
            type: "[TODO] filter done",
            payload: data
        })
    }

    return {
        todos,
        todosContador: todos.length,
        todosPendientes: todos.filter((todo) => !todo.esatdo).length,
        onAddItemList,
        onRemoveItemList,
        onDoneItemList,
        onUpdateItem,
        onFilterDone
    }
}
