import React, { useState } from 'react';


const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="category-filter">
      {/* Hamburger Toggler */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>

      {/* Category Buttons */}
      <div className={`category-buttons ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => onCategoryChange('All')}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => onCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;