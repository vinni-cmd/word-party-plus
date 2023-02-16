import { useState } from "react";
import throwAlert from "../modules/alerts";
import apiCall from "../modules/api";

const Form = ({setIsLoading, setWordList}) => {
  const [searchWord, setSearchWord] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCheck = /[^a-z]/gi;
    if (!wordCheck.test(searchWord)) {
      apiCall(currentCategory, searchWord, setIsLoading, setWordList);
    } else {
      throwAlert("Only valid words with letters are accepted!");
    }
  };

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearchWordChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <div className="container">
        <div className="input-unit">
          <label htmlFor="searchWord">Word: </label>
          <input
            id="searchWord"
            type="text"
            placeholder="Enter Word"
            required
            onChange={handleSearchWordChange}
            value={searchWord}
          />
        </div>
        <div className="input-unit">
          <label>Choose Category: </label>
          <select
            value={currentCategory}
            onChange={handleCategoryChange}
            required
          >
            <option disabled value="">
              Please Select
            </option>
            <option value="jjb" required>
              Adjectives
            </option>
            <option value="ant" required>
              Antonyms
            </option>
            <option value="cns" required>
              Consonant Match
            </option>
            <option value="hom" required>
              Homophones
            </option>
            <option value="nry" required>
              Near Rhymes
            </option>
            <option value="jja" required>
              Nouns
            </option>
            <option value="rhy" required>
              Rhymes
            </option>
            <option value="syn" required>
              Synonyms
            </option>
            <option value="trg" required>
              Triggers
            </option>
          </select>
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
