import React, { useState } from 'react'

function LoginForm() {
    const [name , setName]= useState(" ");
    const [email , setEmail]= useState(" ");

    function handleSubmit(event){
        event.preventDefault();
        alert("Successfully Login");
        setName(" ");
        setEmail(" ");
    }
  return (
    <div className='user'>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">User Name : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
        <label htmlFor="">Email : </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
        <button  className='b3' type='submit'>Login</button>
      </form>
    </div>
  )
};

export default LoginForm
