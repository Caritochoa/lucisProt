import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from './logo_lucis.png';

function Header() {
  
  return (
    <div className='header-container'>      
      <img
        src={logo} 
        alt="Logo"
        className="header-logo"
      />
    </div>
  );
}

export default Header;
