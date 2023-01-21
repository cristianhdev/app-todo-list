import React from 'react'
import { FormTodoList } from './FormTodoList'

export const ModalVentanaFormList = ({newTodoItem}) => {
    return (
        <>
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark">Nueva Tarea:</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <FormTodoList  newTodo={newTodoItem}/>
                        </div>
                    </div>
                </div>
            </div>

        

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Nueva tarea
            </button>
        </>
    )
}
