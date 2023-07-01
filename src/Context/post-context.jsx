import { useContext, createContext, useState } from 'react'
import { useAuth } from './auth-context'
import { useLocation } from 'react-router'

export const PostContext = createContext()

export function PostProvider({ children }) {
    const [newPost, setNewPost] = useState('')
    const { setData, loggedUserName, setProfilePostsData, originalPostsData, setOriginalPostsData } = useAuth()
    
    const location = useLocation()

    // capture data that is being typed store it in a state variable
    const addNewPostHandler = (event) => {
        const textValue = event.target.value
        setNewPost(textValue)
    }

    // this function takes the text from the addnewPostHandler and then makes an API call to add it to db.
    const postHandler = async () => {
        // console.log('newPostContent', newPost)

        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const sendPost = { postData: { content: newPost } }

            // console.log('sendPost', JSON.stringify(sendPost))
            // const t = JSON.stringify(sendPost)
            // console.log('parsed', JSON.parse(t))

            const postResponse = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(sendPost),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log('post response', postResponse)

            if (postResponse.status === 201) {
                let postsData = await postResponse.json()
                // console.log('before reverse', postsData) // { postsData : posts }
                // console.log('posts data', postsData.posts)
                let posts = Array.from(postsData.posts).reverse() // reverse posts from postsData to show most recent posts. the need to reverse is that the newest posts get added to the list at list if we don't reverse it in main feed. This means that the last post comes first, which is how the user experience should be.

                let profileDataPosts = posts.filter(
                    (item) => item.username === loggedUserName
                )

                // console.log(
                //     'new posts from profileDataPosts:',
                //     profileDataPosts
                // )

                const profileData = { posts: profileDataPosts }

                postsData = { posts }

                console.log( postsData )

                setData(postsData)
                setOriginalPostsData(postsData)

                setProfilePostsData(profileData)

                setNewPost('')

                // if (location.pathname === '/profile') {
                //     posts = posts.filter(
                //         (item) => item.username === loggedUserName
                //     )
                //     postsData = { posts }
                //     setProfilePostsData(postsData)
                //     setNewPost('')
                // }
                // else {
                //     postsData = { posts } // shorthand for object : posts: posts - this will put reversed posts to post key now it resembles postData = { posts : {[....],[....],[....],[....]}}
                //     setData(postsData)

                //     let profileDataPosts = posts.filter(
                //         (item) => item.username === loggedUserName
                //     )
                //     const profileData = { posts: profileDataPosts }
                //     setProfilePostsData(profileData)

                //     setNewPost('')
                // }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // This function deletes the post by it's id
    const deletePostHandler = async (id) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const deleteResponse = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log('delete response', deleteResponse)

            if (deleteResponse.status === 201) {
                let postsData = await deleteResponse.json()
                // console.log('before reverse', postsData) // { postsData : posts }
                // console.log('posts data', postsData.posts)
                let posts = Array.from(postsData.posts).reverse() // reverse posts from postsData to show most recent posts. the need to reverse is that the newest posts get added to the list at list if we don't reverse it in main feed. This means that the last post comes first, which is how the user experience should be.

                let profileDataPosts = posts.filter(
                    (item) => item.username === loggedUserName
                )

                //    console.log("new posts from profileDataPosts:", profileDataPosts)

                const profileData = { posts: profileDataPosts }

                postsData = { posts }

                setData(postsData)
                setOriginalPostsData(postsData)
                setProfilePostsData(profileData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // This function edits the post by it's id and the content and return full array of posts 
    const editPostHandler = async (id, post) => {
        // console.log('edited post', post)

        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const sendPost = { postData: { content: post } }

            const editedPostResponse = await fetch(`/api/posts/edit/${id}`, {
                method: 'POST',
                body: JSON.stringify(sendPost),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log('edited post response', await editedPostResponse.json())

            if (editedPostResponse.status === 201) {
                let postsData = await editedPostResponse.json()
                // console.log('before reverse', postsData) // { postsData : posts }
                // console.log('posts data', postsData.posts)
                let posts = Array.from(postsData.posts).reverse() // reverse posts from postsData to show most recent posts. the need to reverse is that the newest posts get added to the list at list if we don't reverse it in main feed. This means that the last post comes first, which is how the user experience should be.

                let profileDataPosts = posts.filter(
                    (item) => item.username === loggedUserName
                )

                //    console.log("new posts from profileDataPosts:", profileDataPosts)

                const profileData = { posts: profileDataPosts }

                postsData = { posts }

                setData(postsData)
                setOriginalPostsData(postsData)
                setProfilePostsData(profileData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const trendingPostsHandler = () => { 
         const posts = {...originalPostsData}.posts.sort((a,b)=> b.likes.likeCount - a.likes.likeCount)
        //  const posts = {...originalPostsData}?.posts.filter((item)=> item.category==="trending")
        //  console.log("trending posts", trending)
         const trendingPosts = { posts }
         setData(trendingPosts)
    }

    const latestPostsHandler = () => { 
        const posts = {...originalPostsData}.posts.sort((a,b)=> Date.parse(b.createdAt) - Date.parse(a.createdAt))
        // const posts = {...originalPostsData}.posts
        // console.log("original posts", {...originalPostsData}.posts)
        const latestPosts = { posts }
        console.log("latest posts", latestPosts)
        setData(latestPosts)
    }

    
    return (
        <PostContext.Provider
            value={{
                newPost,
                setNewPost,
                addNewPostHandler,
                postHandler,
                deletePostHandler,
                editPostHandler,
                trendingPostsHandler,
                latestPostsHandler
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext)
