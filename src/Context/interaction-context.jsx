import { useContext, createContext } from 'react'
import { useAuth } from './auth-context'

export const InteractionContext = createContext()

export function InteractionProvider({ children }) {
    const { data, setData, setCurrentUser, bookmarkData, setBookmarkData } = useAuth()

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

        
            // console.log("like response", likeResponse);

            if(likeResponse.status===201) { 
                const likedResponseData = await likeResponse.json()
                const posts = Array.from(likedResponseData.posts).reverse()
                const likedData = { posts }
                setData(likedData)
            }
           
            
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

            if(dislikeResponse.status===201) { 
                const dislikedDataResponse = await dislikeResponse.json()
                const posts = Array.from(dislikedDataResponse.posts).reverse()
                const dislikedData = { posts }
                setData(dislikedData)
            }
      
          
        } catch (error) {
            console.log(error)
        }
    }

    const followHandler = async (id) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const followResponse = await fetch(`/api/users/follow/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log("likeResponse", await likeResponse.json());
            const followData = await followResponse.json()
            console.log('follow Data', followData)
            const updatedLoggedInUser = followData.user
            setCurrentUser(updatedLoggedInUser)
            // setAllusersData.

            // const posts = Array.from(likedData.posts).reverse();
            // likedData = { posts }
            // setData(likedData)
        } catch (error) {
            console.log(error)
        }
    }

    const unFollowHandler = async (id) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const unFollowResponse = await fetch(`/api/users/unfollow/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log("likeResponse", await likeResponse.json());
            const unFollowData = await unFollowResponse.json()
            console.log('unfollow Data', unFollowData)
            const updatedLoggedInUser = unFollowData.user
            setCurrentUser(updatedLoggedInUser)
            // const posts = Array.from(likedData.posts).reverse();
            // likedData = { posts }
            // setData(likedData)
        } catch (error) {
            console.log(error)
        }
    }

    const bookmarkHandler = async (id) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const bookMarkResponse = await fetch(`/api/users/bookmark/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            if(bookMarkResponse.status===200) { 
                const bookmarkData = await bookMarkResponse.json()
                console.log('bookmark Data', bookmarkData)
                setBookmarkData(bookmarkData.bookmarks)
            }
            
            

            // const updatedLoggedInUser = unFollowData.user
            // setCurrentUser(updatedLoggedInUser)
            // const posts = Array.from(likedData.posts).reverse();
            // likedData = { posts }
            // setData(likedData)
        } catch (error) {
            console.log(error)
        }
    }

    const removeBookmarkHandler = async (id) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const removeBookMarkResponse = await fetch(
                `/api/users/remove-bookmark/${id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `${encodedToken}`,
                    },
                }
            )

            if(removeBookMarkResponse.status===200) { 
                const removedBookmarkData = await removeBookMarkResponse.json()
                // console.log('removed bookmark Data', removeBookmarkData)
                setBookmarkData(removedBookmarkData.bookmarks)
            }
            

            // const updatedLoggedInUser = unFollowData.user
            // setCurrentUser(updatedLoggedInUser)
            // const posts = Array.from(likedData.posts).reverse();
            // likedData = { posts }
            // setData(likedData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <InteractionContext.Provider
            value={{
                likeHandler,
                dislikeHandler,
                followHandler,
                unFollowHandler,
                bookmarkHandler,
                removeBookmarkHandler,
            }}
        >
            {children}
        </InteractionContext.Provider>
    )
}

export const useInteraction = () => useContext(InteractionContext)
