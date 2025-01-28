import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './results.css';
import Header from '../header/header';

function Results() {  
  return (    
      <div className='results-wrapper'>        
        <Header />
        <div className='results-text-container'>      
          <h1>Results</h1>
            <h4>Remember, this is not a diagnosis but an interpretation that can help you make a better and more informed decision. At this moment, we did not detect any signs of melanoma. We recommend repeating your interpretation in two months. 
            </h4>
        </div>        
      </div>   
  );
}

export default Results;

