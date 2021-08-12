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
                points: [[0,0],[0,100],[100,0],[100,100]]
            })
            return data
        }
        setLoading(true)
        setError(false)
        const data = await getImage()
        var imagen = new Image()
        imagen.src = `data:image/jpg:base64,${data.image1.img}`
        document.body.appendChild(image);
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

    return (
        <>
            {<h1>Cargando</h1> && loading}
            {<h2>Error</h2> && error}
            {<div>Imagen</div>}
        </>
    )
}

export default Download
