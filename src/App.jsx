import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ImageFormPage from './pages/ImageFormPage/ImageFormPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import SingleImagePage from './pages/SingleImagePage/SingleImagePage';
import Header from './components/Header/Header';
import ImageGeneratedPage from './pages/ImageGeneratedPage/ImageGeneratedPage';
import './App.scss'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ImageFormPage />} />
        <Route path="/add/:id" element={<ImageGeneratedPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<SingleImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;