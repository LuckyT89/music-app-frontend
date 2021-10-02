

function ArtistCard({ artist }) {
    return (
        <div>
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
        </div>
    );
}

export default ArtistCard;