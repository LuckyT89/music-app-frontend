import { Link } from 'react-router-dom';


function AlbumCard({ album }) {
    return (
        <div>
            <Link to={`/albums/${album.id}/songs`} >
                <h2>{album.name}</h2>
            </Link>
            <p>{album.description}</p>
        </div>
    );
}

export default AlbumCard;