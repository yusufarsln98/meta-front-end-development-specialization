import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import UseStateHook from './UseStateHook';
import UseStateLab from './UseStateLab';
import UseEffectHook from './UseEffectHook';

function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/useStateHook" className="nav-item">useState</Link>
        <Link to="/useStateLab" className="nav-item">useState Lab</Link>
        <Link to="/useEffectHook" className="nav-item">useEffect</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/useStateHook" element={<UseStateHook />}></Route>
        <Route path="/useStateLab" element={<UseStateLab />}></Route>
        <Route path="/useEffectHook" element={<UseEffectHook />}></Route>
      </Routes>
    </div>
  );
};

export default App;

// Import npm react-router-dom: npm install react-router-dom