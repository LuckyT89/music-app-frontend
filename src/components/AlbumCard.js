

function AlbumCard({ album }) {
    return (
        <div>
            <h2>{album.name}</h2>
            <p>{album.description}</p>
        </div>
    );
}

export default AlbumCard;