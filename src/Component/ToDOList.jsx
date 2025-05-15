import React, { useState } from "react";

function ToDoList({}) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add Task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear input field
    }
  }

  // Remove Task
  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className='Counter'>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
       
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      
    </div>
  );
}

export default ToDoList;
