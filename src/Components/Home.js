import Form from "./Form";
import Results from "./Results";
import Loader from "./Loader";

const Home = ({ wordList, isLoading, setIsLoading, setWordList, setSWIconAnimation }) => {
  return (
    <>
      <Form setWordList={setWordList} setIsLoading={setIsLoading} />
      <Loader isLoading={isLoading} />
      {
        (wordList.length === 0) ? null :
          <Results wordList={wordList} setSWIconAnimation={setSWIconAnimation} />
      }
    </>
  );
};

export default Home;
