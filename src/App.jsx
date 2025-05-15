import React from "react";
import Greetings from "./Component/Greetings";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import Login from "./Component/Login";
import ShowText from "./Component/ShowText";
import FruitList from "./Component/FruitList";
import UserDetails from "./Component/UserDetails";
import LoginForm from "./Component/LoginForm";
import ToDoList from "./Component/ToDOList";
import ProductCard from "./Component/ProductCard";
import Notification from "./Component/Notification";


function App() {
  return (
    <div >
      <Greetings/>
      
      <Counter/>
      <Message name1='Pramod' age='24'/>
      <Login/>
      <ShowText/>
      <FruitList/>
      <UserDetails/>
      <LoginForm/>
      <ToDoList/>
      <ProductCard name= 'Keyboard' Price ='900' desc=''/>
      <Notification isloggedIn={true}/>
      <Notification isloggedIn={false}/>
    </div>
  );
}

export default App;
