import React, { useState } from 'react';

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.taskName : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      description,
      dueDate,
    };

      onSubmit(newTask);
      
      setTaskName('');
      setDescription('');
      setDueDate('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ marginTop: '10px' }}>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
