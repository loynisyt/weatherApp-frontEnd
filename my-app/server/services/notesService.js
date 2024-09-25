const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const notesFilePath = path.join(__dirname, '../notes.json');

const loadNotes = () => {
  if (!fs.existsSync(notesFilePath)) {
    fs.writeFileSync(notesFilePath, JSON.stringify([]));
  }
  const notesData = fs.readFileSync(notesFilePath);
  return JSON.parse(notesData);
};

const addNote = (title, content) => {
  const notes = loadNotes();
  const newNote = { id: uuidv4(), title, content };
  notes.push(newNote);
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
  return newNote;
};

const updateNote = (id, title, content) => {
    const notes = loadNotes(); // Load current notes from the JSON file
    const noteIndex = notes.findIndex(note => note.id === id); // Find the index of the note to update

    if (noteIndex === -1) return null; // Return null if note is not found

    // Update the note with the new title and content
    notes[noteIndex] = { ...notes[noteIndex], title, content };
    
    // Write updated notes back to the JSON file
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
    
    return notes[noteIndex]; // Return the updated note
};



const deleteNote = (id) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.id !== id);
  fs.writeFileSync(notesFilePath, JSON.stringify(updatedNotes, null, 2));
};

module.exports = {
  loadNotes,
  addNote,
  updateNote,
  deleteNote,
};
