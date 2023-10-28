import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [tasks, setTasks] = useState([
    { name: 'abcd', id: uuidv4() },
    { name: 'efgh', id: uuidv4() },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (newTask) {
      const temp = { name: newTask, id: uuidv4() };
      setTasks([...tasks, temp]); // Corrected the way of updating the tasks array
      setNewTask(''); // Clears the input field
    }
  };

  const handleDelete = (taskId) => {};

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
            <li>{task.name}</li>
            <button onClick={() => handleDelete(task.id)}>Delete Task</button>
          </div>
        ))}
      </ul>
      <form onSubmit={submitForm}>
        <label>New Task</label>
        <input type="text" value={newTask} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Todo;
