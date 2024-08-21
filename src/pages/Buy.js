import React from 'react';
import './Buy.css';

function Buy() {
  return (
    <div className="buy-page">
      <h1 className="buy-title">Taco-Truck Menu</h1>
      <div className="taco-menu">
        <div className="taco-item">
          <span className="taco-icon">🌮</span>
          <h2>Jupiter</h2>
          <p>A Unique themed exchange aiming to make some $Tacos!</p>
          <button className="buy-button" onClick={() => window.open('https://jup.ag/', '_blank')}>Buy on Jupiter</button>
        </div>
        <div className="taco-item">
          <span className="taco-icon">🌮</span>
          <h2>Raydium</h2>
          <p>$Tacos Fresh off the Taco-Truck! Careful, they're HOT!</p>
          <button className="buy-button" onClick={() => window.open('https://raydium.io/', '_blank')}>Buy on Raydium</button>
        </div>
        <div className="taco-item coming-soon">
          <span className="taco-icon">🌮</span>
          <h2>Taco-Truck Swap</h2>
          <p>All the $Tacos goodness, on Taco-Truck Swap. <strong>Coming Soon!</strong></p>
          <button className="buy-button disabled" disabled>Coming Soon</button>
        </div>
        <div className="taco-item coming-soon">
          <span className="taco-icon">🌮</span>
          <h2>Add Liquidity</h2>
          <p>Join the pool and earn rewards. <strong>Coming Soon!</strong></p>
          <button className="buy-button disabled" disabled>Coming Soon</button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
