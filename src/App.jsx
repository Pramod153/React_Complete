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
import List from "./Component/List";


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
      <ToDoList task1='play' task2 = 'Read' task3 ='Fight' task4='sleep' task5='seminar'/>
      <ProductCard name= 'Keyboard' Price ='900' desc=''/>
      <Notification isloggedIn={true}/>
      <Notification isloggedIn={false}/>
      <List task1='play' task2 = 'Read' task3 ='Fight' task4='sleep' task5='seminar' />
    </div>
  );
}

export default App;
