import './App.css';
import { Route, Switch } from 'react-router-dom';
import ArtistsPage from './components/ArtistsPage';
import AlbumsPage from './components/AlbumsPage';

function App() {
  return (
    <div className="App">
      App component

      <Switch>
        <Route exact path="/">
          <ArtistsPage />
        </Route>

        <Route>
          <AlbumsPage path="/artists/:id/albums" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
