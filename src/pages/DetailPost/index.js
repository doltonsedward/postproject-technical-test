import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})

    const getDetailPost = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            const data = await response.json()

            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetailPost()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default DetailPost
