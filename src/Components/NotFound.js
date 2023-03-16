// modules
import { Link } from "react-router-dom";
// local imports
import errorLogo from "../assets/1140-error-outline.gif";
import { UserAuth } from '../AuthContext';


const NotFound = () => {
  const { loggedIn } = UserAuth();
  return (
    <div className="not-found wrapper">
      <img
        className="not-found-logo"
        src={errorLogo}
        alt="logo for page not found"
      />
      <h2>Oops! You seem to be lost.</h2>
      <p>Here are some helpful links:</p>
      <ul className="not-found-links">
        {
          loggedIn ?
            <>
              <li>
                <Link to="/account">Home</Link>
              </li>
              <li>
                <Link to="/savedWords">Saved Words</Link>
              </li>
            </> :
            <>
              <li>
                <Link to="/">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
            </>
        }
      </ul>
    </div>
  );
};

export default NotFound;
