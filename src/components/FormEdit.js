import { useState } from 'react';

function FormEdit({ songOptions, updateSong }) {

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
            Update song form<br />
            <select onChange={handleSongChange}>
                { songOptions }
            </select><br />
            <input type='text' placeholder='Track' onChange={handleTrackChange} />
            <input type='text' placeholder='Title' onChange={handleTitleChange} />
            <input type='text' placeholder='Length' onChange={handleLengthChange} />
            <button type="button" className="btn btn-secondary" onClick={handleButtonClick}>Update</button>
        </div>
    );
}

export default FormEdit;