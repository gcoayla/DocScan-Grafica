import React from 'react'

const SendButton = ({setUploadMode}) => {

    return (
        <div className='button'>
            <div className='button-label' onClick={ () => setUploadMode(false)}>
                <h2>Enviar Archivo</h2>
            </div>
        </div>
    )
}

export default SendButton
