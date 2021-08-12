import React, {useCallback, useState, useEffect} from 'react'
import axios from 'axios'

function useButton(image){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [newImage, setNewImage] = useState(null)
    

    const postImage = useCallback( async () => {
        const getImage = async () => {
        
            const {data} = await axios.post('http://localhost:8000/image',{
                image: image,
                points: [[200,0],[0,2000],[2000,0],[2000,2000]]
            })
            return data
        }
        setLoading(true)
        setError(false)
        const data = await getImage()
        var imagen = new Image()
        imagen.src = `data:image/jpeg;base64,${data.image1.img}`
        console.log(data.image1.img)
        setNewImage(imagen)
        setLoading(false)
    },[image])

    useEffect(() => {
        const fetchData = async () => {
            await postImage()
        }
        fetchData().catch(err => {
            console.error(err)
            setError(true)
        })
    }, [postImage])


    return {loading, error, newImage, postImage}
}

const Download = ({image}) => {

    const {loading, error, newImage, postImage} = useButton(image)
    console.log(newImage)
    return (
        <>
            {<h1>Cargando</h1> && loading}
            {<h2>Error</h2> && error}
            {<div className='resultante' style = {{backgroundImage: `url(${newImage?newImage.src: ''})`}}></div>}
        </>
    )
}

export default Download
