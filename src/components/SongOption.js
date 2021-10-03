

function SongOption({ song }) {
    return (
        <option value={song.id}>{song.name}</option>
    );
}

export default SongOption;
