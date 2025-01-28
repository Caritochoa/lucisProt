import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from './logo_lucis.png';

function Header() {
  
  return (
    <div className='header-container'>      
      <Link to ="/">
        <img
          src={logo} 
          alt="Logo"
          className="header-logo"
        />
      </Link>
    </div>
  );
}

export default Header;
