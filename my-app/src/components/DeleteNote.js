import React from 'react';

const DeleteNote = ({ deleteNote, index }) => {
return (
    <button
    className="delete is-pulled-right"
    onClick={() => deleteNote(index)}
    ></button>
);
};

export default DeleteNote;
