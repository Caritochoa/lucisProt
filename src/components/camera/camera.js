import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './camera.css';

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);     

      // Create an Image object to load the captured data URL
      const img = new Image();//this is the image I must send with post to the backend server.
      img.onload = () => {
        // Once the image is loaded, you can access its properties
        const imgUrl = image        
        console.log('Image Format:', imageSrc.substring(5, imageSrc.indexOf(';'))); // Extract the format from the Data URL
      };
      img.src = imageSrc;
    } else {
      console.error('Webcam reference is not available');
    }
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
          <p>Inf de la foto</p>
        </div>
      )}
    </div>
  );
}

export default Camera;
