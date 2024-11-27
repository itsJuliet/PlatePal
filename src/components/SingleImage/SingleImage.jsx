import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <div>
      <h1>Plating {plating.id}</h1>
      <img src={plating.image_url} alt={`Plating ${plating.id}`} />
      <div>
        <div>Ingredients: {plating.ingredients}</div>
        <div>Garnishes: {plating.garnishes}</div>
        <div>Sauces: {plating.sauces}</div>
        <div>Plate Style: {plating.plate_style}</div>
        <div>Plating Style: {plating.plating_style}</div>
      </div>
    </div>
  );
}

export default SingleImage;