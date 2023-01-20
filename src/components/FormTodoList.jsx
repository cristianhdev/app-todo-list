import React from 'react'
import { useForm } from '../hooks/useForm'



export const FormTodoList = ({ newTodo }) => {

  const { formState, descripcion, fechaCulminacion, onInputChange, onResetForm } = useForm({
    id: new Date().getTime(),
    descripcion: "",
    estado: false,
    fecha_creacion: new Date().getTimezoneOffset(),
    fecha_culminacion: null
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    newTodo(formState)
    onResetForm()

  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                className="form-control mt-3"
                placeholder="Descripcion"
                value={descripcion}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="fechaCulminacion">Fecha culminacion</label>
              <input
                type="date"
                id="fechaCulminacion"
                name="fechaCulminacion"
                className="form-control mt-3"
                placeholder="Fecha Culminacion"
                value={fechaCulminacion}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>



        <input type="submit" className="btn btn-primary mt-3" data-bs-dismiss="modal" value="GUARDAR" />
        
      </form>
    </>
  )
}
