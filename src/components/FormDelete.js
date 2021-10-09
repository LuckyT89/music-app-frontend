import { useState } from 'react';

function FormDelete({ songOptions, deleteSong }) {

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
            Delete song form<br />
            <select onChange={handleSongChange}>
                { songOptions }
            </select>
            <button type="button" className="btn btn-danger" onClick={handleButtonClick}>Delete</button>
        </div>
    );
}

export default FormDelete;
