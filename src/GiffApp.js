import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { Footer } from './Components/Footer';
import { GiffGrid } from './Components/GiffGrid'

export const GiffApp = () => {

  //Si quiero almacenar info que deba cambiar el html, uso el useState
  const [categories, setCategories] = useState(['batman']);

  const addCategory = (onAddCategory) => {
    //Si la categoria que agrego ya esta incuida, return. Que se salga el codigo.
    //Si el if tiene una sola linea no hace falta abrir llaves.
    if (categories.includes(onAddCategory))
      return;

    setCategories([onAddCategory])
  }

  return (
    <div>
      <div className='d-flex justify-content-end'>
      <Footer /> 
      </div>
      <h1>Welcome to Giff App</h1>
      <AddCategory onAddCategory={addCategory} />
      {
        categories.map((category) => (
          <GiffGrid
            key={category}
            category={category}
          />))
      }
      
    </div>
  )
}
