import Form from "./Form"
import Results from "./Results"


const Home = ({
    apiCall, wordList
}) => {
  return (
    <>
    
    <Form apiCall={apiCall} />   
    <Results wordList={wordList} /> 
    
    </>
  )
}

export default Home