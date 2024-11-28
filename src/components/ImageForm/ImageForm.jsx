import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlating } from '../../api'; 
import './ImageForm.scss'

function ImageForm() {
    const [ingredients, setIngredients] = useState('');
    const [garnishes, setGarnishes] = useState('');
    const [sauces, setSauces] = useState('');
    const [plateStyle, setPlateStyle] = useState('');
    const [platingStyle, setPlatingStyle] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const validateField = (name, value) => {
      if (!value.trim()) {
        return `${name} is required`;
      }
      return '';
    };
  
    const validateForm = () => {
      const newErrors = {
        ingredients: validateField('Ingredients', ingredients),
        garnishes: validateField('Garnishes', garnishes),
        sauces: validateField('Sauces', sauces),
        plateStyle: validateField('Plate Style', plateStyle),
        platingStyle: validateField('Plating Style', platingStyle),
      };
  
      setErrors(newErrors);
  
      return Object.values(newErrors).every((error) => error === '');
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!validateForm()) {
        return;
      }
  
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
        console.log('Created Plating:', plating);
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
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>Ingredients</label>
            <input
              type="text"
              placeholder="Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && <p className="error">{errors.ingredients}</p>}
          </div>
  
          <div>
            <label>Garnishes</label>
            <input
              type="text"
              placeholder="Garnishes"
              value={garnishes}
              onChange={(e) => setGarnishes(e.target.value)}
            />
            {errors.garnishes && <p className="error">{errors.garnishes}</p>}
          </div>
  
          <div>
            <label>Sauces</label>
            <input
              type="text"
              placeholder="Sauces"
              value={sauces}
              onChange={(e) => setSauces(e.target.value)}
            />
            {errors.sauces && <p className="error">{errors.sauces}</p>}
          </div>
  
          <div>
            <label>Plate Style</label>
            <input
              type="text"
              placeholder="Plate Style"
              value={plateStyle}
              onChange={(e) => setPlateStyle(e.target.value)}
            />
            {errors.plateStyle && <p className="error">{errors.plateStyle}</p>}
          </div>
  
          <div>
            <label>Plating Style</label>
            <input
              type="text"
              placeholder="Plating Style"
              value={platingStyle}
              onChange={(e) => setPlatingStyle(e.target.value)}
            />
            {errors.platingStyle && (
              <p className="error">{errors.platingStyle}</p>
            )}
          </div>
  
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Submit'}
          </button>
        </form>
      </div>
    );
  }

export default ImageForm;