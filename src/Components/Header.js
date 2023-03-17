// modules
import { Link } from "react-router-dom";
import { AiFillFileWord, AiFillHome } from "react-icons/ai";
import { useRef } from "react";
// local imports
import { UserAuth } from '../AuthContext';


const Header = ({ savedWordAnimation }) => {
  // context
  const { loggedIn } = UserAuth();

  // causes page to scroll to top of home page
  const scrollToRef = useRef(null);

  return (
    <header ref={scrollToRef}>
      <nav>
        <ul>
          <li>
            <Link
              to={loggedIn ? '/account' : '/'}
              aria-label="Navigate to Word Party Home page"
              title="Home"
              onClick={() =>
                scrollToRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <AiFillHome />
            </Link>
          </li>
          {
            !loggedIn ?
              null :
              <li>
                <Link
                  to="/savedWords"
                  aria-label="Navigate to Word Party Saved Words page"
                  title="Saved Words"
                  className={savedWordAnimation}
                >
                  <AiFillFileWord aria-hidden="true" />
                </Link>
              </li>
          }
        </ul>
      </nav>
      <h1>Word Party</h1>
      <p>
        Step 1: Enter a word and select a category to expand your vocabulary
      </p>
      <p>
        Step 2: View your results and save words that inspire
      </p>
      <p>
        Step 3: Visit your {
          !loggedIn ? 'Saved Words' :
            <Link
              to="/savedWords"
              aria-label="Navigate to Word Party Saved Words page"
              title="Saved Words"
            >
              Saved Words
            </Link>
        } and optionally remove words
      </p>
    </header>
  );
};

export default Header;
