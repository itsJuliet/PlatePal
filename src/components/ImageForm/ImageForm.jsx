import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlating } from '../../api'; 

function ImageFormPage() {
  const [ingredients, setIngredients] = useState('');
  const [garnishes, setGarnishes] = useState('');
  const [sauces, setSauces] = useState('');
  const [plateStyle, setPlateStyle] = useState('');
  const [platingStyle, setPlatingStyle] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    return ingredients && garnishes && sauces && plateStyle && platingStyle;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;  

    const newPlating = {
      ingredients,
      garnishes,
      sauces,
      plate_style: plateStyle,
      plating_style: platingStyle,
    };

    setLoading(true);

    try {
      const plating = await createPlating(newPlating); 
      navigate(`/add/${plating.id}`);  
    } catch (err) {
      console.error('Error creating plating:', err);
    } finally {
      setLoading(false);
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
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ImageFormPage;