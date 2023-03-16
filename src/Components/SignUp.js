// modules
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai"
// local imports
import throwAlert from "../modules/alerts";
import { UserAuth } from '../AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser, setLoggedIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then(() => {
        setLoggedIn(true)
        navigate('/account');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          throwAlert('The account already exists. Please login or reset your password.');
        } else if (error.code === 'auth/weak-password') {
          throwAlert('Your password should be at least 6 characters long.')
        } else {
          throwAlert(`${error.message} Please try again.`)
        }
      })
  }

  return (
    <div className="sign-up wrapper">
      <form onSubmit={handleSubmit}>
        <h3>Create an Account</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password" />
        <button type="submit" title="Sign In" aria-label="Sign In"><AiOutlineUserAdd aria-hidden="true" /></button>
      </form>
      <Link
        to="/"
        aria-label="Navigate to Word Party SignIn page"
        title="SignIn"
      >
        <AiOutlineLogin aria-hidden="true" />
      </Link>
    </div>
  )
}

export default SignUp