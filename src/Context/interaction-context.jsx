import { useContext, createContext } from 'react'
import { useAuth } from './auth-context'

export const InteractionContext = createContext()

export function InteractionProvider({ children }) {
    const { data, setData } = useAuth()

    const likeHandler = async (id) => {
        console.log('id', id)
        console.log(`/api/posts/like/${id}`)

        // /api/posts/like/:postId
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const likeResponse = await fetch(`/api/posts/like/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log("likeResponse", await likeResponse.json());
            let likedData = await likeResponse.json()
            const posts = Array.from(likedData.posts).reverse(); 
            likedData = { posts }
            setData(likedData)
        } catch (error) {
            console.log(error)
        }
    }

    const dislikeHandler = async (id) => {
        console.log('id', id)
        console.log(`/api/posts/dislike/${id}`)

        // /api/posts/dislike/:postId
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const dislikeResponse = await fetch(`/api/posts/dislike/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log("likeResponse", await dislikeResponse.json());
            const dislikedData = await dislikeResponse.json()
            setData(dislikedData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <InteractionContext.Provider value={{ likeHandler, dislikeHandler }}>
            {children}
        </InteractionContext.Provider>
    )
}

export const useInteraction = () => useContext(InteractionContext)
