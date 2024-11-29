import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createPlating } from '../../api'; 
import errorIcon from '../../assets/icons/erroricon.svg'
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
        return `This field is required. Input "none" if not available.`;
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
      <div className='form__container'>
        <h1 className='form__header'>Create a Plate</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className='form__input-container'>
            <label className='form__label'>Ingredients</label>
            <textarea
              rows="5"
              placeholder="Grilled Chicken, Jasmine Rice, Steamed Broccoli"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`form__textarea ${errors.ingredients ? 'form__error-border' : ''}`}
            />
            {errors.ingredients && <p className="form__error">
              <img
            src={errorIcon}
            alt="Error Icon"
            className="form__error-icon"
            />
              {errors.ingredients}</p>}
          </div>
  
          <div className='form__input-container'>
            <label className='form__label'>Garnishes</label>
            <input
              type="text"
              placeholder="Parsley, Lemon Zest, Lemons"
              value={garnishes}
              onChange={(e) => setGarnishes(e.target.value)}
              className={`form__input ${errors.garnishes ? 'form__error-border' : ''}`}
            />
            {errors.garnishes && <p className="form__error">
              <img
            src={errorIcon}
            alt="Error Icon"
            className="form__error-icon"
            />
              {errors.garnishes}</p>}
          </div>
  
          <div className='form__input-container'>
            <label className='form__label'>Sauces</label>
            <input
              type="text"
              placeholder="Honey Vinaigrette, Chicken Gravy, Soy Sauce"
              value={sauces}
              onChange={(e) => setSauces(e.target.value)}
              className={`form__input ${errors.garnishes ? 'form__error-border' : ''}`}
            />
            {errors.sauces && <p className="form__error">
              <img
            src={errorIcon}
            alt="Error Icon"
            className="form__error-icon"
            />
              {errors.sauces}</p>}
          </div>
  
          <div className='form__input-container'>
            <label className='form__label'>Plate Type</label>
            <input
              type="text"
              placeholder="White Round Ceramic Plate"
              value={plateStyle}
              onChange={(e) => setPlateStyle(e.target.value)}
              className={`form__input ${errors.garnishes ? 'form__error-border' : ''}`}
            />
            {errors.plateStyle && <p className="form__error">
              <img
            src={errorIcon}
            alt="Error Icon"
            className="form__error-icon"
            />
              {errors.plateStyle}</p>}
          </div>
  
          <div className='form__input-container'>
            <label className='form__label'>Plating Style</label>
            <input
              type="text"
              placeholder="Modern, Rustic, Minimalist, Fancy, Simple"
              value={platingStyle}
              onChange={(e) => setPlatingStyle(e.target.value)}
              className={`form__input ${errors.garnishes ? 'form__error-border' : ''}`}
            />
            {errors.platingStyle && (
              <p className="form__error">
                <img
            src={errorIcon}
            alt="Error Icon"
            className="form__error-icon"
            />
                {errors.platingStyle}</p>
            )}
          </div>

          <div className='form__buttons'>
          <Link to="/" className="form__cancel">
            Cancel
          </Link>
          <button type="submit" disabled={loading} className='form__submit'>
            {loading ? 'Creating...' : 'Submit'}
          </button>
          </div>
        </form>
      </div>
    );
  }

export default ImageForm;