import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <a href="/">
            <img src="/Taco-Truck.png" alt="Taco Truck" height="32" style={{ marginTop: '-4px' }} />
            <span className="logo-text">
              <span>Taco-Truck</span>
            </span>
          </a>
        </div>
        <nav className="nav-links">
          <Link to="/home" className="nav-link active">Home</Link>
          <Link to="/buy" className="nav-link">Buy</Link>
          <Link to="/stake" className="nav-link">Stake</Link>
          <Link to="/aboutus" className="nav-link">About</Link>
          <Link to="/community" className="nav-link">Community</Link>
          <Link to="/roadmap" className="nav-link">Roadmap</Link>
          <Link to="/tokenomics" className="nav-link">Tokenomics</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
