import errorLogo from "../assets/1140-error-outline.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorPage wrapper">
      <img className="errorLogo" src={errorLogo} alt="error logo" />
      <h2>Oops! You seem to be lost.</h2>
      <p>Here are some helpful links:</p>
      <div className="errorPageLinks">
        <Link to="/">Home</Link>
        <Link to="/SavedWords">Saved Words</Link>
      </div>
    </div>
  );
}

export default NotFound