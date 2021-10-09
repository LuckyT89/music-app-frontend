import { Link } from 'react-router-dom';
import '../styles/ArtistCard.css';

function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <Link to={`artists/${artist.id}/albums`}>
                <img src={artist.image_url} />
                <h2>{artist.name}</h2>
            </Link>
        </div>
    );
}

export default ArtistCard;