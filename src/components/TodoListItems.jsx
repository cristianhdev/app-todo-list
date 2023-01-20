import React from 'react'

export const TodoListItems = ({ todo, onCancelTodo, onDoneTodo, onUpdateTodo }) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-8 d-flex justify-content-left align-items-center" >
                        <div className="flex  justify-content-between align-content-start align-items-start p-3">
                            <input className="form-check-input align-start mx-3" type="checkbox" onChange={() => onDoneTodo(todo.id)} name="checkItem" id="checkItem" />
                            <span
                                className={`${todo.estado ? 'text-decoration-line-through ' : ''}`}>
                                {todo.descripcion}
                            </span>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="d-grid gap-3">
                            <button
                                onClick={() => onCancelTodo(todo.id)}
                                className="btn  btn-outline-danger">
                                Eliminar
                            </button>
                            <button
                                onClick={() => onUpdateTodo(todo.id)}
                                className="btn btn-outline-info">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
