import React, { useState, useCallback, memo } from 'react';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

const App = memo(() => {
  const [notes, setNotes] = useState([]);

  const addNote = useCallback(() => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: uuidv4(), title: '', content: '' },
    ]);
  }, []);

  const updateNote = useCallback((id, field, value) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }, []);



  return (
    <div className="app-container p-5">
      <h1 className="title has-text-centered toDo">Todo App</h1>

  
      <div className="has-text-centered">
        <button className="button is-primary mb-4" onClick={addNote}>
          Add Note
        </button>
      </div>

    
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
});

export default App;