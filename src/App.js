// src/App.js
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";import './App.css';
import HomePage from './pages/HomePage/HomePage.component'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
