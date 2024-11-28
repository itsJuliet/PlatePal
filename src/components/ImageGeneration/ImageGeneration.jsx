import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchPlatingById } from '../../api';

function ImageGeneration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plating, setPlating] = useState(null);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!id) {
      setError('No ID provided in the URL');
      return;
    }

    const getPlating = async () => {
      try {
        const data = await fetchPlatingById(id);
        setPlating(data);
      } catch (err) {
        setError('Failed to load generated image');
        console.error('Error fetching plating by ID:', err);
      }
    };

    getPlating();
  }, [id]);

  const handleSaveToGallery = async () => {
    if (!plating || !plating.image_url) {
      setError('No image generated to save');
      return;
    }

    if (isSaving) return;

    setIsSaving(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/platings/save-image`,
        {
          image_url: plating.image_url, 
          ingredients: plating.ingredients,
          garnishes: plating.garnishes,
          sauces: plating.sauces,
          plate_style: plating.plate_style,
          plating_style: plating.plating_style,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        alert('Image saved to gallery!');
        navigate('/gallery', { state: { refresh: true } });
      }
    } catch (err) {
      console.error('Save to gallery error:', err.response?.data || err);
      setError('Failed to save image: ' + (err.response?.data?.error || err.message));
    } finally {
      setIsSaving(false); 
    }
  };

  if (error) return <p className="error">{error}</p>;
  if (!plating) return <p>Loading...</p>;

  const imageUrl = plating.local_image_path
    ? `${import.meta.env.VITE_API_URL}${plating.local_image_path}`
    : plating.image_url;

  return (
    <div>
      <h1>Generated Plate</h1>
      {error && <p className="error">{error}</p>}
      <img src={imageUrl} alt="Generated Plating" />
      <div>Ingredients: {plating.ingredients}</div>
      <div>Garnishes: {plating.garnishes}</div>
      <div>Sauces: {plating.sauces}</div>
      <div>Plate Style: {plating.plate_style}</div>
      <div>Plating Style: {plating.plating_style}</div>
      <button onClick={handleSaveToGallery} disabled={isSaving}>Save to Gallery</button>
    </div>
  );
}

export default ImageGeneration;