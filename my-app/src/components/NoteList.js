import React from 'react';
import Note from './Note';

const NoteList = ({ notes, updateNote, deleteNote }) => {
return (
    <div className="notes">
    {notes.map((note, index) => (
        <Note
        key={index}
        note={note}
        index={index}
        updateNote={updateNote}
        deleteNote={deleteNote}
        />
    ))}
    </div>
);
};

export default NoteList;
