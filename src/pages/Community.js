import React from 'react';
import './Community.css';

function Community() {
  return (
    <div className="community-page">
      <h1 className="community-title">Join the Taco-Truck Community</h1>
      <div className="community-menu">
        <div className="community-item">
          <img src="/images/x-logo.png" alt="X.com" className="community-image" />
          <h2>Follow us on X</h2>
          <p>Stay updated with our latest tweets and announcements!</p>
          <button className="community-button" onClick={() => window.open('https://x.com', '_blank')}>Follow on X</button>
        </div>
        <div className="community-item">
          <img src="/images/discord-logo.png" alt="Discord" className="community-image" />
          <h2>Join our Discord</h2>
          <p>Chat with the community and get involved in discussions.</p>
          <button className="community-button" onClick={() => window.open('https://discord.com', '_blank')}>Join Discord</button>
        </div>
        <div className="community-item">
          <img src="/images/telegram-logo.png" alt="Telegram" className="community-image" />
          <h2>Join our Telegram</h2>
          <p>Get the latest updates and chat with us on Telegram.</p>
          <button className="community-button" onClick={() => window.open('https://telegram.org', '_blank')}>Join Telegram</button>
        </div>
      </div>
    </div>
  );
}

export default Community;
