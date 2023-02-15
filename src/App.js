import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import { AiFillFileWord, AiFillHome } from "react-icons/ai";
import throwAlert from "./modules/alerts";
// components
import Home from "./Components/Home";
import SavedWords from "./Components/SavedWords";
import NotFound from "./Components/NotFound";

function App() {
  const [wordList, setWordList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function apiCall(currentCategory, searchWord) {
    setIsLoading(true);
    const buildCustomCategory = (currentCategory) => {
      return `rel_${currentCategory}`;
    };
    const customParam = buildCustomCategory(currentCategory);

    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        [customParam]: searchWord,
        max: 20,
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data.length === 0) {
          throw new Error(
            "No results found! Please try another category or word!"
          );
        }
        setWordList(response.data);
      })
      .catch((errorMessage) => {
        throwAlert(errorMessage.message);
      });
  }

  return (
    <div className="App">
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

        {/* add a <p> and explain what the app does*/}
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home apiCall={apiCall} wordList={wordList} isLoading={isLoading} />
          }
        />

        <Route path="/savedWords" element={<SavedWords />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <p>
          Made by{" "}
          <a href="http://www.kylemoore.ca" target="_blank" rel="noreferrer">
            Kyle
          </a>
          ,{" "}
          <a href="http://umeshcodes.com/" target="_blank" rel="noreferrer">
            Umesh
          </a>
          , and{" "}
          <a href="https://vincentyoung.dev/" target="_blank" rel="noreferrer">
            Vincent
          </a>{" "}
          at Juno College
        </p>
      </footer>
    </div>
  );
}

export default App;
