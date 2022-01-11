import './App.css';
import Map from './components/Map'
import { useState } from "react";
import {findPlace} from "./services/findPlace"

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [Glocation, setGlocation] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    findPlace(searchInput).then((res) => {
      console.log("res" + JSON.stringify(res));
    })
  }

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return (
    <div className="App">
      <h2>Search App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </form>
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
