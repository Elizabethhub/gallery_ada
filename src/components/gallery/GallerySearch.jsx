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

  return (
    <div>
      <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Enter search query" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

GallerySearch.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default GallerySearch;
