import React from 'react';

const DeleteNote = ({ deleteNote, id }) => {
return (
    <button
    className="delete is-pulled-right"
    onClick={() => deleteNote(id)}
    ></button>
);
};

export default DeleteNote;
