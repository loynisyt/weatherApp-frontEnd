import React from 'react';

const AddNote = ({ addNote }) => {
return (
    <div className="has-text-centered">
    <button className="button is-primary mb-4" onClick={addNote}>
        Press this button to add note
    </button>
    </div>
);
};

export default AddNote;
