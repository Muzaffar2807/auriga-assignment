import React from 'react';
import "./CategoryFilter.scss"

const CategoryFilter = ({ selectedCategory, setSelectedCategory, menu}) => {
  return (
    <div> 
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ color: "#000" }}
      >
        <option value="All" style={{ color: "#000" }}>
          All Categories
        </option>
        {menu.map((category) => (
          <option
            style={{ color: "#000" }}
            key={category.category}
            value={category.category}
          >
            {category.category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter