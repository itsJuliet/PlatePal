import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchPlatingById } from '../../api'; 

function ImageGeneration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plating, setPlating] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlating = async () => {
      try {
        const data = await fetchPlatingById(id); 
        setPlating(data);
      } catch (err) {
        setError('Failed to load generated image');
        console.error(err);
      }
    };
    getPlating();
  }, [id]);

  const handleSaveToGallery = async () => {
    if (!plating || !plating.image_url) {
      setError('No image generated to save');
      return;
    }

    try {
        const response = await axios.post('http://localhost:8080/api/platings/save-image', 
            {
              image_url: plating.image_url
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );

      if (response.status === 200) {
        alert('Image saved to gallery!');
        navigate(`/gallery`);
      }
    } catch (err) {
    console.error('Save to gallery error:', err.response ? err.response.data : err);
      setError('Failed to save image');
    }
  };

  if (!plating) return <p>Loading...</p>;

  return (
    <div>
      <h1>Generated Plate</h1>
      {error && <p className="error">{error}</p>}
      <img src={plating.image_url} alt={`Generated Plating`} />
      <div>Ingredients: {plating.ingredients}</div>
      <div>Garnishes: {plating.garnishes}</div>
      <div>Sauces: {plating.sauces}</div>
      <div>Plate Style: {plating.plate_style}</div>
      <div>Plating Style: {plating.plating_style}</div>
      
      <button onClick={handleSaveToGallery}>Save to Gallery</button>
    </div>
  );
}

export default ImageGeneration;