import React from 'react';
import './FirstFooter.css'

const FirstFooter = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Got ideas? We've got skills.</h1>
        <p className="subtitle">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="buttons">
          <button className="btn btn-secondary">View demo</button>
          <button className="btn btn-primary">Get started</button>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2077 Untitled AI. All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </footer>
    </div>
  );
};

export default FirstFooter;