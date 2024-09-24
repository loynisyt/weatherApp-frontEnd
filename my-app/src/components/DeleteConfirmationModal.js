import React, { memo } from 'react';

const DeleteConfirmationModal = memo(({ isOpen, onConfirm, onCancel }) => {
return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
<div className="modal-background"></div>
<div className="modal-card">

        <header className="modal-card-head">
            <p className="modal-card-title">Confirm Delete</p>
            <button className="delete" aria-label="close" onClick={onCancel}></button>
        </header>

        <section className="modal-card-body">
            <p>Are you sure you want to delete this note?</p>
        </section>

    <footer className="modal-card-foot">
        <button className="button is-danger mr-6" onClick={onConfirm}>
            Yes, Delete
        </button>

        <button className="button" onClick={onCancel}>
            Cancel
        </button>
    </footer>
</div>
</div>
);
});

export default DeleteConfirmationModal;
