import firebase from "../modules/firebase";
import { getDatabase, onValue, remove, ref } from "firebase/database";
import { useEffect, useState } from "react";

const SavedWords = () => {
  const [savedWords, setSavedWords] = useState([]);
  useEffect(() => {
    const database = getDatabase(firebase);

    const dbRef = ref(database);

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
    const dbRef = ref(database, `${wordId}`);

    console.log(wordId);

    remove(dbRef);
  };

  return (
    <div>
      <h2>SavedWords</h2>
      <ul>
        {savedWords.map((word) => {
          return (
            <li key={word.wordId}>
              <p>{word.savedWord}</p>
              <button
                onClick={() => {
                  handleRemoveWord(word.wordId);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavedWords;
