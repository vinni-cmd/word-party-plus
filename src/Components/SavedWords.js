// modules
import { getDatabase, onValue, remove, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
// local imports
import firebase from "../modules/firebase";

const SavedWords = ({ setSavedWordAnimation }) => {

  // variable used to store words from firebase database
  const [savedWords, setSavedWords] = useState([]);
  // context

  // fetches the database saved words by unique id for each word
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${sessionStorage.getItem('userID')}`);

    // listens for changes in database
    onValue(dbRef, (response) => {
      const data = response.val();
      const savedWordArray = [];
      for (const wordId in data) {
        savedWordArray.push({
          wordId,
          savedWord: data[wordId],
        });
      }
      setSavedWords(savedWordArray);
    });
  }, []);

  const handleRemoveWord = (wordId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${sessionStorage.getItem('userID')}/${wordId}`);
    remove(dbRef);

    setSavedWordAnimation("animateRemove");

    setTimeout(() => {
      setSavedWordAnimation("");
    }, 600);
  };

  return (
    <section className="saved-words wrapper">
      <h2>Saved Words</h2>
      <ul>
        {savedWords.map((word) => {
          return (
            <li key={word.wordId}>
              <p>{word.savedWord}</p>
              <button
                onClick={() => {
                  handleRemoveWord(word.wordId);
                }}
                aria-label="Remove word from Saved Words"
                title="Remove word"
              >
                <IoMdRemoveCircle />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SavedWords;
