
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarsList from './components/CarsList';
import CarDetails from './components/EachCar';
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/v1/cars" element={<CarsList />} />
        <Route path="/api/v1/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
