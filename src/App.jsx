import React, { useState } from "react";
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
import ColorChange from "./Component/ColorChange";
import TaskManager from "./Component/TaskManager";
import Clock from "./Component/Clock";
import PostList from "./Component/PostList";
import RandomQuote from "./Component/RandomQuote";
import UseLoginState from "./Component/UseLoginState";
import FeedbackForm from "./Component/FeedbackForm";


function App() {
  const [color, setColor]= useState("");
   function change(){
    setColor('green');
   }
  
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
      <ColorChange color={color} changecolor={change} />
      <TaskManager/>
      <Clock/>
      <PostList/>
      <RandomQuote/>
      <UseLoginState/>
      <FeedbackForm/>
    </div>
  );
}

export default App;
