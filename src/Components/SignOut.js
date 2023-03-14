// modules
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai"
// local imports
import throwAlert from '../modules/alerts';
import { UserAuth } from '../AuthContext';

const SignOut = () => {
  const { logOut, setLoggedIn, userEmail } = UserAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    logOut()
      .then(() => {
        setLoggedIn(false)
        navigate("/");
      })
      .catch((error) => {
        throwAlert(error.message)
      });
  }

  return (
    <div className='log-out wrapper'>
      <p>Signed In as {userEmail}</p>
      <button onClick={handleClick} title="Log Out" aria-label="Log Out"><AiOutlineLogout aria-hidden="true" /></button>
    </div>
  )
}

export default SignOut;