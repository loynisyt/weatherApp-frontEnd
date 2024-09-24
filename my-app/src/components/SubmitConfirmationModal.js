import React, { memo } from 'react';

const SubmitConfirmationModal = memo(({ isOpen, onConfirm, onCancel }) => {
return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
<div className="modal-background"></div>
<div className="modal-card">

        <header className="modal-card-head">
            <p className="modal-card-title">Confirm Save</p>
            <button className="delete" aria-label="close" onClick={onCancel}></button>
        </header>

        <section className="modal-card-body">
            <p>Are you sure you want to save this note?</p>
        </section>

    <footer className="modal-card-foot">
        <button className="button is-primary mr-6" onClick={onConfirm}>
            Yes, Save
        </button>

        <button className="button" onClick={onCancel}>
            Cancel
        </button>
    </footer>

</div>
</div>
);
});

export default SubmitConfirmationModal;
