import React, { useEffect, useState } from 'react'

export const TodoListItems = ({ todo, onCancelTodo, onDoneTodo, onUpdateTodo, onCanceladoTodo }) => {


    return (
        <>
            <li className={`list-group-item ${todo.cancelado ? 'disabled ' : ''}`} >
                <div className="row">
                    <div className="col-8 d-flex justify-content-left align-items-center" >
                        <div className="flex  justify-content-between align-content-start align-items-start p-3">
                            <input className="form-check-input align-start mx-3" type="checkbox" checked={todo.estado} onChange={() => onDoneTodo(todo.id)} name="checkItem" id="checkItem" />
                            <span
                                className={`${todo.estado ? 'text-decoration-line-through ' : ''}`}>
                                {todo.descripcion}
                            </span>
                        </div>

                    </div>
                    <div className="col-4">
                        <div>
                            <div className="row">
                                <div className="col">
                                    <button
                                        onClick={() => onCancelTodo(todo.id)}
                                        className={`btn btn-outline-danger ${todo.estado ? 'd-none' : 'd-block'}`}>
                                        Eliminar
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        onClick={() => onUpdateTodo(todo.id)}

                                        className="btn btn-outline-info"
                                    >
                                        Editar
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        onClick={() => onCanceladoTodo(todo.id)}

                                        className="btn btn-outline-warning"
                                    >
                                        Cancelar
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </li>


        </>
    )
}
