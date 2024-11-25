import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ImageFormPage from './pages/ImageFormPage/ImageFormPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import SingleImagePage from './pages/SingleImagePage/SingleImagePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imageform" element={<ImageFormPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<SingleImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;