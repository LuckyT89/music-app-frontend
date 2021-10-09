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
            <p className="mt-2"> Add a song to this album</p>
            <input className="mx-3 p-2" type='text' placeholder='Track #' onChange={handleTrackChange} />
            <input className="mx-3 p-2" type='text' placeholder='Title' onChange={handleTitleChange} />
            <input className="mx-3 p-2" type='text' placeholder='Length' onChange={handleLengthChange} /><br />
            <button type="button" className="mt-3 btn btn-primary" onClick={handleAddClick}>Add</button>
        </div>
    );
}

export default FormAdd;