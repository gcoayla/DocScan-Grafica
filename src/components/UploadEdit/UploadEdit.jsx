import React from 'react'
import PointsArea from './PointsArea'
import SendButton from './SendButton'
import UploadButton from './UploadButton'

const UploadEdit = ({setUploadMode,image,setImage}) => {

    const backImage = image ?  URL.createObjectURL(image) : ''

    const setImageFunction = (event) => {
        setImage(event.target.files[0])
    }

    return (
        <div className='upload-edit-wrapper'>
            <UploadButton setImageFunc={setImageFunction}/>
            <PointsArea image={image} backImage={backImage}/>
            <SendButton setUploadMode={setUploadMode}/>
        </div>
    )
}

export default UploadEdit
