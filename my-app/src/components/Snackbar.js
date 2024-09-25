import React, { useEffect } from 'react';
import '../App.css';

const Snackbar = ({ message, onClose }) => {

useEffect(() => {
    const timer = setTimeout(() => {
onClose();
    }, 3000); 

    return () => clearTimeout(timer);
}, [onClose]);

return (
    <div className="snackbar">
    {message}
    <button className="snackbar-close" onClick={onClose}>X</button>
    </div>
);
};

export default Snackbar;
