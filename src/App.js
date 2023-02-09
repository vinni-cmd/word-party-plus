import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
        rel_rhy: "cat",
      },
    }).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className="App">
      <h1>Word Party</h1>
    </div>
  );
}

export default App;
