import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlating } from '../../api';

function ImageForm() {
  const [ingredients, setIngredients] = useState('');
  const [garnishes, setGarnishes] = useState('');
  const [sauces, setSauces] = useState('');
  const [plateStyle, setPlateStyle] = useState('');
  const [platingStyle, setPlatingStyle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlating = {
      ingredients,
      garnishes,
      sauces,
      plate_style: plateStyle,
      plating_style: platingStyle,
    };
    const plating = await createPlating(newPlating);
    if (plating) {
      navigate(`/gallery/${plating.id}`);
    }
  };

  return (
    <div>
      <h1>Create a Plate</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Garnishes"
          value={garnishes}
          onChange={(e) => setGarnishes(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sauces"
          value={sauces}
          onChange={(e) => setSauces(e.target.value)}
        />
        <input
          type="text"
          placeholder="Plate Style"
          value={plateStyle}
          onChange={(e) => setPlateStyle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Plating Style"
          value={platingStyle}
          onChange={(e) => setPlatingStyle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImageForm;