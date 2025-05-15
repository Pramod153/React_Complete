import React from 'react'

function ColorChange({color , changecolor}) {
  return (
    <div className='Counter' style={{backgroundColor:color}}>
      <h2 >Color : {color}</h2>
      <button onClick={changecolor}> Change color</button>
    </div>
  )
}

export default ColorChange
