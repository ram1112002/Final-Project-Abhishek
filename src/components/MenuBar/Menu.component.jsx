import React, { useState } from 'react';
import './Menu.styles.scss';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <div className="dots" onClick={toggleMenu}>...</div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </ul>
    </div>
  );
};

export default Menu;
