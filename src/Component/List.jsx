import React from 'react'

function List(props) {
  return (
    <div className='user'>
      {/* <h1>Task List</h1>
      
      <datalist >
       
      </datalist> */}
      <input type="text"  placeholder="All tasks" list="Tasks" autocomplete="off" />
    <datalist id="Tasks">
         <option >{props.task1}</option>
        <option >{props.task2}</option>
        <option >{props.task3}</option>
        <option >{props.task4}</option>
        <option >{props.task5}</option>
    </datalist>
    </div>
  )
}

export default List
