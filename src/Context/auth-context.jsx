import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useToast } from './toast-context'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [data, setData] = useState([])
    const [loggedUserName, setLoggedUserName] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [allUsers, setAllUsers] = useState([])
    const [bookmarkData, setBookmarkData] = useState([])
    const [profilePostsData, setProfilePostsData] = useState([])
    const [otherProfilePostsData, setOtherProfilePostsData] = useState([])
    const [originalPostsData, setOriginalPostsData] = useState([])

    const {
        showLoggedInToastMessage,
        usernameNotFoundToastMessage,
        passwordWrongToastMessage,
        errorLoginToastMessage,
        usernameExistsToastMessage,
        errorSignupToastMessage,
        loggedOutToastMessage,
        savedUserDetailsToastMessage,
        editUserDetailsErrorToastMessage,
        editUserErrorToastMessage,
    } = useToast()

    const navigate = useNavigate()

    // handle login, guest login, signup, logout

    const handleLogin = async (user) => {
        try {
            const creds = {
                username: user.username,
                password: user.password,
            }

            // console.log('user', user)

            const res = await axios.post(
                '/api/auth/login',
                JSON.stringify(creds)
            )

            if (res.status === 200) {
                const { foundUser, encodedToken } = res.data

                localStorage.setItem('encodedToken', encodedToken)
                setLoggedIn(true)
                setLoggedUserName(user.username)
                navigate('/home')
                showLoggedInToastMessage()
            } else if (res.status === 404) {
                usernameNotFoundToastMessage()
            } else if (res.status === 401) {
                passwordWrongToastMessage()
            } else if (res.status === 500) {
                errorLoginToastMessage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGuestLogin = async () => {
        try {
            const creds = {
                username: 'adarshbalika',
                password: 'adarshBalika123',
            }

            // console.log('user', user)

            const res = await axios.post(
                '/api/auth/login',
                JSON.stringify(creds)
            )

            if (res.status === 200) {
                const { foundUser, encodedToken } = res.data

                localStorage.setItem('encodedToken', encodedToken)
                setLoggedIn(true)
                setLoggedUserName('adarshbalika')
                navigate('/home')
                showLoggedInToastMessage()
            } else if (res.status === 404) {
                usernameNotFoundToastMessage()
            } else if (res.status === 401) {
                passwordWrongToastMessage()
            } else if (res.status === 500) {
                errorLoginToastMessage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignup = async (user) => {
        // console.log('received user', user)

        try {
            const creds = {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
                profileimage:
                    'https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_2.jpg',
            }

            const res = await axios.post(
                '/api/auth/signup',
                JSON.stringify(creds)
            )

            if (res.status === 201) {
                const { createdUser, encodedToken } = res.data
                // console.log("createdUser", createdUser)
                localStorage.setItem('encodedToken', encodedToken)
                setLoggedIn(true)
                setLoggedUserName(user.username)
                navigate('/home')
                showLoggedInToastMessage()
            } else if (res.status === 422) {
                usernameExistsToastMessage()
            } else if (res.status === 500) {
                errorSignupToastMessage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    // for logout we need to delete the encoded token and set logged in to false so that private routing is maintained.
    const handleLogout = () => {
        localStorage.removeItem('encodedToken')
        setLoggedIn(false)
        loggedOutToastMessage()
        navigate('/')
    }

    // POSTS : get single user posts
    const getSingleUserPostsData = async () => {
        // console.log(`/api/posts/user/${loggedUserName}`)

        if (loggedUserName) {
            try {
                const dataResponse = await axios.get(
                    `/api/posts/user/${loggedUserName}`
                )

                if (dataResponse.status === 200) {
                    const posts = await dataResponse.data
                    // console.log('posts from auth context:', posts)
                    // setData(posts)
                    setProfilePostsData(posts)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    // POSTS : This function loads all the data for the user feed on login
    const getAllPostsData = async () => {
        try {
            const allDataResponse = await fetch('/api/posts')

            if (allDataResponse.status === 200) {
                let allPosts = await allDataResponse.json()
                const posts = Array.from(allPosts.posts).reverse() // this is done so that the newest post is seen first.
                // console.log({ posts }) // CONSOLE
                allPosts = { posts } // this is because in home page we are rendering data.posts so data : { posts : [] }
                setData(allPosts)
                setOriginalPostsData(allPosts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // USERS : with this, we get all users data, needed to display on home feed and also helps me get the logged in user detail like firstname and lastname
    const getUserData = async () => {
        try {
            const userDataResponse = await axios.get('/api/users')
            // console.log('api response from all users', userDataResponse)

            if (userDataResponse.status === 200) {
                const userList = await userDataResponse?.data?.users
                // console.log('api data about all users', userList)

                const currentUserData = userList?.find(
                    (item) => item.username === loggedUserName
                ) // this fetches me the object data
                // console.log('current user data from all users', currentUserData)

                setCurrentUser(currentUserData)
                setAllUsers(userList)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // This API call gets all user bookmarked posts from the db.
    const getAllBookMarks = async () => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const bookmarkResponse = await fetch('/api/users/bookmark/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            if (bookmarkResponse.status === 200) {
                // console.log("bookmark data all", await bookmarkResponse.json())
                const bookmarkResponseData = await bookmarkResponse.json()
                setBookmarkData(bookmarkResponseData.bookmarks)
            }
        } catch (error) {}
    }

    const editUserHandler = async (user) => {
        try {
            const encodedToken = localStorage.getItem('encodedToken')

            const sendUserData = {
                userData: {
                    bio: user.bio,
                    link: user.link,
                    profileimage: user.profileimage,
                },
            }

            // console.log({sendUserData})

            const editedUserResponse = await fetch(`/api/users/edit/`, {
                method: 'POST',
                body: JSON.stringify(sendUserData),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `${encodedToken}`,
                },
            })

            // console.log('edited user response', await editedUserResponse.json())

            if (editedUserResponse.status === 201) {
                let updatedUserData = await editedUserResponse.json()
                updatedUserData = updatedUserData.user

                // map and update currentUser and allUser
                const userEditedData = {
                    ...currentUser,
                    bio: updatedUserData.bio,
                    link: updatedUserData.link,
                    profileimage: updatedUserData.profileimage,
                }
                const allUserEditedData = allUsers.map((item) =>
                    item.username === user.username
                        ? {
                              ...item,
                              bio: updatedUserData.bio,
                              link: updatedUserData.link,
                              profileimage: updatedUserData.profileimage,
                          }
                        : item
                )

                setCurrentUser(userEditedData)
                setAllUsers(allUserEditedData)
                savedUserDetailsToastMessage()
            } else if (editedUserResponse.status === 404) {
                editUserDetailsErrorToastMessage()
            } else if (editedUserResponse.status === 500) {
                editUserErrorToastMessage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
        getSingleUserPostsData()
        getAllPostsData()
        getAllBookMarks()
    }, [loggedIn])

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                handleGuestLogin,
                handleSignup,
                handleLogout,
                getSingleUserPostsData,
                loggedIn,
                setLoggedIn,
                data,
                setData,
                currentUser,
                setCurrentUser,
                allUsers,
                setAllUsers,
                loggedUserName,
                bookmarkData,
                setBookmarkData,
                profilePostsData,
                setProfilePostsData,
                editUserHandler,
                otherProfilePostsData,
                setOtherProfilePostsData,
                originalPostsData,
                setOriginalPostsData,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
