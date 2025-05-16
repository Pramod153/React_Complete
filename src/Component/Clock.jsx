import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime]= useState(new Date());

    useEffect(() =>{
        const timer= setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return() => clearInterval(timer);
    },[]);

    const formatTime =(date) => {
        return date.toLocaleTimeString();
    };
  return (
    <div className='Counter'>
      <h2>Current Time</h2>
      <p style={{padding:'10px',color:' black',backgroundColor:'skyblue', fontSize:'20px'
      }}>{formatTime(time)}</p>
    </div>
  );
};

export default Clock
