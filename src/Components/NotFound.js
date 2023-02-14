import errorLogo from "../assets/1140-error-outline.gif";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img src={errorLogo} alt="error logo" />
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <Link to="/SavedWords">SavedWords</Link>
    </div>
  );
}
