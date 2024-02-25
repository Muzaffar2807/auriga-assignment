import React from 'react';
import "./FilterByPrice.scss"

const FilterByPrice = ({ sortBy, setSortBy }) => {
  return (
    <div> 
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ color: "#000" }}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default FilterByPrice