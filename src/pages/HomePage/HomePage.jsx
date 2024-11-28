import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './HomePage.scss'
import ArrowIcon from '../../assets/icons/right-arrow.svg'

function HomePage() {
    useEffect(() => {
        document.title = "PlatePal";
      }, []);

  return (
    <div className='homepage'>
        <div className='homepage__container'>
            <h1 className='homepage__header'>Your Personalized Plating Designer, Powered by AI</h1>
            <p className='homepage__subtext'>Elevate your meals with stunning, custom AI-generated plating designs—making every dish look just as amazing as it tastes.</p>
            <div className='homepage_button'>
            <Link to="/add" className='homepage__link'>Create plate design now
            <img
                src={ArrowIcon}
                alt="Arrow Icon"
                className="homepage__link-icon"
              />
            </Link>
            </div>
        </div>
    </div>
  );
}

export default HomePage;