import React, { memo } from 'react';
import Note from './Note';

const NoteList = memo(({ notes, updateNote, deleteNote, submitNote }) => {
return (
    <div className="notes">
    {notes.map((note) => (
        <Note
        key={note.id}
        note={note}
        updateNote={updateNote}
        deleteNote={deleteNote}
        />
    ))}
    </div>
);
});

export default NoteList;
