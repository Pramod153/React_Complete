// import React, { useState, useEffect } from "react";

// functon RandomQuote() {
//   const [quoteData, setQuoteData] = useState(null);

//   const fetchQuote = async () => {
//     const res = await fetch("https://dummyjson.com/quotes/random");
//     const data = await res.json();
//     setQuoteData(data);
//   };

//   useEffect(() => {
//     fetchQuote(); // Load quote on component mount
//   }, []);

//   return (
//     <div className='Counter'>
//       <h2>Random Quote</h2>
//       {quoteData ? (
//         <div>
//           <p>"{quoteData.quote}"</p>
//           <p>— {quoteData.author}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <button onClick={fetchQuote}>Get New Quote</button>
//     </div>
//   );
// }

// export default RandomQuote;i
import React, { useState } from "react";
import pic1  from './Image/pic1.jpg';
function RandomQuote() {
  const [quotes, setQuotes] = useState([
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "Opportunities don’t happen, you create them.", author: "Chris Grosser" },
  ]);

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const addQuote = () => {
    if (newQuote.trim() !== "") {
      const quoteObj = {
        quote: newQuote,
        author: newAuthor || "Anonymous"
      };
      setQuotes([...quotes, quoteObj]);
      setNewQuote("");
      setNewAuthor("");
      setCurrentQuote(quoteObj); // Show the newly added quote
    }
  };

  return (
    <div style={{ padding: '20px', backgroundImage:`url(${pic1})` ,backgroundSize: 'cover',
    backgroundPosition: 'center'}} className="Counter" >
      <h2>Random Quote</h2>
      <p style={{color: 'White'}}>"{currentQuote.quote}"</p>
      <p style={{color: 'White'}}>— {currentQuote.author}</p>

      <button onClick={getRandomQuote}>Get New Quote</button>

      <hr />

      <h3 style={{color: 'White'}}>Add Your Own Quote</h3>
      <input
        type="text"
        placeholder="Enter quote"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
        style={{ width: "40%", marginBottom: "10px" }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter author (optional)"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
        style={{ width: "40%", marginBottom: "10px" }}
      />
      <br />
      <button onClick={addQuote}>Add Quote</button>
    </div>
  );
}

export default RandomQuote;
