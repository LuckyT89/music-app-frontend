import { Link } from 'react-router-dom';


function AlbumCard({ album }) {
    return (
        <div>
            <Link to={`/albums/${album.id}/songs`} >
                <img src={album.image_url} />
                <h2>{album.name}</h2>
            </Link>
        </div>
    );
}

export default AlbumCard;