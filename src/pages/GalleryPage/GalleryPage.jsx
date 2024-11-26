import React, { useState, useEffect } from 'react';
import { fetchPlatings } from '../../api';
import { Link } from 'react-router-dom';
import ImageCard from '../../components/ImageCard/ImageCard';

function GalleryPage() {
  const [platings, setPlatings] = useState([]);

  useEffect(() => {
    const getPlatings = async () => {
      const data = await fetchPlatings();
      setPlatings(data);
    };
    getPlatings();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery-container">
        {platings.map(plating => (
          <Link to={`/gallery/${plating.id}`} key={plating.id}>
            <ImageCard plating={plating} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;