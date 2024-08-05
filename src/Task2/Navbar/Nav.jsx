// src/Navbar.js
import React from 'react';
import './Nav.css';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <ul className="navbar-links">
        <li><a href="#upload" onClick={() => setCurrentPage('Upload')}>Upload</a></li>
        <li><a href="#identify" onClick={() => setCurrentPage('Identify')}>Identify</a></li>
        <li><a href="#map" onClick={() => setCurrentPage('Map')}>Map</a></li>
        <li><a href="#import" onClick={() => setCurrentPage('Import')}>Import</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
