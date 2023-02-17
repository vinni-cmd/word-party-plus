import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// components
import Home from "./Components/Home";
import SavedWords from "./Components/SavedWords";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
  const [wordList, setWordList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [SWIconAnimation, setSWIconAnimation] = useState('')

  return (
    <div className="App">
      <Header SWIconAnimation={SWIconAnimation} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setIsLoading={setIsLoading} setWordList={setWordList} wordList={wordList} isLoading={isLoading} setSWIconAnimation={setSWIconAnimation} />
          }
        />
        <Route path="/savedWords" element={<SavedWords />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
