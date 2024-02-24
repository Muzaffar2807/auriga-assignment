import React, { useState } from "react";
import "./Home.scss";

import menu from "../../assets/data/menuData";
import MenuCard from "../MenuCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filteredMenu = menu
    .filter((category) =>
      selectedCategory === "All" ? true : category.category === selectedCategory
    )
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  const sortedMenu = sortBy
    ? [...filteredMenu].sort((a, b) => {
        const priceA =
          a.items[0]?.price?.replace?.("₹", "")?.replace?.(",", "") || 0;
        const priceB =
          b.items[0]?.price?.replace?.("₹", "")?.replace?.(",", "") || 0;
        return sortBy === "asc" ? priceA - priceB : priceB - priceA;
      })
    : filteredMenu;

  return (
    <div>
      <h1>Restaurant Menu</h1>

      {/* Global Search Bar */}
      <input
        type="text"
        placeholder="Search for any food item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        {menu.map((category) => (
          <option key={category.category} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>

      {/* Sorting */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Render Menu */}
      <div>
        <MenuCard sortedMenu={sortedMenu} />
      </div>
    </div>
  );
};

export default Home;
