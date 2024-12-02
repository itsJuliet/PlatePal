import React, { useEffect } from "react";
import SingleImage from '../../components/SingleImage/SingleImage'

function SingleImagePage() {
  useEffect(() => {
    document.title = "Plating Design - PlatePal";
  }, []);

  return (
    <div><SingleImage/></div>
  )
}

export default SingleImagePage