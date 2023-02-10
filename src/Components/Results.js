import firebase from './../modules/firebase';
import { getDatabase, push, ref } from 'firebase/database';

function Results({ wordList }) {
  console.log("apiResponse", wordList);

  const handleClick = (e) => {
    const wordToAdd = wordList[e.target.id].word;
    // create a variable that holds our db info
    const database = getDatabase(firebase);
    // create a varibale that makes a reference to our database
    const dbRef = ref(database);
    push(dbRef, wordToAdd);
  }

  return (
    (wordList.length === 0) ? null : (
      <div>
        <h2>Results</h2>
        <ul>
          {wordList.map((wordReturn) => {
            return (
              <li key={wordList.indexOf(wordReturn)}>
                <p>{wordReturn.word}</p>
                <button onClick={handleClick} id={wordList.indexOf(wordReturn)}>Save word</button></li>)
          })}
        </ul>
      </div>
    )
  )
}

export default Results