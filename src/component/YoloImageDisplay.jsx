import React, { useEffect, useState } from "react";

const YoloImageDisplay = (props) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSrc1, setImageSrc1] = useState("/Images/loading.jpg");
  const [imageSrc2, setImageSrc2] = useState(null);

  useEffect(() => {
    // Delay for 1000 milliseconds (1 second)
    const delay = 9000;

    const timeoutId = setTimeout(() => {
      // Build the image source with the delayed fileName
      const delayedImageSrc = `/Images/YOLO3-${props.fileName}.jpg`;
      const delayedImageSrc1 = `/Images/YOLO5-${props.fileName}.jpg`;
      const delayedImageSrc2 = `/Images/YOLO8-${props.fileName}.jpg`;

      // Set the image source in the state
      setImageSrc(delayedImageSrc);
      setImageSrc1(delayedImageSrc1);
      setImageSrc2(delayedImageSrc2);
    }, delay);

    // Cleanup the timeout when the component unmounts or when props.fileName changes
    return () => clearTimeout(timeoutId);
  }, [props.fileName]);

  return (
    <div>
      <p>yolo image</p>
      {imageSrc && <span><img src={imageSrc} alt="img1" />
      <span>YoloV3</span></span>}
      {imageSrc1 && <img src={imageSrc1} alt="img1" />}
      {imageSrc2 && <span>YoloV5</span>}
      {imageSrc2 && <span><img src={imageSrc2} alt="img1" />
      <span>YoloV7</span></span>}
    </div>
  );
};

export default YoloImageDisplay;
