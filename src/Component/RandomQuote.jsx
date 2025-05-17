import React, { useState, useEffect } from "react";

function RandomQuote() {
  const [quoteData, setQuoteData] = useState(null);

  const fetchQuote = async () => {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    setQuoteData(data);
  };

  useEffect(() => {
    fetchQuote(); // Load quote on component mount
  }, []);

  return (
    <div className='Counter'>
      <h2>Random Quote</h2>
      {quoteData ? (
        <div>
          <p>"{quoteData.quote}"</p>
          <p>— {quoteData.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default RandomQuote;
