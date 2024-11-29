import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPlatingById } from '../../api';
import axios from 'axios';
import './ImageGeneration.scss'

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

  const handleCreateAnotherPlateClick = (e) => {
    e.preventDefault();

    const confirmLeave = window.confirm(
      "Are you sure you want to create another plate? This will delete your current image."
    );

    if (confirmLeave) {
      navigate('/add');
    }
  };

  if (error) return <p className="error">{error}</p>;
  if (!plating) return <p>Loading...</p>;

  const imageUrl = plating.local_image_path
    ? `${import.meta.env.VITE_API_URL}${plating.local_image_path}`
    : plating.image_url;

  return (
    <div className="generated-image__section">
  <h1 className="generated-image__header">Your Custom Plating Design</h1>
  {error && <p className="error">{error}</p>}

  <div className="generated-image__content">
    <div className="generated-image__text">
    <p className="generated-image__label">
    Ingredients: <br></br>
    <span className="generated-image__value ingredients">{plating.ingredients}</span>
  </p>
  <p className="generated-image__label">
    Garnishes: <br></br>
    <span className="generated-image__value garnishes">{plating.garnishes}</span>
  </p>
  <p className="generated-image__label">
    Sauces: <br></br>
    <span className="generated-image__value sauces">{plating.sauces}</span>
  </p>
  <p className="generated-image__label">
    Plate Type: <br></br>
    <span className="generated-image__value plate-style">{plating.plate_style}</span>
  </p>
  <p className="generated-image__label">
    Plating Style: <br></br>
    <span className="generated-image__value plating-style">{plating.plating_style}</span>
  </p>
  <div className='generated-image__button-wrapper'>
  <button onClick={handleSaveToGallery} disabled={isSaving} className="generated-image__save-button">
    Save to Gallery
  </button>
  <Link 
      to="/add" 
      className="generated-image__form-button"
      onClick={handleCreateAnotherPlateClick} 
      >
      Create Another Plate
    </Link>
    </div>
    </div>
    
    <img src={imageUrl} alt="Generated Plating" className="generated-image__image" />
  
  </div>
</div>
  );
}

export default ImageGeneration;