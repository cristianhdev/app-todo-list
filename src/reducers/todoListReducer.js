import { types } from "../types/type";

export const todoListReducer = (stateInit, action) => {
    switch (action.type) {
        case types.create:
            return [...stateInit, action.payload]
        case types.update:
            return stateInit.find((todo) => {
                if(todo.id !== action.payload)
                    return {
                        ...todo,
                        descripcion:action.payload.descripcion
                    }
            })      
        case types.remove:
            console.log('remove')
            console.log(stateInit)
            return stateInit.filter((todo) => todo.id !== action.payload)
        case types.done:
            

            return stateInit.map((todo) => {
                /* console.log('done',action.payload)
                console.log('todo.id',todo.id) */
                if (todo.id === action.payload)
                    return {
                        ...todo,
                        estado: !todo.estado
                    }
                console.log(todo)
                return todo
            })


        default:
            return stateInit;
    }
}