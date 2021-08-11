import React from 'react'

const SendButton = () => {
    return (
        <div className='button'>
            <div className='button-label' onClick={ () => console.log('Boton')}>
                <h2>Enviar Archivo</h2>
            </div>
        </div>
    )
}

export default SendButton
