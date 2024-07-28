import {Navigate} from 'react-router-dom'
import { useAuth } from '../Context/useAuth'

export const ProtectedRoute = ({ children}) => {
    const {user} = useAuth()
    if(!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children
}