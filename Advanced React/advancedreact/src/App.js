import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import List from './List';
import ListFilter from './ListFilter';
import Keys from './Keys';
import ControlledInputs from './ConrolledInputs';
import RegistrationForm from './RegistrationForm';
import ContextAPI from './ContextAPI';


function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/list" className='nav-item'>List</Link>
        <Link to="/list-filter" className='nav-item'>List Filter</Link>
        <Link to="/keys" className='nav-item'>Keys</Link>
        <Link to="/controlled-inputs" className='nav-item'>Controlled Inputs</Link>
        <Link to="/registration-form" className='nav-item'>Registration Form</Link>
        <Link to="/context-api" className='nav-item'>Context API</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/list-filter" element={<ListFilter />}></Route>
        <Route path="/keys" element={<Keys />}></Route>
        <Route path="/controlled-inputs" element={<ControlledInputs />}></Route>
        <Route path="/registration-form" element={<RegistrationForm />}></Route>
        <Route path="/context-api" element={<ContextAPI />}></Route>
      </Routes>
    </div>
  );
};

export default App;

// Import npm react-router-dom: npm install react-router-dom