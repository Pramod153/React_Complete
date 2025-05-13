import React, {useState} from 'react'
import './message.css'
function Message(props) {
   const [like,setCount]=useState(0);
  return (
    <div>
      
      <section className='user'>
        <h2>User Details</h2>
        <h4>User Name: {props.name1}</h4>
        <h4>Age: {props.age}</h4>
        <h4>User Likes: {like} <br /> <button className='b1' onClick={()=> setCount(like+1)}>❤</button> </h4>
      </section>
    </div>
    
  )
}

export default Message
