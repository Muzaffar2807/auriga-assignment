import React, { useState } from "react";
import "./Home.scss";

import menu from "../../assets/data/menuData";
import MenuCard from "../MenuCard";

import brandingLogo from "../../assets/images/kings2-dhaba-removebg-preview.png";
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

     const openFacebookPage = () => {
       window.open("https://www.facebook.com/abdurah2012/", "_blank");
     };

     const openFamilyDhanba = () => {
       window.open("https://kingsfamilydhaba.com/", "_blank");
     };
  return (
    <div className="home-container">
      <div className="company-branding">
        <img
          src={brandingLogo}
          alt="branding"
          style={{ width: "300px", height: "300px" }}
        />

        <h1 style={{ color: "#8B0000" }}>KINGS DHABA </h1>
        <h1 className="menu-text">MENU</h1>
        <p>-Since 2019-</p>
        <p>
          Ph:{" "}
          <span style={{ color: "#F59C1C", textDecoration: "underLine" }}>
            +91 777334433
          </span>{" "}
        </p>
        <p  onClick={openFamilyDhanba} style={{ color: "#F59C1C", cursor: 'pointer' }}>www.kingsfamilydhaba.com/</p>
        <p>Sy No 498499 &, Near Iit Kandi Nh 65, </p>
        <p>Sangareddy, Telangana.</p>

        <div className="social-icons">
          <div onClick={openFacebookPage}>
            <FaFacebookF color="#fff" />
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
