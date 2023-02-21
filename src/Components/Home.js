import { useState } from "react";

// components
import Form from "./Form";
import Loader from "./Loader";
import Results from "./Results";

const Home = ({
  wordResultList,
  apiIsLoading,
  setApiIsLoading,
  setWordResultList,
  setSavedWordIconToggleClassName,
}) => {
  const [searchWord, setSearchWord] = useState("");

  const [currentCategoryName, setCurrentCategoryName] = useState("");

  return (
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
  );
};

export default Home;
