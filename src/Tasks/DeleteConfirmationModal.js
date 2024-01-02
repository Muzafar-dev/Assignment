import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  const modalStyle = {
    display: isOpen ? 'flex' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <p>Are you sure you want to delete this task?</p>
        <button onClick={onDelete}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
