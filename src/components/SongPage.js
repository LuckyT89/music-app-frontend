import { useState, useEffect } from "react";
import FormAdd from "./FormAdd";
import FormDelete from "./FormDelete";
import FormEdit from "./FormEdit";
import SongRow from './SongRow';

function SongPage() {

    // Find the album id from the URL
    const pathName = window.location.pathname;
    const albumId = pathName.split('/')[2];

    const baseURL = 'http://127.0.0.1:3000';

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/albums/${albumId}/songs`)
        .then(res => res.json())
        .then(songs => {
            setSongs(songs);
        })
    }, [albumId]); // console warning wants albumId in the dependency array even though it works without it

    // Create a SongRow component for each song in the album that will be displayed in the table. 
    const songList = songs.map(song => <SongRow key={song.id} song={song} /> )


    return (
        <div>
            Song page
            <FormAdd />
            <FormEdit />
            <FormDelete />
            <table>
                <thead>
                    <tr>
                        <th>Track</th>
                        <th>Title</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    { songList }
                </tbody>
            </table>
        </div>
    );
}

export default SongPage;