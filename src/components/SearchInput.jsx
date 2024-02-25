 

import React from "react";
import "./SearchInput.scss";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for any food item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ color: "#000" }}
        className="search-input"
      />
      <FaSearch className="search-icon" color="#000" />
    </div>
  );
};

export default SearchInput;
