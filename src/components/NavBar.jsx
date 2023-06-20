import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`top`}>
      <ul className={`navbar ${isMenuOpen ? 'responsive' : ''}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/newsfeed">NEWS FEED</Link></li>
        <li><Link to="/updates">UPDATES</Link></li>
        <li><Link to="/job">JOB</Link></li>
        <li className="icon" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
