import { Link } from 'react-router-dom';

function ArtistCard({ artist }) {
    return (
        <div>
            <Link to={`artists/${artist.id}/albums`}>
                <h2>{artist.name}</h2>
                <p>{artist.bio}</p>
            </Link>
        </div>
    );
}

export default ArtistCard;