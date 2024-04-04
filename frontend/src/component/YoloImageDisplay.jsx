import React, { useEffect, useState } from "react";
import "./YoloImageDisplay.css";

const YoloImageDisplay = (props) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSrc1, setImageSrc1] = useState("/Images/loading.jpg");
  const [imageSrc2, setImageSrc2] = useState(null);

  useEffect(() => {
    // Delay for 1000 milliseconds (1 second)
    const delay = 15000;
    setImageSrc(null);
    setImageSrc1("/Images/loading.jpg");
    setImageSrc2(null);

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

  <p>yolo image</p>;
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        {imageSrc && (
          <div className="col-lg-8 border mt-2 p-3 bg-white">
            <div className="d-flex flex-column text-center">
              <img src={imageSrc}  className="img-fluid" />
              <h5 className="mt-2">YoloV3</h5>
            </div>
          </div>
        )}

        <div className="col-lg-8 border mt-2 p-3 bg-white">
          <div className="d-flex flex-column text-center">
            {imageSrc1 && (
              <span>
                <img src={imageSrc1}  className="img-fluid" />
              </span>
            )}
            {imageSrc && <h5 className="mt-2">YoloV5</h5>}
          </div>
        </div>

        {imageSrc2 && (
          <div className="col-lg-8 border mt-5 p-3 bg-white">
            <div className="d-flex flex-column text-center">
              <img src={imageSrc2}  className="img-fluid" />
              <h5 className="mt-2">YoloV7</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoloImageDisplay;
