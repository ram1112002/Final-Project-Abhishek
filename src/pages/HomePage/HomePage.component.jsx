import React from 'react';
import SearchBar from '../../components/SearchBar/Search.component';
import Menu from '../../components/MenuBar/Menu.component';
import './HomePage.styles.scss';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1 className="home-page-title">Home Page</h1>
      <SearchBar className="search-bar" />
    </div>
  );
};

export default HomePage;
