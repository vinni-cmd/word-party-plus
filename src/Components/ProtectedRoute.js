import { UserAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // context
  const { loggedIn } = UserAuth();

  return (
    <>
      {
        !loggedIn ? <Navigate to='/' /> : children
      }
    </>
  )
}

export default ProtectedRoute