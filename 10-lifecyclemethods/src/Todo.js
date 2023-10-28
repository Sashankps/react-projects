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
      setTasks([...tasks, temp]);
    }
    setNewTask('');
  };

  const deleteTask = (id) => {
    const items = tasks.filter((i) => i.id !== id);
    setTasks(items);
  };

  return (
    <div>
      <ul>
        {tasks.map((m) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <li>{m.name}</li>
              <button onClick={() => deleteTask(m.id)}>Delete Task</button>
            </div>
          );
        })}
      </ul>
      <form>
        <label>New Task</label>
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}

export default Todo;
