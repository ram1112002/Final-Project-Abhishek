import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faBuilding, faUser, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import './Menu.styles.scss';

function SideMenu() {
  return (
    <div className="side-menu">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/contractor">
              <FontAwesomeIcon icon={faTools} />
              <span>Contractor</span>
            </Link>
          </li>
          <li>
            <Link to="/architecture">
              <FontAwesomeIcon icon={faBuilding} />
              <span>Architecture</span>
            </Link>
          </li>
          <li>
            <Link to="/designer">
              <FontAwesomeIcon icon={faUser} />
              <span>Designer</span>
            </Link>
          </li>
          <li>
            <Link to="/materials">
              <FontAwesomeIcon icon={faBoxOpen} />
              <span>Materials</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
