import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './NotFoundPage.scss'

function NotFoundPage() {
    useEffect(() => {
        document.title = "Page Not Found - PlatePal";
      }, []);

  return (
    <>
    <div className='error404'>Oops! Error 404. Page not found.</div>
    <div className='error404__button-wrapper'>
        <Link to="/" className="error404__button">
            Home
        </Link>
    </div>
    </>
  )
}

export default NotFoundPage