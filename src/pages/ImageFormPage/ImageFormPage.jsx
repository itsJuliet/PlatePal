import React, { useEffect } from "react";
import ImageForm from '../../components/ImageForm/ImageForm'
import logo from '../../assets/logos/platepallogo.png'
import './ImageFormPage.scss'

function ImageFormPage() {
  useEffect(() => {
    document.title = "Create Plate - PlatePal";
  }, []);

  return (
    <><div><ImageForm /></div>
    <div><img src={logo} alt="plate pal logo" className="logo"/></div>
    </>
  )
}

export default ImageFormPage