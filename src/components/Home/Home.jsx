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
import SearchInput from "../SearchInput";
import CategoryFilter from "../CategoryFilter";
import FilterByPrice from "../FilterByPrice";

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
          style={{ width: "300px", height: "300px",  }}
        />

        <h1 style={{ color: "#8B0000" }}>MUNNAR</h1>
        <h1 className="menu-text">MENU</h1>
        <p>-Since 2018-</p>
        <p>
          Ph:{" "}
          <span style={{ color: "#F59C1C", textDecoration: "underLine" }}>
            +91 8921152086
          </span>{" "}
        </p>
        <p style={{ color: "#F59C1C" }}>www.solesonwheels.com</p>
        <p>Moolakada, Pallivasal, Munnar, </p>
        <p> Kerala 685612</p>

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

      <div className="filter-container">
        <SearchInput
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          menu={menu}
        />

        <FilterByPrice sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Render Menu */}
      <div className="pb-300" style={{ marginBottom: "30px" }}>
        <MenuCard sortedMenu={sortedMenu} />
      </div>
    </div>
  );
};

export default Home;
