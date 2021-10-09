import { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';


function AlbumsPage() {

    // Find the artist id from the URL
    const pathName = window.location.pathname;
    const artistId = pathName.split('/')[2];

    const baseURL = 'http://127.0.0.1:3000';

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/artists/${artistId}/albums`)
        .then(res => res.json())
        .then(albums => {
            setAlbums(albums);
        })
    }, [artistId]); // console warning wants artistId in the dependency array even though it works without it

    const albumCards = albums.map((album) => <AlbumCard key={album.id} album={album} />);

    return (
        <div>
            { albumCards }
        </div>
    );
}

export default AlbumsPage;
