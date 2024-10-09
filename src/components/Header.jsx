import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Kol Wangchuk</h1>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;