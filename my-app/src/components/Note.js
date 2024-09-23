import React from 'react';
import DeleteNote from './DeleteNote';

const Note = ({ note, index, updateNote, deleteNote }) => {
return (
    <div className="box">

    <DeleteNote deleteNote={deleteNote} index={index} />

    <input
        className="input mb-2"
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => updateNote(index, 'title', e.target.value)}
    />

    <textarea
        className="textarea"
        placeholder="Content"
        value={note.content}
        onChange={(e) => updateNote(index, 'content', e.target.value)}
    ></textarea>
    </div>
);
};

export default Note;
