import React from 'react';

function ImageCard({ plating }) {
  return (
    <div className="image-card">
      <img src={plating.image_url} alt={`Plating ${plating.id}`} />
      <h3>Plating {plating.id}</h3>
    </div>
  );
}

export default ImageCard;