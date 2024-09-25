const notesService = require('../services/notesService');

exports.getAllNotes = (req, res) => {
const notes = notesService.loadNotes();
res.json(notes);
};

exports.createNote = (req, res) => {
const newNote = notesService.addNote(req.body.title, req.body.content);
res.json(newNote);
};

exports.updateNote = (req, res) => {
    console.log('Received update for note:', req.params.id, 'with body:', req.body);
    const updatedNote = notesService.updateNote(req.params.id, req.body.title, req.body.content);
    if (updatedNote) {
        res.json(updatedNote);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
};


exports.deleteNote = (req, res) => {
notesService.deleteNote(req.params.id);
res.status(204).send(); 
};
