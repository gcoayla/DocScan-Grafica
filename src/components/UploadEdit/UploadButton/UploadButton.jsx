import React from 'react'

const UploadButton = ({setImageFunc}) => {
    return (
        <div className='button'>
            <label className='button-label'>
                <h2>Subir Archivo</h2>
                <input type='file' accept="image/png, image/gif, image/jpeg" onChange={(e) => setImageFunc(e)}/>
            </label>
        </div>
    )
}

export default UploadButton
