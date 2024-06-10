import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Importing your custom CSS

const Navbar = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('Filter');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCategorySelect = (category) => {
    setCategory(category);
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge custom-badge">NewsMag</span>
        </a>
        <div className="dropdown">
          <button
            className="nav-link dropdown-toggle btn custom-filter-button"
            type="button"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory}
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Technology')}>
                Technology
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Business')}>
                Business
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Health')}>
                Health
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Science')}>
                Science
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Sports')}>
                Sports
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Entertainment')}>
                Entertainment
              </a>
            </li>
          </ul>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <div className="date-time custom-date-time me-3">{currentDateTime.toLocaleDateString()}</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
