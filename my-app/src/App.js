import React, { useState, useEffect, useCallback, memo } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import Snackbar from './components/Snackbar'; 

import './App.css';

const App = memo(() => {
  const [notes, setNotes] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const fetchNotes = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/notes');
      if (!response.ok) throw new Error('Failed to fetch notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }, []);

  const addNote = useCallback(async () => {
    const newNote = { title: 'New Note', content: 'Note Content' }; 
    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      if (!response.ok) throw new Error('Failed to add note');
      const addedNote = await response.json();
      setNotes((prevNotes) => [...prevNotes, addedNote]);
      showSnackbarMessage('Note added successfully!'); 
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }, []);

  const updateNote = useCallback(async (id, title, content) => {
    try {
      const updatedNote = { id, title, content };
      const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNote),
      });

      if (!response.ok) throw new Error('Failed to update note');

      // Update the local state after the server confirms the update
      setNotes((prevNotes) => 
        prevNotes.map(note => note.id === id ? updatedNote : note)
      );

      showSnackbarMessage('Note updated successfully!'); 
    } catch (error) {
      console.error('Error updating note:', error);
    }
  }, []);

  const deleteNote = useCallback(async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete note');

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      showSnackbarMessage('Note deleted successfully!'); 
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }, []);

  const showSnackbarMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="app-container p-5">
      <h1 className="title has-text-centered toDo">Todo App</h1>
      <AddNote addNote={addNote} />
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />

      {showSnackbar && (
        <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />
      )}
    </div>
  );
});

export default App;
