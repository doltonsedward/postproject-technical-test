import { ListPost } from "../../components/molecules"
import { useEffect, useState } from "react"

const Home = () => {
    const [post, setPost] = useState([])
    const getPost = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            <ListPost data={post} />
        </div>
    )
}

export default Home
