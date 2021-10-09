import { useState } from 'react';

function FormUpdate({ songOptions, updateSong }) {

    const [songId, setSongId] = useState(0)
    const [track, setTrack] = useState(0);
    const [title, setTitle] = useState('');
    const [length, setLength] = useState('');

    function handleSongChange(e) {
        setSongId(e.target.value)
        console.log(`Song id: ${e.target.value}`);
    }
    function handleTrackChange(e) {
        setTrack(e.target.value);
        console.log(track);
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

        updateSong(updatedSong, songId);
    }



    return (
        <div>
            Update the values of a song from this album<br />
            <select className="m-3 p-2" onChange={handleSongChange}>
                { songOptions }
            </select>
            <input className="m-3 p-2" type='text' placeholder='Track' onChange={handleTrackChange} />
            <input className="m-3 p-2" type='text' placeholder='Title' onChange={handleTitleChange} />
            <input className="m-3 p-2" type='text' placeholder='Length' onChange={handleLengthChange} /><br />
            <button type="button" className="btn btn-secondary" onClick={handleButtonClick}>Update</button>
        </div>
    );
}

export default FormUpdate;