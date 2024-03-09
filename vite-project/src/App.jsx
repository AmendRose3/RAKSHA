import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Login from './components/LoginSignup/Login';
import HomePage from './components/LoginSignup/HomePage';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes> 
          <Route index element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="*" element={<Default />} /> Define default route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
