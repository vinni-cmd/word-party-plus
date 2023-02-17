import errorLogo from "../assets/1140-error-outline.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found wrapper">
      <img className="not-found-logo" src={errorLogo} alt="logo for page not found" />
      <h2>Oops! You seem to be lost.</h2>
      <p>Here are some helpful links:</p>
      <div className="not-found-links">
        <Link to="/">Home</Link>
        <Link to="/SavedWords">Saved Words</Link>
      </div>
    </div>
  );
}

export default NotFound;