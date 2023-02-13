import { useState } from "react";
import "./App.css";
import axios from "axios";

import Form from "./Components/Form";
import Results from "./Components/Results";
import SavedWords from "./Components/SavedWords";

function App() {
  const [wordList, setWordList] = useState([]);
  function apiCall(currentCategory, searchWord) {
    if (currentCategory === "rhy") {
      axios({
        url: "https://api.datamuse.com/words",
        method: "GET",
        dataResponse: "json",
        params: {
          format: "json",
          rel_rhy: searchWord,
          max: 20,
        },
      })
        .then((response) => {
          if (response.data.length === 0) {
            throw new Error("Please enter a valid word");
          }
          setWordList(response.data);
        })
        .catch((errorMessage) => {
          alert(errorMessage);
        });
    } else if (currentCategory === "syn") {
      axios({
        url: "https://api.datamuse.com/words",
        method: "GET",
        dataResponse: "json",
        params: {
          format: "json",
          rel_syn: searchWord,
          max: 20,
        },
      })
        .then((response) => {
          if (response.data.length === 0) {
            throw new Error("Please enter a valid word");
          }
          setWordList(response.data);
        })
        .catch((errorMessage) => {
          alert(errorMessage);
        });
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Word Party</h1>
        {/* add a <p> and explain what the app does*/}
      </header>
      <Form apiCall={apiCall} />
      <Results wordList={wordList} />
      <SavedWords />
      <footer>
        <p>Made by Kyle, Umesh, and Vincent at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
