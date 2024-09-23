import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { title: '', content: '' }]);
  };

  const updateNote = (index, field, value) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, [field]: value } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };

  return (
    <div className="app-container">
      <h1 className="title has-text-centered">Todo App</h1>

    
      <AddNote addNote={addNote} />

    
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;

