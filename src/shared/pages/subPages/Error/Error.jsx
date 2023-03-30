import React from 'react'
import "./error.css"

function Error({ errorStatus, descr }) {
    return (
        <section className='error'>
            <h3 className='error-title'>Error</h3>
            <h2 className='error-status'>{errorStatus}</h2>
            <p className='error-descr'>{descr}</p>
        </section> 
    )
}

export default Error
