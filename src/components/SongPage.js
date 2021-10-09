import { useState, useEffect } from "react";
import FormAdd from "./FormAdd";
import FormRemove from "./FormRemove";
import FormUpdate from "./FormUpdate";
import SongOption from "./SongOption";
import SongRow from './SongRow';
import '../styles/SongPage.css';

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

            <div class="accordion" id="accordionExample">

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Edit Songs
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Update</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Remove</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><FormAdd addSong={addSong} /></div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><FormUpdate songOptions={songOptions} updateSong={updateSong} /></div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><FormRemove songOptions={songOptions} deleteSong={deleteSong} /></div>
                  </div>
                    
                  </div>
                </div>
              </div>

            </div>



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