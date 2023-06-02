import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
