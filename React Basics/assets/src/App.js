import './App.css';
import React from 'react';
import Media from './Media';
import Homepage from './Homepage';
import SongSelection from './SongSelection';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/practice-1-media" className="nav-item">Media</Link>
        <Link to="/practice-2-song-selection" className="nav-item">Song Selection</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/practice-1-Media" element={<Media />}></Route>
        <Route path="/practice-2-song-selection" element={<SongSelection />}></Route>
      </Routes>
    </div>
  );
};

export default App;

// Import npm react-router-dom: npm install react-router-dom