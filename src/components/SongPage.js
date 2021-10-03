import { useState, useEffect } from "react";
import FormAdd from "./FormAdd";
import FormDelete from "./FormDelete";
import FormEdit from "./FormEdit";
import SongOption from "./SongOption";
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



    // Add song
    // Create a SongRow component for each song in the album that will be displayed in the table. 
    const songList = songs.map(song => <SongRow key={song.id} song={song} />)

    function addSong(song) {
        song.album_id = albumId;

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




    // Delete song
    const songOptions = songs.map(song => <SongOption key={song.id} song={song} />)

    function deleteSong(songId) {
        console.log(`Delete song with id: ${songId}`)
        console.log(typeof(songId));

        fetch(`${baseURL}/songs/${songId}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(() => {
                setSongs(songs.filter(song => song.id !== songId))
                // songs.forEach(song => console.log(song));
                
            })
    }




    // Update song
    function updateSong(updatedSong, songId) {
        console.log('Update song', updatedSong);
        console.log('Song id: ', songId)
        console.log('Album id: ', albumId);

        const albumIdInteger = parseInt(albumId);
        updatedSong.album_id = albumIdInteger;
        console.log(updatedSong);

        const config = {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedSong)
          }
      
        fetch(`${baseURL}/songs/${songId}`, config)
            .then(res => res.json())
            .then((newSong) => {
              // Create a new variable with a list of all games, updating the one that just 
              // had the cancel status toggled. 
              const updatedSongs = songs.map((song) => {
                if (song.id === newSong.id) {
                  return newSong;
                }
                else {
                  return song;
                }
              });
      
              setSongs(updatedSongs);
            })
    }

    return (
        <div>
            Song page
            <FormAdd addSong={addSong} />
            <FormEdit songOptions={songOptions} updateSong={updateSong} />
            <FormDelete songOptions={songOptions} deleteSong={deleteSong} />
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