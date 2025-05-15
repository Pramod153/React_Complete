// TaskManager.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="user">
      <h2 >Task Manager</h2>
      <TaskForm onAddTask={handleAddTask} />
      
        {tasks.map((task, index) => (
          <li key={index} >{task}</li>
        ))}
     
    </div>
  );
};

export default TaskManager;
