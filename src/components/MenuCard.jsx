import React from "react";
import "./MenuCard.scss";

const MenuCard = ({ sortedMenu }) => {
  return (
    <div>
      {sortedMenu.map((category, index) => (
        <div
          key={category.category}
          className={index % 2 === 0 ? "odd" : "even"}
          style={{ marginBottom: '2rem'}}
        >
          <div className="category-info">
            <div className="left">
              <h2 className="category-heading">
                <strong>{category.category}</strong>
              </h2>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name}>
                    <p className="item-name">
                      {item.name} - {item.price}
                    </p>
                    <p className="item-desc">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <img
                src={require(`${process.env.REACT_APP_IMAGE_URL}/${category.image}`)}
                alt=""
                className="item-image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
