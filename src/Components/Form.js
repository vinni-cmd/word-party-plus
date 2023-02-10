import { useEffect, useState } from "react";
import axios from "axios";

const Form = ({apiCall}) => {
  const [searchWord, setSearchWord] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  //   useEffect(() => {}, []);

  const handleClick = (e) => {
    e.preventDefault();
    apiCall(currentCategory, searchWord)

  };

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearchWordChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <form>
      <label htmlFor="searchWord">Word: </label>
      <input
        id="searchWord"
        type="text"
        placeholder="Enter Word"
        required
        onChange={handleSearchWordChange}
        value={searchWord}
      ></input>
      <label>Choose Category</label>
      <select defaultValue="null" onChange={handleCategoryChange} required>
        <option disabled value="null">Please Select</option>
        <option value="rhy">Rhyme</option>
        <option value="syn">Synonym</option>
      </select>

      <button onClick={handleClick}>Submit</button>
    </form>
  );
};

export default Form;
