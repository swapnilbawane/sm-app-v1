import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [data, setData] = useState([])
    const [loggedUserName, setLoggedUserName] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [allUsers, setAllUsers] = useState([])
    const [bookmarkData, setBookmarkData] = useState([])
    const [profilePostsData, setProfilePostsData] = useState([])

    const navigate = useNavigate()

    // handle login, guest login, signup, logout

    const handleLogin = async (user) => {
        try {
            const creds = {
                username: user.username,
                password: user.password,
            }

            console.log('user', user)

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
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignup = async (user) => {
        console.log('received user', user)

        try {
            const creds = {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
            }

            const res = await axios.post(
                '/api/auth/signup',
                JSON.stringify(creds)
            )

            if (res.status === 201) {
                const { createdUser, encodedToken } = res.data

                localStorage.setItem('encodedToken', encodedToken)
                setLoggedIn(true)
                setLoggedUserName(user.username)
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
        }
    }

    // for logout we need to delete the encoded token and set logged in to false so that private routing is maintained.
    const handleLogout = () => {
        localStorage.removeItem('encodedToken')
        setLoggedIn(false)
        navigate('/')
    }

    // POSTS : get single user posts
    const getSingleUserPostsData = async () => {
        console.log(`/api/posts/user/${loggedUserName}`)
        try {
            const dataResponse = await axios.get(
                `/api/posts/user/${loggedUserName}`
            )

            if (dataResponse.status === 200) {
                const posts = await dataResponse.data
                console.log('posts from auth context:', posts)
                // setData(posts)
                setProfilePostsData(posts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // POSTS : This function loads all the data for the user feed on login
    const getAllPostsData = async () => {
        try {
            const allDataResponse = await fetch('/api/posts')

            if (allDataResponse.status === 200) {
                let allPosts = await allDataResponse.json()
                const posts = Array.from(allPosts.posts).reverse() // this is done so that the newest post is seen first.
                allPosts = { posts } // this is because in home page we are rendering data.posts so data : { posts : [] }
                setData(allPosts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // USERS : with this, we get all users data, needed to display on home feed and also helps me get the logged in user detail like firstname and lastname
    const getUserData = async () => {
        try {
            const userDataResponse = await axios.get('/api/users')
            console.log('api response from all users', userDataResponse)

            if (userDataResponse.status === 200) {
                const userList = await userDataResponse?.data?.users
                console.log('api data about all users', userList)

                const currentUserData = userList?.find(
                    (item) => item.username === loggedUserName
                ) // this fetches me the object data
                console.log('current user data from all users', currentUserData)

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
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
