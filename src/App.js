import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CarsList from './components/CarsList';
import CarDetails from './components/EachCar';
import DeleteCar from './pages/DeleteCar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/car" element={<CarDetails />} />
        <Route path="/delete" element={<DeleteCar />} />
      </Routes>
    </div>
  );
}

export default App;
