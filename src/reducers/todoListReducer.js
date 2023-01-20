import { types } from "../types/type";

export const todoListReducer = (stateInit, action) => {
    switch (action.type) {
        case types.create:
            return [...stateInit, action.payload]
        case types.update:
            return [...stateInit, action.payload]
        case types.done:
            return [...stateInit, action.payload]


        default:
            return stateInit;
    }
}