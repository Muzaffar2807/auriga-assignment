 
import React from "react";
import "./FilterByPrice.scss";

const FilterByPrice = ({ sortBy, setSortBy }) => {
  return (
    <div className="filter-by-price-container">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="filter-by-price"  
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default FilterByPrice;
