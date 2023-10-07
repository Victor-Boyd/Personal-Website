// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'

import Navbar from './components/Navbar'

import './App.css'

function AppRoutes() {


  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes