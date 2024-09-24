import React, { useState, useCallback, memo } from 'react';
import SubmitConfirmationModal from './SubmitConfirmationModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const Note = memo(({ note, updateNote, deleteNote,  }) => {
const [isEditing, setIsEditing] = useState(true);
const [showSubmitModal, setShowSubmitModal] = useState(false);
const [showDeleteModal, setShowDeleteModal] = useState(false);

const handleSubmit = useCallback(() => {
    setShowSubmitModal(true);
}, []);

const confirmSubmit = useCallback(() => {
    setIsEditing(false);
    setShowSubmitModal(false);
}, []);

const handleCancel = useCallback(() => {
    setShowDeleteModal(true);
}, []);

const confirmDelete = useCallback(() => {
    deleteNote(note.id);
    setShowDeleteModal(false);
}, [note.id, deleteNote]);

const cancelAction = useCallback(() => {
    setShowSubmitModal(false);
    setShowDeleteModal(false);
}, []);

const handleEdit = useCallback(() => {
    setIsEditing(true);
}, []);

return (
<div className="box">
    {!isEditing && (
    <button className="button is-info is-small mb-2 mr-4" onClick={handleEdit}>
        Edit
    </button>
    )}
    {!isEditing && (
    <button className="button is-danger is-small mb-2 mr-4" onClick={handleCancel}>
        Delete
    </button>
    )}
    <input
    className="input mb-2"
    type="text"
    placeholder="Title"
    value={note.title}
    disabled={!isEditing}
    onChange={(e) => updateNote(note.id, "title", e.target.value)}
    />
    <textarea
    className="textarea"
    placeholder="Content"
    value={note.content}
    disabled={!isEditing}
    onChange={(e) => updateNote(note.id, "content", e.target.value)}
    ></textarea>

    {isEditing && (
    <div className="buttons mt-3">
        <button className="button is-primary" onClick={handleSubmit}>
        Save
        </button>
        <button className="button is-danger" onClick={handleCancel}>
        Cancel
        </button>
    </div>
    )}
    <SubmitConfirmationModal
    isOpen={showSubmitModal}
    onConfirm={confirmSubmit}
    onCancel={cancelAction}
    />
    <DeleteConfirmationModal
    isOpen={showDeleteModal}
    onConfirm={confirmDelete}
    onCancel={cancelAction}
    />
</div>
);
});

export default Note;
