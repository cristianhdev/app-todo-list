import { types } from "../types/type";

export const todoListReducer = (stateInit, action) => {
    switch (action.type) {
        case types.create:
            return [...stateInit, action.payload]
        case types.update:
            return stateInit.find((todo) => {
                if (todo.id !== action.payload)
                    return {
                        ...todo,
                        descripcion: action.payload.descripcion
                    }
            })
        case types.remove:

            return stateInit.filter((todo) => todo.id !== action.payload)
        case types.done:
            return stateInit.map((todo) => {

                if (todo.id === action.payload)
                    return {
                        ...todo,
                        estado: !todo.estado
                    }
                return todo
            })
        case types.remove:
            return stateInit.filter((todo) => todo.id !== action.payload)
        case types.filterCompletados:
            return action.payload.filter((todo) => todo.estado === true)
        case types.filterInCompletados:
            return action.payload.filter((todo) => todo.estado === false)
        case types.todos:
           
            return stateInit
        default:
            return stateInit;
    }
}