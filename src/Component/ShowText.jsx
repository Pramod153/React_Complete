import React, { useState } from 'react'
function ShowText() {
    const[text , setText]= useState(false);
    const ToggleText = ()=>{
        setText(prev => !prev);
    };
  return (
    <div>
      <button onClick={ToggleText}>
        {text ? 'hide ': 'show text'}
      </button>
      {text && <p>Hello, Pramod</p>}
    </div>
  )
}

export default ShowText
