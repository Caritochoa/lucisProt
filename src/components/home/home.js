import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/camera');
  };

  return (
    <div className="home-container">
      <Button className="center-button" onClick={handleButtonClick}>
        Go to Camera
      </Button>
    </div>
  );
}

export default Home;



