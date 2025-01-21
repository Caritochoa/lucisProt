import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './results.css';
import Header from '../header/header';



function Results() {
  
  return (
    
      <div className='results-wrapper'>
        
        <Header />
        <div className='results-container'>      
          <h1>Results</h1>
          <p>Remember this is not a diagnostic, is an interpretation, but can help you take a better and informed desicion.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
      </div>
   
  );
}

export default Results;

