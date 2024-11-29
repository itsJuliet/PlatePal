import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlatingById } from '../../api'; 

function SingleImage() {
  const { id } = useParams();
  const [plating, setPlating] = useState(null);

  useEffect(() => {
    const getPlating = async () => {
      const data = await fetchPlatingById(id);
      setPlating(data);
    };
    getPlating();
  }, [id]);

  if (!plating) return <p>Loading...</p>;

  const imageUrl = plating.local_image_path 
      ? `${import.meta.env.VITE_API_URL}${plating.local_image_path.startsWith('/images/') 
          ? plating.local_image_path 
          : `/images${plating.local_image_path}`}` 
      : plating.image_url;  

  return (
    <div className="generated-image__section">
      <h1 className="generated-image__header">Plating Design for {plating.ingredients}</h1>
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
  <Link to="/gallery" className="generated-image__form-button">
            Back
          </Link>
    </div>
    </div>
      <img src={imageUrl} alt={`Plating ${plating.id}`} className="generated-image__image"/>
    </div>
    </div>
  );
}

export default SingleImage;