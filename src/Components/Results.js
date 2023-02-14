import firebase from './../modules/firebase';
import { getDatabase, push, ref } from 'firebase/database';
import { IoMdAddCircle } from 'react-icons/io'
function Results({ wordList }) {
  console.log("apiResponse", wordList);

  const handleClick = (e) => {
    const wordToAdd = wordList[e.target.id].word;
    // create a variable that holds our db info
    const database = getDatabase(firebase);
    // create a variable that makes a reference to our database
    const dbRef = ref(database);
    // BEFORE WE PUSH TO FIREBASE LETS CHECK TO SEE IF THE WORD ALREADY EXISTS IN FB
    //  use the get() method to see what's in our db
    //  check if the returned ?object? includes our wordToAdd
    push(dbRef, wordToAdd);
  }

  return (
    (wordList.length === 0) ? null : (
      <section className='results wrapper'>
        <h2>Results</h2>
        <ul>
          {wordList.map((wordReturn) => {
            return (
              <li key={wordList.indexOf(wordReturn)}>
                <p>{wordReturn.word}</p>
                <button onClick={handleClick} id={wordList.indexOf(wordReturn)} aria-label="Add word to Saved Words" title="Save word"><IoMdAddCircle /></button>
              </li>)
          })}
        </ul>
      </section>
    )
  )
}

export default Results