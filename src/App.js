// modules
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import SavedWords from "./Components/SavedWords";
// local imports
import "./App.css";

const App = () => {
  // wordResultList is populated with searched word results from api
  const [wordResultList, setWordResultList] = useState([]);
  // while api call is happening word party logo spins
  const [isLoading, setIsLoading] = useState(false);
  // state for adding/removing animation for adding/removing saved words
  const [savedWordIconToggleClassName, setSavedWordIconToggleClassName] =
    useState("");

  return (
    <div className="App">
      <Header savedWordIconToggleClassName={savedWordIconToggleClassName} />
      <Routes>
        <Route
          path="/"
          element={
            // Includes form and results components
            <Home
              setIsLoading={setIsLoading}
              setWordResultList={setWordResultList}
              wordResultList={wordResultList}
              isLoading={isLoading}
              setSavedWordIconToggleClassName={setSavedWordIconToggleClassName}
            />
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
