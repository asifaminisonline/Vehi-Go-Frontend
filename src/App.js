// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarsList from './components/CarsList';
import CarDetails from './components/EachCar';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/v1/cars" element={<CarsList />} />
        <Route path="/api/v1/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
