import React,{useState} from 'react'

export const useForm = (stateInit = {}) => {

    const [formState, setFormState] = useState(stateInit);


    /**
     * OnInputChange: función que toma un objeto como argumento, 
     * y luego devuelve un objeto con el nombre y el valor del objetivo 
     * capturado desde el formulario.
     * @param target 
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //cuardamos el objeto en el estado del formulario
        setFormState({
            ...formState,
            [name]: value
        })
    }

   /**
    * Cuando se pulsa el botón de reinicio, el estado del formulario vuelve al estado inicial.
    */
    const onResetForm = () => {
        setFormState(stateInit)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}