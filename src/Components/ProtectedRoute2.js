import { UserAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom'

const ProtectedRoute2 = ({ children }) => {
  // context
  const { loggedIn } = UserAuth();

  return (
    <>
      {
        loggedIn ? <Navigate to='/account' /> : children
      }
    </>
  )
}

export default ProtectedRoute2