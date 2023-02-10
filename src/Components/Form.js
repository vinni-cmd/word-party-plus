import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  //   useEffect(() => {}, []);

  const handleClick = (e) => {
    e.preventDefault();

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
          console.log(response);
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
          console.log(response);
        })
        .catch((errorMessage) => {
          alert(errorMessage);
        });
    }
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
      <select value={currentCategory} onChange={handleCategoryChange} required>
        <option disabled>Please Select</option>
        <option value="rhy">Rhyme</option>
        <option value="syn">Synonym</option>
      </select>

      <button onClick={handleClick}>Submit</button>
    </form>
  );
};

export default Form;
