import './App.css';
import { Route, Switch } from 'react-router-dom';
import ArtistsPage from './components/ArtistsPage';
import AlbumsPage from './components/AlbumsPage';
import SongPage from './components/SongPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ArtistsPage />
        </Route>

        <Route path="/artists/:id/albums">
          <AlbumsPage />
        </Route>

        <Route path="/albums/:id/songs">
          <SongPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
