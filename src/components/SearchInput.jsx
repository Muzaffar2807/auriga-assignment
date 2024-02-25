import React from 'react';
import "./SearchInput.scss"

const SearchInput = ({ searchQuery, setSearchQuery}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for any food item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ color: "#000" }}
      />
    </div>
  );
}

export default SearchInput