// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardPage from './pages/DashboardPage';
import UploadDataPage from './pages/UploadDataPage';
import DataRepositoryPage from './pages/DataRepositoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadDataPage />} />
        <Route path="/repository" element={<DataRepositoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;