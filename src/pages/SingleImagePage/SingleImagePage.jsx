import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlatingById } from '../../api';

function SingleImagePage() {
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
        <p><strong>Ingredients:</strong> {plating.ingredients}</p>
        <p><strong>Garnishes:</strong> {plating.garnishes}</p>
        <p><strong>Sauces:</strong> {plating.sauces}</p>
        <p><strong>Plate Style:</strong> {plating.plate_style}</p>
        <p><strong>Plating Style:</strong> {plating.plating_style}</p>
      </div>
    </div>
  );
}

export default SingleImagePage;