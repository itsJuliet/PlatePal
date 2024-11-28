import React from 'react';

function ImageCard({ plating }) {
    const imageUrl = plating.local_image_path 
      ? `${import.meta.env.VITE_API_URL}${plating.local_image_path.startsWith('/images/') 
          ? plating.local_image_path 
          : `/images${plating.local_image_path}`}` 
      : plating.image_url;  
  
    return (
      <div className="image-card">
        <img src={imageUrl} alt={`Plating ${plating.id}`} />
      </div>
    );
  }

export default ImageCard;