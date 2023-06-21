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

    const handleGuestLogin = async () => {
        try {
            const creds = {
                username: "adarshbalika",
                password: "adarshBalika123",
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
                setLoggedUserName("adarshbalika")
                navigate('/home')
            }
        } catch (error) {
            console.log(error)
        }
    }




    const getSingleUserPostsData = async () => {
        console.log(`/api/posts/user/${loggedUserName}`)
        try {
            const dataResponse = await axios.get(
                `/api/posts/user/${loggedUserName}`
            )

            if(dataResponse.status===200) { 
                const posts = await dataResponse.data
                console.log('posts from auth context:', posts)
                setData(posts)
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    const getAllPostsData = async() => { 
        try{
            const allDataResponse = await fetch("/api/posts")

            if(allDataResponse.status===200)
            { 
                let allPosts = await allDataResponse.json();
                const posts = Array.from(allPosts.posts).reverse();
                allPosts = { posts }
                setData(allPosts);
            }
            
        }
        catch(error) { 
            console.log(error);
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


   const handleLogout = () => { 
    localStorage.removeItem("encodedToken");
    setLoggedIn(false);  
    navigate("/")
   }

   const handleSignup = async (user) => { 
    console.log("received user", user)

    try {
        const creds = {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
        }

        // console.log('user', user)

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


    useEffect(() => {
        getUserData()
        // getSingleUserPostsData()
        getAllPostsData()
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
                setCurrentUser,
                handleGuestLogin,
                handleLogout,
                handleSignup
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
