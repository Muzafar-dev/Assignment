// TaskList.js
import React, { useState } from 'react';
import TaskEditModal from './TaskEditModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editedTaskIndex, setEditedTaskIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedTaskIndex(index);
    setEditModalOpen(true);
  };

  const handleDeleteConfirmation = (index) => {
    setEditedTaskIndex(index);
    setDeleteModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEditedTaskIndex(null);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setEditedTaskIndex(null);
  };

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks && Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ marginRight: '10px' }}>{task.taskName}</span>
                  <span>{task.dueDate}</span>
                </div>
                <div>
                  <button style={{ marginLeft: '5px' }} onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteConfirmation(index)}>Delete</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>No tasks available.</li>
        )}
      </ul>

      {/* Edit Modal */}
      <TaskEditModal
        isOpen={editModalOpen}
        onClose={handleCloseEditModal}
        onSubmit={(updatedTask) => {
          onEdit(editedTaskIndex, updatedTask);
          handleCloseEditModal();
        }}
        taskToEdit={tasks[editedTaskIndex]}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={() => {
          onDelete(editedTaskIndex);
          handleCloseDeleteModal();
        }}
      />
    </div>
  );
};

export default TaskList;
