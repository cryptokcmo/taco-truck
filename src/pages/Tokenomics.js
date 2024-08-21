import React from 'react';
import './Tokenomics.css';

function Tokenomics() {
  return (
    <div className="tokenomics-page">
      <h1 className="tokenomics-title">Taco-Truck Tokenomics</h1>
      
      <div className="tokenomics-content">
        <div className="tokenomics-box">
          <h2>Total Supply</h2>
          <p><span className="taco-icon">🌮</span>1 Billion Taco Token</p>
        </div>
        <div className="tokenomics-box">
          <h2>Transaction Tax</h2>
          <p><span className="taco-icon">🌮</span>1% for Project Funding</p>
        </div>
        <div className="tokenomics-box">
          <h2>Liquidity Lock</h2>
          <p><span className="taco-icon">🌮</span>1 Year Liquidity Lock</p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
