import { Link } from 'react-router-dom';
import '../styles/AlbumCard.css';


function AlbumCard({ album }) {
    return (
        <div className="album-card">
            <Link to={`/albums/${album.id}/songs`} >
                <img src={album.image_url} />
                <h2>{album.name}</h2>
            </Link>
        </div>
    );
}

export default AlbumCard;