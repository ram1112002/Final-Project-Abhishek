import React from 'react';
import './Search.styles.scss';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-bar-input" placeholder="Search..." />
      <button className="search-bar-button">Search</button>
    </div>
  );
};

export default SearchBar;
