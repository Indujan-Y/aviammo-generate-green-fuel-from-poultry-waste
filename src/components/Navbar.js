import React from 'react';
import './styles/Navbar.css';
import profileImage from '../assets/profile-image.jpg';

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <h1 className="title">AviAmmo</h1>
      <div className="profile-segment">
        <a>
          <h2>Profile</h2>
        </a>
        <img src={profileImage} alt="profile" />
      </div>
    </header>
  );
}

export default Navbar;
