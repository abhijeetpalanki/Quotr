import React, {useState, useEffect} from 'react';
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    var result = await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json());
    return result.slip.advice;
  }

  const generateQuote = async () => {
    setQuote(await fetchQuote());
  }

  useEffect(async () => {
     setQuote(await fetchQuote());
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />

      <button onClick={generateQuote}>Generate a new quote</button>
    </div>
  );
}

export default App;
