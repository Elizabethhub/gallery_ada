import { useState } from "react";
import PropTypes from "prop-types";

const GallerySearch = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" value={searchInput} onChange={handleSearchInput} onKeyDown={handleKeyPress} placeholder="Enter search query" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

GallerySearch.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default GallerySearch;
