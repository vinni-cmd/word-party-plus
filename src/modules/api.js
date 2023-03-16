import axios from "axios";
import throwAlert from "./alerts";

const apiCall = (
  currentCategory,
  searchWord,
  setApiIsLoading,
  setWordResultList
) => {
  const buildCustomCategory = (currentCategory) => {
    return `rel_${currentCategory}`;
  };

  const customParam = buildCustomCategory(currentCategory);

  // animate the word party logo during api call
  setApiIsLoading(true);

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
      setApiIsLoading(false);
      console.log(response);
      if (response.data.length) {
        setWordResultList(response.data);
      }
      else if (response.status === 200 && !response.data.length) {
        throw new Error(
          "No results found! Please try another category or word!"
        );
      } else {
        throw new Error(
          `${response.statusText}. We are experiencing some technical difficulties. Please try again later.`
        );
      }
    })
    .catch((errorMessage) => {
      setApiIsLoading(false);
      throwAlert(errorMessage.message);
    });
};

export default apiCall;
