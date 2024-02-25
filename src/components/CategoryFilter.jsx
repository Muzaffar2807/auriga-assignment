 
import React from "react";
import "./CategoryFilter.scss";

const CategoryFilter = ({ selectedCategory, setSelectedCategory, menu }) => {
  return (
    <div className="category-filter-container">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-filter"  
      >
        <option value="All">All Categories</option>
        {menu.map((category) => (
          <option key={category.category} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
