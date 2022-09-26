import React from 'react'

export const GiffItem = ({title,urlImg}) => {
    
  return (
    <div className='card'>
        <img src={urlImg} alt={title}/>
        <p> {title} </p>
    </div>
  )
}
