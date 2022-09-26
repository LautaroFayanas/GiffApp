import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    //Uso el estado para almacenar el valor de mi input
    const [inputValue, setinputValue] = useState('')

    //Funcion onChange requerida para los input.
    //El target es la propieda destructurada del evento: onChange.
    //Esta me permite ingresar al valor.
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()

        //Si el espaciado o el ancho de mi input es menor igual a 1, return. Se sale y no sigue el codigo.
        if(inputValue.trim().length <= 1)
        return;

        setinputValue('')
        onAddCategory(inputValue.trim().toLocaleLowerCase())
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder='Search Giff'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
