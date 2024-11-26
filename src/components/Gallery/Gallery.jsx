import React, { useEffect, useState } from 'react';
import { fetchPlatings } from '../../api';

function Gallery() {
  const [platings, setPlatings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlatings = async () => {
      try {
        const data = await fetchPlatings();
        setPlatings(data.platings); 
      } catch (err) {
        setError(err.message);
      }
    };

    getPlatings();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Gallery</h1>
      {platings.map((plating) => (
        <div key={plating.id}>
          <img src={plating.image_url} alt={`Plating ${plating.id}`} />
          <p>{plating.ingredients}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

