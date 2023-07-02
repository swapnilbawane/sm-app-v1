import { useContext, createContext } from 'react'
import { useAuth } from './auth-context'
import { useToast } from './toast-context'

export const InteractionContext = createContext()

export function InteractionProvider({ children }) {
    const {
        data,
        setData,
        setCurrentUser,
        bookmarkData,
        setBookmarkData,
        loggedUserName,
        setProfilePostsData,
        allUsers,
        setAllUsers,
        setOriginalPostsData,
    } = useAuth()

    const {
        addedToBookmarkToastMessage,
        alreadyBookmarkedToastMessage,
        bookmarkUsernameErrorToastMessage,
        bookmarkErrorToastMessage,
        removedFromBookmarksToastMessage,
        notBookmarkedToastMessage,
        removeBookmarkErrorToastMessage,
        unFollowUserToastMessage,
        unFollowUserErrorToastMessage,
        notFollowingUserErrorToastMessage,
        unfollowUserErrorToastMessage

    } = useToast()

    const likeHandler = async (id) => {
        // console.log('id', id)
        // console.log(`/api/posts/like/${id}`)

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

            if (likeResponse.status === 201) {
                const likedResponseData = await likeResponse.json()

                const posts = Array.from(likedResponseData.posts).reverse()
                let profileDataPosts = posts.filter(
                    (item) => item.username === loggedUserName
                )

                //    console.log("new posts from profileDataPosts:", profileDataPosts)

                const likedData = { posts }
                const profileData = { posts: profileDataPosts }

                setProfilePostsData(profileData)
                setData(likedData)
                setOriginalPostsData(likedData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const dislikeHandler = async (id) => {
        // console.log('id', id)
        // console.log(`/api/posts/dislike/${id}`)

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

            if (dislikeResponse.status === 201) {
                const dislikedDataResponse = await dislikeResponse.json()

                const posts = Array.from(dislikedDataResponse.posts).reverse()
                let profileDataPosts = posts.filter(
                    (item) => item.username === loggedUserName
                )

                const dislikedData = { posts }
                const profileData = { posts: profileDataPosts }

                setProfilePostsData(profileData)
                setData(dislikedData)
                setOriginalPostsData(dislikedData)
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

            if (followResponse.status === 200) {
                const followData = await followResponse.json()

                // console.log('follow Data', followData)
                const updatedLoggedInUser = followData.user

                // update details of followed user also
                let updatedAllUsersList = allUsers.map((item) =>
                    item.username === followData.followUser.username
                        ? followData.followUser
                        : item
                )

                //   update logged user
                updatedAllUsersList = allUsers.map((item) =>
                    item.username === followData.user.username
                        ? followData.user
                        : item
                )

                setCurrentUser(updatedLoggedInUser)
                setAllUsers(updatedAllUsersList)
            }
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

            if (unFollowResponse.status === 200) {
                // console.log("likeResponse", await likeResponse.json());
                const unFollowData = await unFollowResponse.json()
                //  console.log('unfollow Data', unFollowData)
                const updatedLoggedInUser = unFollowData.user

                let updatedAllUsersList = allUsers.map((item) =>
                    item.username === unFollowData.followUser.username
                        ? unFollowData.followUser
                        : item
                )

                updatedAllUsersList = allUsers.map((item) =>
                    item.username === unFollowData.user.username
                        ? unFollowData.user
                        : item
                )

                setCurrentUser(updatedLoggedInUser)
                setAllUsers(updatedAllUsersList)
                unFollowUserToastMessage()
            }
            else if (unFollowResponse.status === 400) {
                notFollowingUserErrorToastMessage()
            } else if (unFollowResponse.status === 404) {
                unFollowUserErrorToastMessage()
            } else if (unFollowResponse.status === 500) {
                unfollowUserErrorToastMessage()
            }
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

            if (bookMarkResponse.status === 200) {
                const bookmarkData = await bookMarkResponse.json()
                // console.log('bookmark Data', bookmarkData)
                setBookmarkData(bookmarkData.bookmarks)
                addedToBookmarkToastMessage()
            } else if (bookMarkResponse.status === 400) {
                alreadyBookmarkedToastMessage()
            } else if (bookMarkResponse.status === 404) {
                bookmarkUsernameErrorToastMessage()
            } else if (bookMarkResponse.status === 500) {
                bookmarkErrorToastMessage()
            }
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

            if (removeBookMarkResponse.status === 200) {
                const removedBookmarkData = await removeBookMarkResponse.json()
                // console.log('removed bookmark Data', removeBookmarkData)
                setBookmarkData(removedBookmarkData.bookmarks)
                removedFromBookmarksToastMessage()
            }
            else if (bookMarkResponse.status === 400) {
                notBookmarkedToastMessage()
            } else if (bookMarkResponse.status === 404) {
                bookmarkUsernameErrorToastMessage()
            } else if (bookMarkResponse.status === 500) {
                removeBookmarkErrorToastMessage()
            }
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
