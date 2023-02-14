import { useState } from "react";

const Form = ({ apiCall }) => {
  const [searchWord, setSearchWord] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  //   useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCheck = /[^a-z]/gi;

    if (!wordCheck.test(searchWord)) {
      apiCall(currentCategory, searchWord);
    } else {
      alert("Only valid words with letters are accepted!");
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
          ></input>
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
            <option value="rhy" required>
              Rhyme
            </option>
            <option value="syn" required>
              Synonym
            </option>
          </select>
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
