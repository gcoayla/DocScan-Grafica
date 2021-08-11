import React from 'react'
import Point from './Point'

const PointsArea = ({image, backImage}) => {
    return (
        <div className='points-area-wrapper'>
            {image?
             <div className='points-area-image-wrapper'>
                 <div className='points-area-image-tittle'>
                     <h1>Coloca los puntos en las esquinas del documento</h1>
                 </div>
                <div className='points-area-image' style={{backgroundImage: `url(${backImage})`}}>
                    <Point/>
                    <Point/>
                    <Point/>
                    <Point/>
                </div>
                
             </div>
            : <h1>Subir una imagen</h1>}
        </div>
    )
}

export default PointsArea
