import React, { useState } from 'react';
import '../css/Navbar.css';

const categories = [
  { name: 'Featured', href: '#featured' },
  { name: 'Haircutting', href: '#haircutting' },
  { name: 'Styling', href: '#styling' },
  { name: 'Color Services', href: '#color-services' },
];

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState('#featured');

  const handleCategoryClick = (href) => {
    setActiveCategory(href);
  };

  return (
    <div className="navbar-container">
      <div className="categories-container">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className={`category-btn ${activeCategory === category.href ? 'category-btn-active' : ''}`}
            onClick={() => handleCategoryClick(category.href)}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
