import React, { useEffect } from "react";
import ImageForm from '../../components/ImageForm/ImageForm'

function ImageFormPage() {
  useEffect(() => {
    document.title = "Create Plate - PlatePal";
  }, []);

  return (
    <div><ImageForm/></div>
  )
}

export default ImageFormPage