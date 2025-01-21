import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Header from '../header/header';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/camera');
  };

  return (  
    <div className='home-wrapper'>
      <Header/>
      <div className="home-container">
        <div className='home-title-container'>
          <h2>AI-Powered Health Insights</h2>
        </div>
        <div className='home-text-container'>  
          <h5>Take a picture, get instant insights. Our AI-powered tool helps detect potential melanoma easily and quickly, early detection made simple!</h5>     
        </div>
        <div className='home-start-button'>
        <Button variant="secondary" className="center-button" onClick={handleButtonClick}>
           Start
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;



