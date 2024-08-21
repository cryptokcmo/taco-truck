import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/buy">Buy</Link>
      <Link to="/stake">Stake</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/community">Community</Link>
      <Link to="/roadmap">Roadmap</Link>
      <Link to="/tokenomics">Tokenomics</Link>
    </nav>
  );
}

export default NavBar;
