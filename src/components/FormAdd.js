import { useState } from 'react';

function FormAdd({ addSong }) {

    const [track, setTrack] = useState(0);
    const [title, setTitle] = useState('');
    const [length, setLength] = useState('');

    function handleTrackChange(e) {
        setTrack(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleLengthChange(e) {
        setLength(e.target.value);
    }

    function handleAddClick() {
        const song = {
            track_number: track,
            name: title,
            length: length
        }

        addSong(song);
    }

    return (
        <div>
            Add song form<br />
            <input type='text' placeholder='Track' onChange={handleTrackChange} />
            <input type='text' placeholder='Title' onChange={handleTitleChange} />
            <input type='text' placeholder='Length' onChange={handleLengthChange} />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
}

export default FormAdd;