import { Link } from "react-router-dom";
import { AiFillFileWord, AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
     <header>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                aria-label="Navigate to Word Party Home page"
                title="Home"
              >
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link
                to="/savedWords"
                aria-label="Navigate to Word Party Saved Words page"
                title="Saved Words"
              >
                <AiFillFileWord />
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Word Party</h1>
        <p>Enter a word and select a category to expand your vocabulary</p>
      </header>
  )
}

export default Header