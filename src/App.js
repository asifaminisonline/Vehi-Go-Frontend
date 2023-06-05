import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
