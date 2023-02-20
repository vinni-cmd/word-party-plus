import firebase from "../modules/firebase";
import { getDatabase, onValue, remove, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";

const SavedWords = ({ setWordList, setWordAddClassName }) => {
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
    return () => {
      setWordList([]);
    };
  }, [setWordList]);

  const handleRemoveWord = (wordId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${wordId}`);
    remove(dbRef);

    setWordAddClassName("animateRemove");

    setTimeout(() => {
      setWordAddClassName("");
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
