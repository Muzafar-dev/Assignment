import React, { useState } from 'react';

const TaskEditModal = ({ isOpen, onClose, onSubmit, taskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.taskName : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      taskName,
      description,
      dueDate,
    };

    onSubmit(updatedTask);
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Task Name:
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Due Date:
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
