import { useState, useEffect } from "react";
import { getPhotos, getPhotosByTag } from "../services/api";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchPhotos(page, searchQuery);
  }, [page, searchQuery]);

  const fetchPhotos = async (page, query = "") => {
    setLoading(true);
    try {
      const response = !query ? await getPhotos(page, 10) : await getPhotosByTag(query, page, 10);
      setPhotos(!query ? response.data : response.data.results);
      const totalPhotos = response.headers["x-total"]; // gettin total number of images
      setTotalPages(totalPhotos ? Math.ceil(totalPhotos / 10) : 1); // total number of pages
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setPage(1);
  };

  return (
    <div>
      <div>
        <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Enter search query" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={() => setColumns(columns === 3 ? 5 : 3)}>{columns === 3 ? "Show 5 Columns" : "Show 3 Columns"}</button>
      <div className="gallery" style={{ columnCount: columns }}>
        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
