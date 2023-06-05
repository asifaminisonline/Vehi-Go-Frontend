import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NewCar from './pages/NewCar';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/new_car" element={<NewCar />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
