import React, { useState } from 'react';
import Todo from './Todo';

function TodoMain() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const onTaskChange = (event) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    if (task !== "") {
      setTaskArray((prevTasks) => {
        return [...prevTasks, task]
      })
      setTask("")
    }
  }

  const deleteTask = (indexToDelete) => {
    setTaskArray((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div>
      <div>
        <input type='text' value={task} placeholder='Add task' onChange={onTaskChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <ol>
          {taskArray.map((val, index) => (
            <Todo key={index} text={val} onDelete={() => deleteTask(index)} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default TodoMain;
