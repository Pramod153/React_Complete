import React from "react";
import Greetings from "./Component/Greetings";
import Message from "./Component/Message";
import Counter from "./Component/Counter";

function App() {
  return (
    <div>
      <Greetings/>
      
      <Counter/>
      <Message name1='Pramod' age='24'/>
      
    </div>
  );
}

export default App;
