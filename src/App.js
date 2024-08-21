import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Stake from './pages/Stake';
import AboutUs from './pages/AboutUs';
import Community from './pages/Community';
import Roadmap from './pages/Roadmap';
import Tokenomics from './pages/Tokenomics';
import Header from './components/Header';

function App() {
  const rainTacos = () => {
    const tacoRainContainer = document.createElement('div');
    tacoRainContainer.className = 'taco-rain';
    
    for (let i = 0; i < 50; i++) {
      const taco = document.createElement('img');
      taco.src = '/taco.png'; // Path to your taco image
      taco.className = 'taco';
      taco.style.left = `${Math.random() * 100}vw`;
      taco.style.animationDelay = `${Math.random() * 2}s`;
      tacoRainContainer.appendChild(taco);
    }
    
    document.body.appendChild(tacoRainContainer);

    setTimeout(() => {
      document.body.removeChild(tacoRainContainer);
    }, 5000); // Remove after 5 seconds
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="landing-page">
              <img src="/Taco-Truck.png" alt="Taco Truck" className="taco-truck-image" />
              <h1 className="app-title">WANNA STUFF TACO'S?</h1>
              <button 
                className="open-app-button" 
                onClick={() => {
                  rainTacos();
                  setTimeout(() => {
                    window.location.href = '/home';
                  }, 5000);
                }}
              >
                Open Taco-Truck
              </button>
            </div>
          }/>
          <Route path="/home" element={<><Header /><Home /></>} />
          <Route path="/buy" element={<><Header /><Buy /></>} />
          <Route path="/stake" element={<><Header /><Stake /></>} />
          <Route path="/aboutus" element={<><Header /><AboutUs /></>} />
          <Route path="/community" element={<><Header /><Community /></>} />
          <Route path="/roadmap" element={<><Header /><Roadmap /></>} />
          <Route path="/tokenomics" element={<><Header /><Tokenomics /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
