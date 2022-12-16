import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage';

function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

// Import npm react-router-dom: npm install react-router-dom