import React from 'react'
import { TodoListItems } from './TodoListItems'

const TodoList = ({listTodos}) => {
    return (
        <>
            <ul className="list-group">
                {listTodos.map((item) => {
                    return (
                        <TodoListItems  todo={item} />)
                })
                
                }
            </ul>

        </>
    )
}

export default TodoList
