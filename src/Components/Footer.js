import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>

            <p>Project by <b> Lautaro Fayanas </b> </p>
            <a href='https://www.linkedin.com/in/lautarofayanasdev/' target="_blank" rel="noreferrer"> <button className='btn btn-outline-primary'>Go to LinkedIn</button> </a>
            <a href='https://github.com/LautaroFayanas' target="_blank"> <button className='btn btn-outline-primary'>Go to Github</button> </a>

        </div>
    )
}
