// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
