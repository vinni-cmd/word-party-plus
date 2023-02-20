import axios from "axios";
import throwAlert from "./alerts";

const apiCall = (
  currentCategory,
  searchWord,
  setIsLoading,
  setWordResultList
) => {
  const buildCustomCategory = (currentCategory) => {
    return `rel_${currentCategory}`;
  };

  const customParam = buildCustomCategory(currentCategory);

  // animate the word party logo during api call
  setIsLoading(true);

  axios({
    url: "https://api.datamuse.com/words",
    method: "GET",
    dataResponse: "json",
    params: {
      format: "json",
      // customParam to dynamically create key for users input
      [customParam]: searchWord,
      max: 20,
    },
  })
    .then((response) => {
      setIsLoading(false);
      if (!response.data.length) {
        throw new Error(
          "No results found! Please try another category or word!"
        );
      }
      setWordResultList(response.data);
    })
    .catch((errorMessage) => {
      throwAlert(errorMessage.message);
    });
};

export default apiCall;
