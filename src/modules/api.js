import axios from "axios";
import throwAlert from "./alerts";

const apiCall = (currentCategory, searchWord, setIsLoading, setWordList) => {
    const buildCustomCategory = (currentCategory) => {
      return `rel_${currentCategory}`;
    };
    const customParam = buildCustomCategory(currentCategory);
    
    setIsLoading(true);
    
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        [customParam]: searchWord,
        max: 20,
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data.length === 0) {
          throw new Error(
            "No results found! Please try another category or word!"
          );
        }
        setWordList(response.data);
      })
      .catch((errorMessage) => {
        throwAlert(errorMessage.message);
      });
  }

  export default apiCall