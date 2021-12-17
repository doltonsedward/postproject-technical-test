import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { 
    Card,
    CardContent,
    Typography
} from "@mui/material"

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
        <Card sx={{ maxWidth: 250 }}>
            <CardContent>
                <Typography>{post.title}</Typography>
                <Typography color="text.secondary">{post.body}</Typography>
            </CardContent>
        </Card>
    )
}

export default DetailPost
