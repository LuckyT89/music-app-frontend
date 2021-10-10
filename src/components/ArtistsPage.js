import { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import '../styles/ArtistPage.css';

function ArtistsPage() {

    const baseURL = 'http://127.0.0.1:3000';

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/artists`)
            .then(res => res.json())
            .then(artists => {
                setArtists(artists);
            })
        }, []);

    // Map over the array of artist objects and make an ArtistCard component for each one.
    const artistCards = artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />);

    return (
        <div className='artist-page container'>
            <div className="row">
                { artistCards }
            </div>
        </div>
    );
}

export default ArtistsPage;