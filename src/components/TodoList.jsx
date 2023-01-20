import React from 'react'
import { TodoListItems } from './TodoListItems'

const TodoList = ({ listTodos, onCancelItem, onDoneItem,onUpdateItem,onCanceladoItem }) => {
    return (
        <>
            <ul className="list-group">
                {listTodos.map((item) => {
                    return (
                        <TodoListItems
                            key={item.id}
                            todo={item}
                            onCancelTodo={onCancelItem}
                            onDoneTodo={onDoneItem}
                            onUpdateTodo={onUpdateItem}
                            onCanceladoTodo={onCanceladoItem}
                             />)
                })

                }
            </ul>

        </>
    )
}

export default TodoList
