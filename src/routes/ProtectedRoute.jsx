import { Navigate } from 'react-router-dom'


export default function ProtectedRoute({ children }) {
// Simple dummy auth: uses localStorage
const token = localStorage.getItem('stm_token')


if (!token) {
return <Navigate to="/login" replace />
}


return children
}