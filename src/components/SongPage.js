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


    function addSong(song) {
        window.alert('button clicked');
        song.album_id = albumId;
        console.log(song);

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
          };
      
          fetch(`${baseURL}/songs`, config)
            .then(res => res.json())
            .then(song => setSongs([...songs, song]));
    }


    return (
        <div>
            Song page
            <FormAdd addSong={addSong} />
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