import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 
import PlatePalLogo from '../../assets/logos/platepal-logo.png'

function Header() {
  return (
    <header className="header">
      <nav className='header__nav'>
      <div className="header__logo">
          <Link to="/" className='header__logo-link'>
            <img src={PlatePalLogo} alt="PlatePal Logo" className='header__image'/>
          </Link>
        </div>
        <ul className='header__links'>
          <li className='header__item'>
            <Link to="/" className='header__link'>Home</Link>
          </li>
          <li className='header__item'>
            <Link to="/gallery" className='header__link'>Gallery</Link>
          </li>
          <li className='header__item'>
            <Link to="/add" className='header__link'>Create Plate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;