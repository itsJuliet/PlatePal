import React from 'react';
import './ImageCard.scss'

function ImageCard({ plating }) {
    const imageUrl = plating.local_image_path 
      ? `${import.meta.env.VITE_API_URL}${plating.local_image_path.startsWith('/images/') 
          ? plating.local_image_path 
          : `/images${plating.local_image_path}`}` 
      : plating.image_url;  
  
      return (
        <div className="image-card">
          <div className="image-card__image-container">
            <img src={imageUrl} alt={`Plating ${plating.id}`} className='image-card__image'/>
          </div>
        </div>
      );
    }
    
    export default ImageCard;