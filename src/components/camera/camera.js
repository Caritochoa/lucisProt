import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './camera.css';

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log('Captured image URL:', imageSrc); // Log the image URL
  }, [webcamRef]);

  return (
    <div className="camera-container">
      <h1>Camera Component</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <Button className="capture-button" onClick={capture}>
        Capture Photo
      </Button>
      {image && (
        <div className="image-preview">
          <h2>Captured Photo:</h2>
          <img src={image} alt="Captured" />
        </div>
      )}
    </div>
  );
}

export default Camera;
