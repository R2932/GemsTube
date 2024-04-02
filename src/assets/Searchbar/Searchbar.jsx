import { useState } from 'react'
import PropTypes from 'prop-types';
import '@searchbar/Searchbar.css';

function Searchbar({handleSearch}) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };
  return (

    <div className="search-container">
        <form className="search-bar"onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Search..."
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            <img src="search.svg" alt="Search Icon" />
          </button>
        </form>
    </div>
  );
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
