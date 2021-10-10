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

        // Clear inputs after Add button is clicked
        document.getElementById('track-add').value = '';
        document.getElementById('title-add').value = '';
        document.getElementById('length-add').value = '';
        setTrack(0);
        setTitle('');
        setLength('');

        addSong(song);
    }

    return (
        <div>
            <p className="mt-2"> Add a song to this album</p>
            <input id="track-add" className="mx-3 p-2" type='text' placeholder='Track #' onChange={handleTrackChange} />
            <input id="title-add" className="mx-3 p-2" type='text' placeholder='Title' onChange={handleTitleChange} />
            <input id="length-add" className="mx-3 p-2" type='text' placeholder='Length' onChange={handleLengthChange} /><br />
            <button type="button" className="mt-3 btn btn-primary" onClick={handleAddClick}>Add</button>
        </div>
    );
}

export default FormAdd;