// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarsList from './pages/CarsList';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CarsList />} />
      </Routes>
    </div>
  );
}

export default App;
