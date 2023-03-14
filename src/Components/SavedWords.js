// modules
import { getDatabase, onValue, remove, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
// local imports
import firebase from "../modules/firebase";
import { UserAuth } from '../AuthContext';



const SavedWords = ({ setWordResultList, setSavedWordAnimation }) => {
  // variable used to store words from firebase database
  const [savedWords, setSavedWords] = useState([]);
  // context
  const { userId } = UserAuth();

  // fetches the database saved words by unique id for each word
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${userId}`);

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
    return () => {
      // when component unmounts clear the results component
      setWordResultList([]);
    };
  }, [setWordResultList, userId]);

  const handleRemoveWord = (wordId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${userId}/${wordId}`);
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
