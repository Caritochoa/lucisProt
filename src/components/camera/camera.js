import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';
import { handlerSendRequest, sendImageToBackend } from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './camera.css';
import Header from '../header/header';


function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);     
      
      const img = new Image();//img en base 64.
      img.onload = () => {        
        console.log("*******************img*****************", img);              
        sendImageToBackend(img);
      };
      img.src = imageSrc;
      console.log("imgSrc", imageSrc);
    } else {
      console.error('Webcam reference is not available');
    }
  }, [webcamRef]);

  const takeFotohandleClick = () => {
    capture(); 
    handlerSendRequest();    
  };

  const goToResultsHandleClick = () => {
    navigate('/results'); //to navigate to results component.
  };
 
  return (
    <div className='camera-wrapper'>
      <Header />
      <div className="camera-container">
        
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
        <Button  variant="secondary" className="capture-button" onClick={takeFotohandleClick}>
          Capture Photo
        </Button>
            {image && (
              <div className="image-preview">
                <h2>Captured Photo:</h2>
                <img src={image} alt="Captured" />              
              </div>
            )}            

        <Button variant="secondary" className="results-button" onClick={goToResultsHandleClick}>
          See my results
        </Button>    
      </div>
    </div>
  );
}

export default Camera;
