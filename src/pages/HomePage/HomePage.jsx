import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to PlatePal!</h1>
      <Link to="/gallery">Go to Gallery</Link> <br />
      <Link to="/add">Create Plate</Link>
    </div>
  );
}

export default HomePage;