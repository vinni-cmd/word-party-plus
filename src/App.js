// modules
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import SavedWords from "./Components/SavedWords";
// local imports
import "./App.css";
import Form from "./Components/Form";
import Loader from "./Components/Loader";
import Results from "./Components/Results";

const App = () => {
  // wordResultList is populated with searched word results from api
  const [wordResultList, setWordResultList] = useState([]);
  // while api call is happening word party logo spins
  const [apiIsLoading, setApiIsLoading] = useState(false);
  // state for adding/removing animation for adding/removing saved words
  const [savedWordIconToggleClassName, setSavedWordIconToggleClassName] =
    useState("");
  // user input
  const [searchWord, setSearchWord] = useState("");
  const [currentCategoryName, setCurrentCategoryName] = useState("");

  return (
    <div className="App">
      <Header savedWordIconToggleClassName={savedWordIconToggleClassName} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                setWordResultList={setWordResultList}
                setApiIsLoading={setApiIsLoading}
                setCurrentCategoryName={setCurrentCategoryName}
              />
              <Loader apiIsLoading={apiIsLoading} />
              {wordResultList.length === 0 ? null : (
                <Results
                  searchWord={searchWord}
                  currentCategoryName={currentCategoryName}
                  wordResultList={wordResultList}
                  setSavedWordIconToggleClassName={setSavedWordIconToggleClassName}
                />
              )}
            </>
          }
        />
        <Route
          path="/savedWords"
          element={
            <SavedWords
              setWordResultList={setWordResultList}
              setSavedWordIconToggleClassName={setSavedWordIconToggleClassName}
            />
          }
        />
        {/* route for incorrect URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
