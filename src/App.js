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
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ResetPassword from "./Components/ResetPassword";
import { AuthContextProvider } from "./AuthContext";
import SignOut from "./Components/SignOut";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  // wordResultList is populated with searched word results from api
  const [wordResultList, setWordResultList] = useState([]);
  // while api call is happening word party logo spins
  const [apiIsLoading, setApiIsLoading] = useState(false);
  // state for adding/removing animation for adding/removing saved words
  const [savedWordAnimation, setSavedWordAnimation] =
    useState("");
  // user input
  const [searchWord, setSearchWord] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentCategoryName, setCurrentCategoryName] = useState("");

  return (
    <div className="App">
      <AuthContextProvider>
        <Header savedWordAnimation={savedWordAnimation} />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <SignOut
                setSearchWord={setSearchWord}
                setCurrentCategory={setCurrentCategory}
                setWordResultList={setWordResultList} />
              <Form
                searchWord={searchWord}
                currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}
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
                  setSavedWordAnimation={setSavedWordAnimation}
                />
              )}
            </ProtectedRoute>
          }
          />
          <Route
            path="/savedWords"
            element={
              <ProtectedRoute>
                <SignOut />
                <SavedWords setSavedWordAnimation={setSavedWordAnimation}
                />
              </ProtectedRoute>
            }
          />
          {/* route for incorrect URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
};

export default App;
