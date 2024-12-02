import React, { useEffect } from "react";
import ImageGeneration from '../../components/ImageGeneration/ImageGeneration'

function ImageGeneratedPage() {
  useEffect(() => {
    document.title = "Your Plating Design - PlatePal";
  }, []);

  return (
    <div><ImageGeneration/></div>
  )
}

export default ImageGeneratedPage