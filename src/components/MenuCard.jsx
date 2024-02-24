import React from 'react'

const MenuCard = ({ sortedMenu }) => {
  return (
    <div>
      {sortedMenu.map((category) => (
        <div key={category.category}>
          <h2>
            <strong>{category.category}</strong>
          </h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.name}>
                {item.name} - {item.price}
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MenuCard