import Form from "./Form";
import Results from "./Results";
import Loader from "./Loader";

const Home = ({ apiCall, wordList, isLoading }) => {
  return (
    <>
      <Form apiCall={apiCall} />
      <Loader isLoading={isLoading} />
      <Results wordList={wordList} />
    </>
  );
};

export default Home;
