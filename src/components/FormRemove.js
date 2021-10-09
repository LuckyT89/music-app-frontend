import { useState } from 'react';

function FormRemove({ songOptions, deleteSong }) {

    const [songId, setSongId] = useState(0)

    function handleSongChange(e) {
        setSongId(e.target.value)
    }
    function handleButtonClick() {
        const songIdInteger = parseInt(songId); // songId is getting set as a string for some reason
        deleteSong(songIdInteger);
    }



    return (
        <div>
            <p className="mt-2"> Select a song to remove from this album</p>
            <select className="p-2" onChange={handleSongChange}>
                { songOptions }
            </select><br />
            <button type="button" className="mt-3 btn btn-danger" onClick={handleButtonClick}>Remove</button>
        </div>
    );
}

export default FormRemove;
