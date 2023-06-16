import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../Context/auth-context'

export function RequiresAuth({ children }) {
    const location = useLocation()
    const { loggedIn } = useAuth()

    return loggedIn ? (
         children 
    ) : (
        <Navigate to="/" state={{ from: location }} />
    )
}
