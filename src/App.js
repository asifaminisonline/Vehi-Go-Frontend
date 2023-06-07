import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CarsList from './pages/Home';
import CarDetails from './components/EachCar';
import NewCar from './pages/NewCar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/v1/cars" element={<CarsList />} />
        <Route path="/api/v1/cars/:id" element={<CarDetails />} />
        <Route path="/api/v1/cars/new" element={<NewCar />} />
      </Routes>
    </div>
  );
}

export default App;
