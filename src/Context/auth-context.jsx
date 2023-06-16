import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ data, setData ] = useState([])
    
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
            const { foundUser, encodedToken } = res.data

            localStorage.setItem('encodedToken', encodedToken)
            setLoggedIn(true);
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async() => { 
            try {
    
                const dataResponse = await axios.get("/api/posts");
                
                const posts = await dataResponse.data;

                console.log(posts);

                setData(posts);

            }
            catch(error){
                console.log(error);
            }
    }


    useEffect(()=> { 
    getData();  
    },[loggedIn]);


    return (
        <AuthContext.Provider value={{ handleLogin, loggedIn, setLoggedIn, data, setData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
