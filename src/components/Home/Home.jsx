import React, { useState } from "react";
import "./Home.scss";

import menu from "../../assets/data/menuData";
import MenuCard from "../MenuCard";
 
import brandingLogo from "../../assets/images/Soles on Wheels Logo.webp";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
} from "react-icons/fa";

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
    <div className="home-container">
      <div className="company-branding">
        <img
          src={brandingLogo}
          alt="branding"
          style={{ width: "300px", height: "300px" }}
        />

        <h1>MUNNAR</h1>
        <h1>MENU</h1>
        <p>-Since 2018-</p>
        <p>Ph: +91 8921152086</p>
        <p>www.solesonwheels.com</p>
        <p>Moolakada, Pallivasal, Munnar, Kerala 685612</p>

        <div className="social-icons">
          <div>
            <FaInstagram color="#fff" />
          </div>
          <div>
            <FaFacebookF color="#fff" />
          </div>
          <div>
            <FaTwitter color="#fff" />
          </div> 
        </div>
      </div>

      {/* Global Search Bar */}
      <input
        type="text"
        placeholder="Search for any food item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ color: "#000" }}
      />

      {/* Category Filter */}
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

      {/* Sorting */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ color: "#000" }}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Render Menu */}
      <div className="pb-300">
        <MenuCard sortedMenu={sortedMenu} />
      </div>
    </div>
  );
};

export default Home;
