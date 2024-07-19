import React from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';
import '../Style/Navbar.css'; // ייבוא קובץ ה-CSS

function Navbar() {
  React.useEffect(() => {
    gsap.from('.nav-link', { duration: 1, opacity: 0, y: -50, stagger: 0.3 });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-title">Full stack</div>
      <Link to="home" smooth={true} duration={1000} className="nav-link">
        <FaHome className="nav-icon" /> Start
      </Link>
      <Link to="skills" smooth={true} duration={1000} className="nav-link">
        <FaProjectDiagram className="nav-icon" /> Skills
      </Link>
      <Link to="work" smooth={true} duration={1000} className="nav-link">
        <FaUser className="nav-icon" /> Work
      </Link>
      <Link to="contact" smooth={true} duration={1000} className="nav-link">
        <FaEnvelope className="nav-icon" /> Contact
      </Link>
    </nav>
  );
}

export default Navbar;
