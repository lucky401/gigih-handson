import React from 'react';

import './styles.css';

function SearchBar({ onSearchChange }) {
  return (
    <div className="search-bar">
      <form className="form d-flex align-center">
        <input type="text" onChange={onSearchChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
