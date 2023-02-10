function Results({wordList}) {
console.log("apiResponse", wordList);
  return (
    (wordList.length === 0) ? null : (
    <div>
        <h2>Results</h2>
        <ul>
            {wordList.map((wordReturn) => {
                return(
                <li><p>{wordReturn.word}</p><button>Save word</button></li>)
            })}
        </ul>
        
        </div>
    )

  )
}

export default Results