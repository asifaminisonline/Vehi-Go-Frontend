import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CarsList from './pages/Home';
import CarDetails from './components/EachCar';
import NewCar from './pages/NewCar';
import Favorite from './pages/Favorite';
import DeleteCar from './pages/DeleteCar';
import Navbar from './components/Navigation/Navbar';
import FixedNavbar from './components/Navigation/FixedNavbar';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="fixed-navbar-container">
        <FixedNavbar className="Fixed-navbar" />
      </div>
      <Navbar />
      <div className="content-container">
        <Toaster />
        <Routes>
          <Route path="/register" element={<Register className="The-body" />} />
          <Route path="/" element={<Login className="The-body" />} />
          <Route path="/cars" element={<CarsList className="The-body" />} />
          <Route path="/cars/:id" element={<CarDetails className="The-body" />} />
          <Route path="/cars/new" element={<NewCar className="The-body" />} />
          <Route path="/delete" element={<DeleteCar className="The-body" />} />
          <Route path="/favorite/" element={<Favorite className="The-body" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
