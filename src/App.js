import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CarsList from './pages/Home';
import CarDetails from './components/EachCar';
import DeleteCar from './pages/DeleteCar';
import Favorite from './pages/Favorite';
import NewCar from './pages/NewCar';
import Navbar from './components/Navigation/Navbar';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/cars/new" element={<NewCar />} />
        <Route path="/delete" element={<DeleteCar />} />
        <Route path="/favorite/" element={<Favorite />} />

      </Routes>
    </div>
  );
}

export default App;
