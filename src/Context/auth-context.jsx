import { createContext, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()

    const handleLogin = async (user) => {
        try {
            const creds = {
                username: user.username,
                password: user.password,
            }

            console.log('user', user)

            //  const res = await fetch("/api/auth/login", {
            //   method: 'POST',
            //   body: JSON.stringify(creds)
            //   });

            const res2 = await axios.post(
                '/api/auth/login',
                JSON.stringify(creds)
            )
            const { foundUser, encodedToken } = res2.data

            localStorage.setItem('encodedToken', encodedToken)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
