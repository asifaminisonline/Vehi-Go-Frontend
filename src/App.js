// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from './components/CarsList';
import EachCar from './components/EachCar';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/api/v1/cars" element={<CarsList />} />
        <Route exact path="/api/v1/cars/:id" element={<EachCar />} />
      </Routes>
    </div>
  );
}

export default App;
