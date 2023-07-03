/**
 * @description This is a context provider that provides all state variables and functions on to the children.  
 * --------------------------------------------------------------------------
 * 
 * @description THIS Auth Provider COMPONENT CONTROLS THE FOLLOWING STATE VARIABLES  
 * 
 * - { @link loggedIn }: used to define if a user is logged in. 
 *  values: true / false 
 *  default value: false  
 *  c
 * This is set to false and on firing guest login, login or signup functions this is set to true, false by default. 
 * - { @link data }: 
 * - { @link loggedUserName }: used to store the username of logged in person.   
 * - { @link currentUser }: stores all details of the current user which is there in users.js file 
 * - { @link allUsers }: store all details of all users as obtained from the backend users.js file
 * - { @link bookmarkData}: stores the details of all bookmarks as obtained from the users in users.js file updated by backend 
 * - { @link profilePostsData}: stores the posts to be shown on logged in user's profile page 
 * - { @link otherProfilePostsData}: stores the posts to be shown on other user's profile page 
 * - { @link originalPostsData}: 
 * 
 * --------------------------------------------------------------------------
 * 
 * @description THIS Auth Provider COMPONENT HAS FOLLOWING FUNCTIONS DEFINED
 * 
 * @function {handleLogin} - This function fires when the login button is triggered on UI. 
 * @function {handleGuestLogin} - This function fires when the login as guest button is triggered on UI. 
 * @function {handleSignup} - This function fires when the signup button is triggered on UI. 
 * @function {handleLogout} - This function fires when the logout button is triggered on UI. 
 * 
 * @function {editUserHandler} - This function fires when edit details button is triggered on UI
 * 
 * @function {getSingleUserPostsData} - This function fires via useEffect when loggedIn state variable's state changes. 
 * @function {getAllPostsData} - This function fires when via useEffect loggedIn state variable's state changes.
 * @function {getUserData} - This function fires when via useEffect loggedIn state variable's state changes.
 * @function {getAllBookMarks} - This function fires via useEffect when loggedIn state variable's state changes.
 * 
 * --------------------------------------------------------------------------
 * 
 * @description THIS SECTION DESCRIBES WHAT EACH FUNCTION DOES 
 * 
 * for {handleLogout} 
 * This function deletes the encoded token stored in local storage and sets loggedIn state variable to false so that private routing is maintained.
 * 
 * for {getSingleUserPostsData}
 * This function gets single user posts
 * 
 * for {getAllPostsData}
 * This function loads all the data for the user feed on login
 * 
 * for {getUserData}
 * This function gets all users data, needed to display on home feed and also helps me get the logged in user detail like firstName and lastName
 * 
 * for {getAllBookMarks}
 * This function makes API call to get all bookmarked posts from the db.
 * 
 * for {editUserHandler}
 * This function makes API call to send details to be updated at backend. It also updates the details on UI.  
 * 
 * --------------------------------------------------------------------------
 * 
 * @description USE EFFECT triggers following function whenever loggedIn state variable changes value.  
 * getUserData()
 * getSingleUserPostsData()
 * getAllPostsData()
 * getAllBookMarks()
 * 
 * --------------------------------------------------------------------------
 * 
 *      
 */

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


    const handleLogout = () => {
        localStorage.removeItem('encodedToken')
        setLoggedIn(false)
        loggedOutToastMessage()
        navigate('/')
    }


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
        } catch (error) { }
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
