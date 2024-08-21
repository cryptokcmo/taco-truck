import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/Taco-Truck.png" alt="Taco Truck" className="hero-logo" />
        <h1 className="hero-title">Welcome to Taco-Truck</h1>
        <div className="hero-underline"></div> {/* Line added below the title */}
      </div>

      <div className="stats-section">
        <div className="stat">
          <span className="taco-icon">🌮</span>
          <h2>$TACOS</h2>
          <p>Current Price: $0.00</p>
        </div>
        <div className="stat">
          <span className="taco-icon">🌮</span>
          <h2>Liquidity</h2>
          <p>$0.00</p>
        </div>
        <div className="stat">
          <span className="taco-icon">🌮</span>
          <h2>Volume</h2>
          <p>$0.00</p>
        </div>
        <div className="stat">
          <span className="taco-icon">🌮</span>
          <h2>Market Cap</h2>
          <p>$0.00</p>
        </div>
      </div>

      <div className="links-section">
        <a href="/buy" className="link-button">Buy Tacos</a>
        <a href="/stake" className="link-button">Stake Tacos</a>
      </div>
    </div>
  );
}

export default Home;
