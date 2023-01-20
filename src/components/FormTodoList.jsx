import React from 'react'
import { useForm } from '../hooks/useForm'



export const FormTodoList = ({ newTodo }) => {

  const { formState, descripcion, fecha_culminacion, onInputChange, onResetForm } = useForm({
    id: new Date().getTime(),
    descripcion: "",
    estado: false,
    cancelado:false,
    fecha_creacion: new Date().getTimezoneOffset(),
    fecha_culminacion: ""
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
              <label htmlFor="fecha_culminacion">Fecha culminacion</label>
              <input
                type="date"
                id="fecha_culminacion"
                name="fecha_culminacion"
                className="form-control mt-3"
                placeholder="Fecha Culminacion"
                value={fecha_culminacion}
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
