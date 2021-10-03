function SongRow({ song }) {
    return (
        <tr>
            <td>{song.track_number}</td>
            <td>{song.name}</td>
            <td>{song.length}</td>
        </tr>
    );
}

export default SongRow;