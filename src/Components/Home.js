// components
import Form from "./Form";
import Loader from "./Loader";
import Results from "./Results";

const Home = ({
  wordResultList,
  isLoading,
  setIsLoading,
  setWordResultList,
  setSavedWordIconToggleClassName,
}) => {
  return (
    <>
      <Form setWordResultList={setWordResultList} setIsLoading={setIsLoading} />
      <Loader isLoading={isLoading} />
      {wordResultList.length === 0 ? null : (
        <Results
          wordResultList={wordResultList}
          setSavedWordIconToggleClassName={setSavedWordIconToggleClassName}
        />
      )}
    </>
  );
};

export default Home;
