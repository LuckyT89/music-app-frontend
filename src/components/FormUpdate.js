import { useState } from 'react';

function FormUpdate({ songOptions, updateSong }) {

    const [songId, setSongId] = useState(0)
    const [track, setTrack] = useState(0);
    const [title, setTitle] = useState('');
    const [length, setLength] = useState('');

    function handleSongChange(e) {
        setSongId(e.target.value)
    }
    function handleTrackChange(e) {
        setTrack(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleLengthChange(e) {
        setLength(e.target.value);
    }

    function handleButtonClick() {
        const updatedTrackNumber = parseInt(track);
        const updatedSong = {
            name: title,
            length: length,
            track_number: updatedTrackNumber
        }

        // Clear inputs after Update button is clicked
        document.getElementById('track-update').value = '';
        document.getElementById('title-update').value = '';
        document.getElementById('length-update').value = '';
        setTrack(0);
        setTitle('');
        setLength('');

        updateSong(updatedSong, songId);
    }



    return (
        <div>
            <p className="mt-2"> Update the values of a song from this album</p>
            <select className="mx-3 p-2" onChange={handleSongChange}>
                { songOptions }
            </select>
            <input id="track-update" className="mx-3 p-2" type='text' placeholder='Track' onChange={handleTrackChange} />
            <input id="title-update" className="mx-3 p-2" type='text' placeholder='Title' onChange={handleTitleChange} />
            <input id="length-update" className="mx-3 p-2" type='text' placeholder='Length' onChange={handleLengthChange} /><br />
            <button type="button" className="mt-3 btn btn-secondary" onClick={handleButtonClick}>Update</button>
        </div>
    );
}

export default FormUpdate;