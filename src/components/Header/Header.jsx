import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 
import PlatePalLogo from '../../assets/logos/platepallogo.png'

function Header() {
  return (
    <header className="header">
      <nav>
      <div className="header__logo">
          <Link to="/">
            <img src={PlatePalLogo} alt="PlatePal Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/add">Create Plate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;