import React from 'react';
import './Roadmap.css';

function Roadmap() {
  return (
    <div className="roadmap-page">
      <h1 className="roadmap-title">Taco-Truck Roadmap</h1>
      <div className="roadmap-timeline">
        <div className="roadmap-item">
          <h2>Q1: Foundation</h2>
          <p>- Launch Taco Token</p>
          <p>- Build Community on X.com, Discord, and Telegram</p>
          <p>- Initial Marketing Campaign</p>
        </div>
        <div className="roadmap-item">
          <h2>Q2: Expansion</h2>
          <p>- Launch Taco-Truck Staking Platform</p>
          <p>- Launch StakeTaco Token</p>
          <p>- Partnerships with Key DeFi Projects</p>
          <p>- Major Marketing Push</p>
        </div>
        <div className="roadmap-item">
          <h2>Q3: Ecosystem Development</h2>
          <p>- Launch Taco-Truck DeFi App</p>
          <p>- Community Voting and Governance</p>
          <p>- Expand Community Events</p>
        </div>
        <div className="roadmap-item">
          <h2>Q4: Global Reach</h2>
          <p>- Integrate with Global Exchanges</p>
          <p>- Large-Scale Marketing and PR Campaigns</p>
          <p>- Continue Ecosystem Development</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
