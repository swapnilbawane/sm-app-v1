import { useContext, createContext, useState } from 'react'
import { useAuth } from './auth-context'
import { useLocation } from 'react-router'

export const PostContext = createContext()

export function PostProvider({ children }) {
    const [newPost, setNewPost] = useState('')
    const { setData, loggedUserName } = useAuth()
    const location = useLocation()

    const addNewPostHandler = (event) => {
        const textValue = event.target.value
        setNewPost(textValue)
    }

    const postHandler = async () => {
        console.log('newPostContent', newPost)

        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const sendPost = { postData: { content: newPost } }
            console.log('sendPost', JSON.stringify(sendPost))
            const t = JSON.stringify(sendPost)
            console.log('parsed', JSON.parse(t))

            const postResponse = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(sendPost),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            console.log('post response', postResponse)

            if (postResponse.status === 201) {
                let postsData = await postResponse.json()
                console.log('before reverse', postsData) // { postsData : posts }
                console.log('posts data', postsData.posts)
                let posts = Array.from(postsData.posts).reverse() // reverse posts from postsData to show most recent posts

                if (location.pathname === '/profile') {
                    posts = posts.filter(
                        (item) => item.username === loggedUserName
                    )
                }

                postsData = { posts } // shorthand for object : posts: posts - this will put reversed posts to post key now it resembles postData = { posts : {[....],[....],[....],[....]}}
                setData(postsData)
                setNewPost('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostContext.Provider
            value={{ newPost, setNewPost, addNewPostHandler, postHandler }}
        >
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext)
