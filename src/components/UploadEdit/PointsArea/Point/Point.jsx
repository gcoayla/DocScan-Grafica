import React, {useState} from 'react'
import { useDrag } from 'react-use-gesture'

const Point = () => {
    const [pointPos, setPointPos] = useState({ x: 0, y: 0})
    const bindLogoPos = useDrag((params) => {
        setPointPos({
            x: params.offset[0],
            y: params.offset[1]
        })
    })

    return (
        <div {...bindLogoPos()} style ={{
            position: 'absolute',
            top: pointPos.y,
            left: pointPos.x,
            float: 'left'
        }} >
            <div className='point' />
        </div>
    )
}

export default Point
