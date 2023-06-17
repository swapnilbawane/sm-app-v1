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

    const navigate = useNavigate()

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

    const getSingleUserPostsData = async () => {
        try {
            const dataResponse = await axios.get(
                `/api/posts/user/${loggedUserName}`
            )

            const posts = await dataResponse.data

            console.log('posts from auth context:', posts)

            setData(posts)
        } catch (error) {
            console.log(error)
        }
    }

    const getUserData = async () => {
        try {
            const userDataResponse = await axios.get('/api/users')
            console.log('userDataResponse', userDataResponse)

            const userList = await userDataResponse?.data?.users
            console.log('userList', userList)
            const currentUserData = userList?.find(
                (item) => item.username === loggedUserName
            ) // this fetches me the object data
            console.log('currentUserData', currentUserData)

            setCurrentUser(currentUserData)
            setAllUsers(userList)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
        getSingleUserPostsData()
    }, [loggedIn])

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                loggedIn,
                setLoggedIn,
                data,
                setData,
                currentUser,
                allUsers,
                loggedUserName,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
