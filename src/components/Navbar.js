import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../Style/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">YC</div>

      <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="skills" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="work" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
          Work
        </Link>
        <Link to="contact" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>

      <div className={`hamburger-icon ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;