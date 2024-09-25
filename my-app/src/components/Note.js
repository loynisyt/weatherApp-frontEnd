import React, { useState, useCallback, memo } from 'react';
import SubmitConfirmationModal from './SubmitConfirmationModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const Note = memo(({ note, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSubmit = useCallback(() => {
    setShowSubmitModal(true);
  }, []);

  const confirmSubmit = useCallback(async () => {
    console.log('Updating note:', note.id, 'with title:', title, 'and content:', content);
    await updateNote(note.id, title, content);
    setIsEditing(false);
    setShowSubmitModal(false); // Close the modal after confirming the update
  }, [note.id, title, content, updateNote]);

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

  return (
    <div className="box">
      <button className="button is-info is-small mb-2 mr-4" onClick={handleEdit} disabled={isEditing}>
        Edit
      </button>
      <button className="button is-info is-small mb-2 mr-4" onClick={handleCancel}>
        Delete
      </button>
      <input
        className="input mb-2 title"
        type="text"
        placeholder="Title"
        value={title}
        disabled={!isEditing}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Content"
        value={content}
        disabled={!isEditing}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      {isEditing && (
        <div className="buttons mt-3">
          <button className="button is-primary is-small" onClick={handleSubmit}>
            Save
          </button>
          <button className="button is-danger is-small" onClick={() => setIsEditing(false)}>
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
