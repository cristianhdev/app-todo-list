import React from 'react'

export const TodoListItems = ({ todo }) => {
    return (
        <>
            <li key={todo.id} className="list-group-item">
                <div className="row">
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <span>
                            {todo.descripcion}
                        </span>
                    </div>
                    <div className="col-4">
                        <div class="d-grid gap-3">
                            <button className="btn  btn-outline-danger">
                                Cancelar
                            </button>
                            <button className="btn btn-outline-info">
                                Terminado
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
