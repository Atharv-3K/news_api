import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Importing your custom CSS

const Navbar = ({ setCategory, setCountry }) => {
  const [selectedCategory, setSelectedCategory] = useState('Filter');
  const [selectedCountry, setSelectedCountry] = useState('us'); // Default to 'us'
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

  const handleCountrySelect = (country) => {
    setCountry(country);
    setSelectedCountry(country);
  };

  // Mapping between country codes and their respective names
  const countryNames = {
    ae: 'United Arab Emirates',
    ar: 'Argentina',
    at: 'Austria',
    au: 'Australia',
    be: 'Belgium',
    bg: 'Bulgaria',
    br: 'Brazil',
    ca: 'Canada',
    ch: 'Switzerland',
    cn: 'China',
    co: 'Colombia',
    cz: 'Czech Republic',
    de: 'Germany',
    eg: 'Egypt',
    fr: 'France',
    gb: 'United Kingdom',
    gr: 'Greece',
    hk: 'Hong Kong',
    hu: 'Hungary',
    id: 'Indonesia',
    ie: 'Ireland',
    il: 'Israel',
    in: 'India',
    it: 'Italy',
    jp: 'Japan',
    kr: 'South Korea',
    lt: 'Lithuania',
    lv: 'Latvia',
    ma: 'Morocco',
    mx: 'Mexico',
    my: 'Malaysia',
    ng: 'Nigeria',
    nl: 'Netherlands',
    no: 'Norway',
    nz: 'New Zealand',
    ph: 'Philippines',
    pl: 'Poland',
    pt: 'Portugal',
    ro: 'Romania',
    rs: 'Serbia',
    ru: 'Russia',
    sa: 'Saudi Arabia',
    se: 'Sweden',
    sg: 'Singapore',
    si: 'Slovenia',
    sk: 'Slovakia',
    th: 'Thailand',
    tr: 'Turkey',
    tw: 'Taiwan',
    ua: 'Ukraine',
    us: 'United States',
    ve: 'Venezuela',
    za: 'South Africa',
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
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory}
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="categoryDropdown">
            {/* Menu items for selecting categories */}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="nav-link dropdown-toggle btn custom-country-button"
            type="button"
            id="countryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {countryNames[selectedCountry.toLowerCase()] || selectedCountry.toUpperCase()}
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="countryDropdown">
            {Object.entries(countryNames).map(([code, name]) => (
              <li key={code}>
                <a className="dropdown-item" href="#" onClick={() => handleCountrySelect(code)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <div className="date-time custom-date-time me-3">{currentDateTime.toLocaleDateString()}</div>
          <div className="date-time custom-date-time">{currentDateTime.toLocaleTimeString()}</div>
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
