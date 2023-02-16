import firebase from "./../modules/firebase";
import { getDatabase, push, ref, get } from "firebase/database";
import { IoMdAddCircle } from "react-icons/io";
import { useEffect, useRef } from "react";
import throwAlert from "../modules/alerts";

const Results = ({ wordList }) => {
  const scrollToRef = useRef(null);
  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }, [wordList]);

  const handleClick = (e) => {
    const wordToAdd = wordList[e.currentTarget.id].word;
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    get(dbRef)
      .then((snapshot) => {
        const wordDataBase = snapshot.val();
        let containsWord = false;
        for (let wordEntry in wordDataBase) {
          if (wordToAdd !== wordDataBase[wordEntry]) {
            continue;
          } else {
            containsWord = true;
          }
        }
        if (containsWord === false) {
          push(dbRef, wordToAdd);
        }
      })
      .catch((error) => {
        throwAlert(error.message);
      });
  };

  return (
    <section className="results wrapper" ref={scrollToRef}>
      <h2>Results</h2>
      <ul>
        {wordList.map((wordReturn) => {
          return (
            <li key={wordList.indexOf(wordReturn)}>
              <p>{wordReturn.word}</p>
              <button
                onClick={handleClick}
                id={wordList.indexOf(wordReturn)}
                aria-label="Add word to Saved Words"
                title="Save word"
              >
                <IoMdAddCircle />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Results;
