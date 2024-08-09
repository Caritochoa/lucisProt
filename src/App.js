import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Camera from './components/camera/camera';
import Results from './components/results/results';

function App() {
  return (    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  
  );
}

export default App;
