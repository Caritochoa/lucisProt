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
        <Button variant="secondary" className="center-button" onClick={handleButtonClick}>
           Start
        </Button>
      </div>
    </div>
  );
}

export default Home;



